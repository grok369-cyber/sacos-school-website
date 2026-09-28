import { NextResponse } from "next/server";

const endpoint = "https://api.web3forms.com/submit";

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return NextResponse.json({ message: "The inquiry form is not configured yet." }, { status: 503 });
    }

    const name = clean(body?.name, 120);
    const email = clean(body?.email, 254);
    const phone = clean(body?.phone, 40);
    const inquiryType = clean(body?.inquiry_type, 80) || "General inquiry";
    const message = clean(body?.message, 5000);

    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Please provide your name, a valid email address and your message." }, { status: 400 });
    }

    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("inquiry_type", inquiryType);
    formData.append("message", message);
    formData.append("subject", "Savio website inquiry: " + inquiryType);
    formData.append("from_name", "Savio Secondary School Website");
    formData.append("botcheck", "");

    const response = await fetch(endpoint, { method: "POST", body: formData, cache: "no-store" });
    const result = await response.json();

    if (!response.ok || result?.success === false) {
      console.error("Web3Forms inquiry error:", result);
      return NextResponse.json({ message: result?.message || "We couldn't send your inquiry. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ message: "Thank you. Your inquiry has been sent to Savio Secondary School." });
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json({ message: "We couldn't send your inquiry. Please try again." }, { status: 500 });
  }
}

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
      return NextResponse.json(
        { message: "The inquiry form is not configured yet." },
        { status: 503 },
      );
    }

    const name = clean(body?.name, 120);
    const email = clean(body?.email, 254);
    const phone = clean(body?.phone, 40);
    const inquiryType = clean(body?.inquiry_type, 80) || "General inquiry";
    const message = clean(body?.message, 5000);

    if (
      !name ||
      !email ||
      !message ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { message: "Please provide your name, a valid email address and your message." },
        { status: 400 },
      );
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        phone,
        inquiry_type: inquiryType,
        message,
        subject: "Savio website inquiry: " + inquiryType,
        from_name: "Savio Secondary School Website",
        botcheck: "",
      }),
      cache: "no-store",
    });

    const responseText = await response.text();

    let result: { success?: boolean; message?: string } = {};
    try {
      result = JSON.parse(responseText);
    } catch {
      console.error("Web3Forms returned a non-JSON response:", responseText.slice(0, 500));
    }

    if (!response.ok || result.success === false) {
      console.error("Web3Forms inquiry error:", {
        status: response.status,
        message: result.message,
        response: responseText.slice(0, 500),
      });

      return NextResponse.json(
        {
          message:
            result.message ||
            "Web3Forms rejected the inquiry. Please check the Web3Forms access key and configuration.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message: "Thank you. Your inquiry has been sent to Savio Secondary School.",
    });
  } catch (error) {
    console.error("Inquiry submission error:", error);

    return NextResponse.json(
      { message: "The server could not process the inquiry. Please try again." },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";
import { client, sanityWriteToken, writeClient } from "@/lib/sanity";

function normalizeEmail(value: unknown) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = normalizeEmail(body?.email);

    if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    if (!sanityWriteToken) {
      return NextResponse.json(
        { message: "Newsletter signup is not configured yet." },
        { status: 503 },
      );
    }

    const existing = await client.fetch<{ _id: string; status?: string } | null>(
      `*[_type == "newsletterSubscriber" && lower(email) == $email][0]{_id,status}`,
      { email },
      { useCdn: false },
    );

    if (existing?.status === "active") {
      return NextResponse.json({ message: "This email is already subscribed." });
    }

    if (existing?._id) {
      await writeClient.patch(existing._id).set({
        status: "active",
        subscribedAt: new Date().toISOString(),
      }).commit();
    } else {
      await writeClient.create({
        _type: "newsletterSubscriber",
        email,
        status: "active",
        subscribedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({ message: "Thanks! You're now subscribed to Savio updates." });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { message: "We couldn't complete your subscription. Please try again." },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { leads } from "@/db/schema";
export async function POST(request: Request) {
  const data = await request.formData();
  const name = String(data.get("name") || "").trim(); const phone = String(data.get("phone") || "").trim();
  const interest = String(data.get("interest") || "").trim(); const message = String(data.get("message") || "").trim();
  const website = String(data.get("website") || "").trim();
  if (website) return NextResponse.json({ ok: true }, { status: 201 });
  if (!name || !phone || !interest || name.length > 100 || phone.length > 30 || interest.length > 100 || message.length > 1500) return NextResponse.json({ error: "Revise os campos informados." }, { status: 400 });
  await getDb().insert(leads).values({ name, phone, interest, message });
  return NextResponse.json({ ok: true }, { status: 201 });
}

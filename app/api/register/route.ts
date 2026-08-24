import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body.phone !== "string" || body.phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // TODO: wire to the school's email / CRM / form service of choice.
  console.log("[registration]", {
    name: body.name,
    dob: body.dob,
    programme: body.programme,
    phone: body.phone,
    wa: body.wa,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}

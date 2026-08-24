"use client";

import { FormEvent, useState } from "react";

const PROGRAMMES = [
  "Toddler Community — 18 months to 3",
  "Montessori — 3 to 6",
  "Lower Elementary — 6 to 9",
  "Upper Elementary — 9 to 12",
  "Secondary — 12 to 17",
];

type Status = { ok: boolean; message: string } | null;

export default function RegistrationForm() {
  const [status, setStatus] = useState<Status>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const phoneDigits = String(data.get("phone") || "").replace(/[^0-9+]/g, "");
    const wa = data.get("wa") === "on";

    if (phoneDigits.replace(/\D/g, "").length < 10) {
      setStatus({
        ok: false,
        message:
          "We couldn't send that — check the phone number and try again.",
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          dob: data.get("dob"),
          programme: data.get("programme"),
          phone: phoneDigits,
          wa,
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus({
        ok: true,
        message: `Registration received. We will confirm your visit by ${
          wa ? "WhatsApp" : "phone"
        } today.`,
      });
      form.reset();
    } catch {
      setStatus({
        ok: false,
        message:
          "We couldn't send that — check the phone number and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 rounded-panel bg-paper p-5.5 text-ink"
    >
      <label className="field-label">
        Your name
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          className="field-control"
        />
      </label>

      <label className="field-label">
        Child&rsquo;s date of birth
        <input name="dob" type="date" required className="field-control" />
      </label>

      <label className="field-label">
        Preferred programme
        <select name="programme" required className="field-control">
          {PROGRAMMES.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </label>

      <label className="field-label">
        Phone
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          placeholder="0813 024 7140"
          className="field-control"
        />
      </label>

      <label className="flex min-h-[44px] cursor-pointer items-center gap-3 text-[15px]">
        <input
          name="wa"
          type="checkbox"
          className="h-[22px] w-[22px] accent-sky"
        />
        Reply to me on Whatsapp: 07080293675
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="btn btn-primary min-h-[52px] w-full !text-[17px] font-extrabold disabled:opacity-70"
      >
        {submitting ? "Sending…" : "Register your child now"}
      </button>

      {status && (
        <p
          role="status"
          className="m-0 rounded-input border-l-4 px-3.5 py-3 text-[15px] leading-snug"
          style={{
            background: status.ok ? "#EAF4FA" : "#FDF0E1",
            borderColor: status.ok ? "#2C7CB0" : "#E39B45",
          }}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}

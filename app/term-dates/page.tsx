import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Term dates",
  description: "Term dates for Hephzibah Kings and Queens Montessori School.",
};

export default function TermDatesPage() {
  return (
    <StubPage
      eyebrow="School calendar"
      title="Term dates"
      body="The 2026/2027 calendar is being finalised. Resumption day is 12 September 2026 — call the school office on 0813 024 7140 for the full calendar in the meantime."
    />
  );
}

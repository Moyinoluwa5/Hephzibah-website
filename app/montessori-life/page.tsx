import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Montessori Life",
  description: "Stories from classrooms at Hephzibah Kings and Queens Montessori School.",
};

export default function MontessoriLifePage() {
  return (
    <StubPage
      eyebrow="Montessori Life"
      title="Stories from our classrooms"
      body="We're building this page — photo essays and notes from the work cycle, the garden and the elementary going-outs. In the meantime, come and see a morning for yourself, or call us on 0813 024 7140."
    />
  );
}

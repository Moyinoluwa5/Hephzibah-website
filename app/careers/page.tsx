import type { Metadata } from "next";
import StubPage from "@/components/StubPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: `Work at ${SITE.name}.`,
};

export default function CareersPage() {
  return (
    <StubPage
      eyebrow="Work with us"
      title="Careers at Hephzibah"
      body={`We aren't listing open roles here yet. If you're an AMI-trained directress or a qualified teacher interested in joining us, email ${SITE.email} with your CV.`}
    />
  );
}

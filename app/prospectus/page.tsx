import type { Metadata } from "next";
import StubPage from "@/components/StubPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prospectus",
  description: `Request the ${SITE.name} prospectus.`,
};

export default function ProspectusPage() {
  return (
    <StubPage
      eyebrow="Learn more"
      title="Prospectus"
      body={`A downloadable prospectus is coming soon. In the meantime, register your child and we'll send the fee schedule and prospectus together, the same working day — or call ${SITE.phoneDisplay}.`}
    />
  );
}

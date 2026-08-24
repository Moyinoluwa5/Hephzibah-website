import type { Metadata } from "next";
import StubPage from "@/components/StubPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Safeguarding policy",
  description: `The safeguarding policy of ${SITE.name}.`,
};

export default function SafeguardingPolicyPage() {
  return (
    <StubPage
      eyebrow="Safety"
      title="Safeguarding policy"
      body={`Our full written safeguarding policy is being published here shortly. For questions in the meantime, speak to our resident nurse and safeguarding lead on ${SITE.phoneDisplay}.`}
    />
  );
}

import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Parent Portal",
  description: "Sign in to the Hephzibah Kings and Queens Montessori School parent portal.",
};

export default function ParentPortalPage() {
  return (
    <StubPage
      eyebrow="For current parents"
      title="Parent Portal"
      body="The parent portal is on its way. Until it's live, reach your child's directress directly by phone or WhatsApp on 0813 024 7140."
    />
  );
}

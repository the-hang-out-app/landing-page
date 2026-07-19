import { FeatureRows } from "@/components/feature-rows";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { LanguageSection } from "@/components/language-section";
import { PrivacyCard } from "@/components/privacy-card";
import { RevealObserver } from "@/components/reveal-observer";
import { TrustStrip } from "@/components/trust-strip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <LanguageSection />
      <FeatureRows />
      <PrivacyCard />
      <FinalCta />
      <RevealObserver />
    </>
  );
}

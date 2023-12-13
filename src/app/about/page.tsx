import AboutUsContentSection from "../components/about/AboutUsContentSection";
import AboutUsSection from "../components/about/AboutUsSection";

export default function AboutPage() {
  return (
    <main className="grid grid-rows-[60vh,auto,auto] gap-y-24">
      <AboutUsSection />
      <AboutUsContentSection />
    </main>
  );
}

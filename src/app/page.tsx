import HeroGraphicLinks from "./components/Hero/HeroGraphicLinks";
import HeroSection from "./components/Hero/HeroSection";
import HomepageFeatures from "./components/Hero/HomepageFeatures";

export default function HomePage() {
  return (
    <div className="grid lg:grid-rows-[75vh_minmax(30vw,40vw)_auto] gap-y-16">
      <HeroSection />
      <HeroGraphicLinks />
      <HomepageFeatures />
    </div>
  );
}

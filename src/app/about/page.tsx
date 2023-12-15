import AboutUsSection from "../components/about/AboutUsSection";

export default function AboutPage() {
  return (
    <main className="grid grid-rows-[minmax(40rem,auto)_minmax(20rem,auto)_repeat(2,minmax(30rem,auto))] lg:pt-12 gap-y-24">
      <AboutUsSection />
    </main>
  );
}

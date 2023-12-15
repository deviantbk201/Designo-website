import Image from "next/image";
import Heading from "../Heading";
import FeatureCard from "../FeatureCard";

export default function HomepageFeatures() {
  return (
    <section className="lg:grid lg:grid-cols-3 lg:py-16 lg:gap-x-4 lg:grid-rows-1 grid-rows-[repeat(3,40vw)] lg:gap-y-4 lg:divide-y-0 flex flex-col gap-4 divide-y-1 divide-peach  ">
      <FeatureCard
        imageSrc="/home/desktop/illustration-friendly.svg"
        imageAlt="two people holding up a signboard that says hi "
        heading="friendly"
      >
        <p className="text-md lg:text-sm px-2">
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide.
        </p>
      </FeatureCard>
      <FeatureCard
        imageSrc="/home/desktop/illustration-passionate.svg"
        imageAlt="a guy working on pc"
        heading="Passionate"
      >
        <p className="text-md lg:text-sm">
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </p>
      </FeatureCard>
      <FeatureCard
        imageSrc="/home/desktop/illustration-resourceful.svg"
        imageAlt="a guy working drwing on wacom tablet"
        heading="Resourceful"
      >
        <p className="text-md lg:text-sm">
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs.
        </p>
      </FeatureCard>
    </section>
  );
}

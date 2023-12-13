import Image from "next/image";
import Heading from "../Heading";
import FeatureCard from "../FeatureCard";
import { Button } from "@nextui-org/react";

export default function AboutUsContentSection() {
  return (
    <>
      <section>
        <div className="grid lg:grid-cols-[1fr,2fr] grid-rows-[300px_max-content] overflow-hidden rounded-2xl">
          <figure className="relative overflow-hidden ">
            <Image
              src="/about/desktop/image-world-class-talent.jpg"
              alt="a person's hand pinning ideas related images on pinboard"
              fill
              style={{ objectFit: "cover" }}
            />
          </figure>
          <div className="bg-[url(/about/desktop/bg-pattern-hero-about-desktop.svg)] bg-[120%] bg-cover flex flex-col items-start justify-center px-12 py-4 bg-lightestPeach gap-8">
            <Heading as="h2" styles="text-peach">
              World-class talent
            </Heading>
            <p>
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms. Our team is
              multi-disciplinary and we are not merely interested in form —
              content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-3 lg:gap-x-4 grid-rows-3">
        <div>
          <FeatureCard
            imageSrc="/shared/desktop/illustration-canada.svg"
            imageAlt="a sepia image of vancouver tower"
            heading="Canada"
          >
            <Button size="lg" className="bg-peach text-white rounded-lg">
              {" "}
              See Location
            </Button>
          </FeatureCard>
        </div>
        <div>
          <FeatureCard
            imageSrc="/shared/desktop/illustration-australia.svg"
            imageAlt="a sepia image of Lotus opera house"
            heading="Australia"
          >
            <Button size="lg" className="bg-peach text-white rounded-lg">
              See Location
            </Button>
          </FeatureCard>
        </div>
        <div>
          <FeatureCard
            imageSrc="/shared/desktop/illustration-united-kingdom.svg"
            imageAlt="a sepia image of London stamdord bridge"
            heading="United Kingdom"
          >
            <Button size="lg" className="bg-peach text-white rounded-lg">
              See Location
            </Button>
          </FeatureCard>
        </div>
      </section>

      <section>
        <div className="grid lg:grid-cols-[2fr,1fr] grid-rows-[300px_auto] rounded-2xl overflow-hidden">
          <div className="bg-[url(/about/desktop/bg-pattern-hero-about-desktop.svg)] bg-[120%]  bg-cover flex flex-col items-start justify-center px-12 bg-lightestPeach gap-8 row-start-2 py-4">
            <Heading as="h2" styles="text-peach">
              The real deal
            </Heading>
            <p>
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success. We are
              visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </p>
          </div>
          <figure className="relative overflow-hidden row-start-1 row-end-2">
            <Image
              src="/about/desktop/image-real-deal.jpg"
              alt="a person's hand pinning ideas related images on pinboard"
              fill
              style={{ objectFit: "cover" }}
            />
          </figure>
        </div>
      </section>
    </>
  );
}

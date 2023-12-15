import Image from "next/image";
import Heading from "../Heading";
import AboutContentCard from "./AboutContentCard";
import AboutContentCardContent from "./AboutContentCardContent";
import { Button } from "@nextui-org/react";
import FeatureCard from "../FeatureCard";

export default function AboutUsSection() {
  return (
    <>
      <AboutContentCard ltr>
        <AboutContentCardContent
          ltr
          imageSrc="/about/desktop/image-about-hero.jpg"
          imageAlt="a person's hand pinning ideas related images on pinboard"
          text={`
                      Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
            `}
          title="About Us"
        />
      </AboutContentCard>

      {/* feature cards */}
      <div className="grid lg:grid-cols-3 lg:gap-x-4 grid-rows-3 lg:grid-rows-1">
        <div>
          <FeatureCard
            imageSrc="/shared/desktop/illustration-canada.svg"
            imageAlt="a sepia image of vancouver tower"
            heading="Canada"
          >
            <Button size="lg" className="bg-peach text-white rounded-lg">
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
      </div>
      {/* world class talent  - real deal*/}
      <AboutContentCard ltr={false}>
        <AboutContentCardContent
          ltr
          imageSrc="/about/desktop/image-real-deal.jpg"
          imageAlt="a person's hand pinning ideas related images on pinboard"
          text={`
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success. We are
              visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            `}
          title="Real Deal "
        />
      </AboutContentCard>
      <AboutContentCard ltr={false}>
        <AboutContentCardContent
          ltr={false}
          imageSrc="/about/desktop/image-world-class-talent.jpg"
          imageAlt="a person ' s hand pinning ideas related images on pinboard"
          text={`We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms. Our team is
              multi-disciplinary and we are not merely interested in form —
              content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand &apos; s story and mission.`}
          title="World Class talent"
        />
      </AboutContentCard>
    </>
  );
}

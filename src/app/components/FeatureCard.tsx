import Image from "next/image";
import Heading from "./Heading";

type FeaturedCardPropType = {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  children: any;
};

export default function FeatureCard({
  imageSrc,
  heading,
  imageAlt,
  children,
}: FeaturedCardPropType) {
  return (
    <div className="flex flex-col lg:gap-4 gap-2 py-4 items-center">
      <figure className="relative">
        <Image
          src="/home/desktop/bg-pattern-hero-home.svg"
          alt="a peach translucent circle"
          width={200}
          height={200}
          style={{ position: "absolute", zIndex: -1 }}
        />
        <Image src={imageSrc} alt={imageAlt} width={202} height={202} />
      </figure>
      <Heading as="h3" styles="uppercase tracking-widest">
        {heading}
      </Heading>
      {children}
    </div>
  );
}

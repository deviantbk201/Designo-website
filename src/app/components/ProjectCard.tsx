import Image from "next/image";
import Heading from "./Heading";

type ProjectCardPropType = {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  children: any;
};

export default function ProjectCard({
  imageSrc,
  imageAlt,
  children,
  heading,
}: ProjectCardPropType) {
  return (
    <div className="flex flex-col items-center justify-center lg:gap-8 gap-4 bg-lightestPeach w-auto overflow-hidden rounded-2xl">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={500}
        height={500}
        className="lg:hover:scale-125"
      />
      <div className="flex flex-col justify-center items-center lg:gap-4 gap-2 px-6 py-4 ">
        <Heading as="h3" styles="tracking-[5px] text-peach capitalize">
          {heading}
        </Heading>
        <p className="text-base font-normal text-gray-500">{children}</p>
      </div>
    </div>
  );
}

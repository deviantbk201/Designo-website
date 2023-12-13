import { Button } from "@nextui-org/react";
import Heading from "../Heading";
import Text from "../Text";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-peach grid rounded-lg grid-rows-2 lg:grid-cols-2 relative z-[10] overflow-hidden ">
      <div className="lg:col-span-1 lg:row-span-2 lg:col-start-1 lg:p-20  pt-6 px-4 flex flex-col gap-4 items-start">
        <Heading as="h2" styles="text-white">
          Award-winning Custom designs and digital branding solutions
        </Heading>
        <Text styles="text-white">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </Text>
        <Button
          className="bg-white uppercase tracking-wider font-md rounded-md p-y-2 p-x-2 inline-block"
          size="lg"
        >
          Learn More
        </Button>
      </div>
      <div className="lg:col-span-1 lg:col-start-2 relative lg:row-start-1 lg:row-span-2 justify-items-end">
        <div className="bg-gradient-to-b from-darkPeach to-peach absolute w-full h-full z-[-100] inset-y-0 left-0 rounded-full"></div>
        <div className="absolute lg:bottom-[-10rem] lg:right-[-10%] bottom-[-20rem]  z-index-1">
          <Image
            src="/home/desktop/image-hero-phone.png"
            alt="a black iPhone with an orange wallpaper"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

import { Button } from "@nextui-org/react";
import Heading from "../Heading";
import Text from "../Text";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-peach grid rounded-lg grid-rows-[min-content_30rem] lg:grid-cols-2 relative z-[10] overflow-hidden ">
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
      <div className="bg-[url(/home/desktop/bg-pattern-hero-home.svg)] bg-cover lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-2">
        {/* <div className="absolute lg:bottom-[-10rem] lg:right-[-10%] bottom-[-20rem]  z-index-1"></div> */}
        <figure className="relative top-[-40%] left-[20%] lg:top-[0] lg:left-[0]">
          <Image
            src="/home/desktop/image-hero-phone.png"
            alt="a black iPhone with an orange wallpaper"
            width={500}
            height={500}
          />
        </figure>
      </div>
    </section>
  );
}

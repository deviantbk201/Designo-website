import { Button } from "@nextui-org/react";
import Heading from "./Heading";
import OrangeCapsule from "./OrangeCapsule";

export default function CTA() {
  return (
    <OrangeCapsule>
      <div className=" grid  lg:grid-cols-[3fr_1fr] h-full items-center justify-items-center">
        <div className=" flex gap-2 flex-col items-center  justify-center lg:px-20 flex-wrap">
          <Heading as="h2" styles="text-white text-center lg:text-start">
            Let&apos;s talk about Your project
          </Heading>
          <p className="text-sm text-white lg:inline-block hidden">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <div className=" lg:self-center lg:pr-5 ">
          <Button className="bg-white text-black" size="lg">
            <p className="tracking-widest">Get in Touch</p>
          </Button>
        </div>
      </div>
    </OrangeCapsule>
  );
}

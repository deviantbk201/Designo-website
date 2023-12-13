import { Button } from "@nextui-org/react";
import Heading from "./Heading";
import OrangeCapsule from "./OrangeCapsule";

export default function CTA() {
  return (
    <OrangeCapsule>
      <div className=" grid  grid-cols-2 h-full ">
        <div className=" flex gap-2 flex-col flex-wrap self-center justify-self-start px-24">
          <Heading as="h2" styles="text-white">
            Let&apos;s talk about Your project
          </Heading>
          <p className="text-sm text-white">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <div className=" self-center justify-self-center">
          <Button className="bg-white text-black" size="lg">
            <p className="tracking-widest">Get in Touch</p>
          </Button>
        </div>
      </div>
    </OrangeCapsule>
  );
}

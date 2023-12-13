import Image from "next/image";
import Heading from "../Heading";
import Link from "next/link";
import GraphicLink from "../GraphicLink";

export default function HeroGraphicLinks() {
  return (
    <div className="grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-4 gap-y-4  grid-rows-[repeat(3,45vw)]">
      <div className="rounded-xl object-cover overflow-hidden lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:row-start-1 relative">
        <GraphicLink
          title="web design"
          linkHref="/web-design"
          imageSrc="/home/desktop/image-web-design-large.jpg"
          imageAlt="a black and white picture of Apple Macbook"
        />
      </div>
      {/* 2 */}
      <div className=" rounded-xl overflow-hidden lg:col-start-2 lg:row-start-1 lg:col-span-1 lg:row-span-1 relative ">
        <GraphicLink
          title="app design"
          linkHref="/app-design"
          imageSrc="/home/desktop/image-app-design.jpg"
          imageAlt="a black and white picture of Apple iphone"
        />
      </div>
      <div className="rounded-xl overflow-hidden lg:col-start-2 lg:row-start-2 lg:col-span-1 lg:row-span-1 relative ">
        <GraphicLink
          title="graphic design"
          linkHref="/graphic-design"
          imageSrc="/home/desktop/image-graphic-design.jpg"
          imageAlt="a black and white picture showing cover of book the chain ,authored by dan the man"
        />
      </div>
    </div>
  );
}
// bg-[url(/home/desktop/image-web-design-large.jpg)] object-cover

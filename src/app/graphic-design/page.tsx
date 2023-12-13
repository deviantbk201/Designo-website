import Heading from "../components/Heading";
import OrangeCapsule from "../components/OrangeCapsule";
import GraphicDesignGraphicLinks from "../components/graphic-design/GraphicDesignGraphicLinks";
import GraphicDesignPrjectCards from "../components/graphic-design/GraphicDesignPrjectCards";

export default function GraphicDesignPage() {
  return (
    <section className="grid grid-rows-[20rem,auto,10rem] gap-y-12 ">
      <OrangeCapsule>
        <div className="h-full flex flex-col tracking-widest items-center gap-4 justify-center">
          <Heading as="h1" styles="capitalize text-white ">
            Graphic Design
          </Heading>
          <p className="text-base text-white text-center">
            We deliver eye-catching branding materials that are tailored to meet
            your business objectives.
          </p>
        </div>
      </OrangeCapsule>
      <GraphicDesignPrjectCards />
      <GraphicDesignGraphicLinks />
    </section>
  );
}

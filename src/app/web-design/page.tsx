import Heading from "../components/Heading";
import OrangeCapsule from "../components/OrangeCapsule";
import WebDesignGraphicLinks from "../components/web-design comp/WebDesignGraphicLinks";
import WebDesignProjectCards from "../components/web-design comp/WebDesignProjectCards";

export default function WebDesignPage() {
  return (
    <section className="grid lg:grid-rows-[20rem,auto,20rem]  grid-rows-[20rem,auto,30rem]  gap-y-12 ">
      <OrangeCapsule>
        <div className="h-full flex flex-col tracking-widest items-center gap-4 justify-center">
          <Heading as="h2" styles="capitalize text-white ">
            Web Design
          </Heading>
          <p className="text-base text-white text-center">
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </div>
      </OrangeCapsule>

      <WebDesignProjectCards />
      <WebDesignGraphicLinks />
    </section>
  );
}

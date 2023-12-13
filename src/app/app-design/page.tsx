import Heading from "../components/Heading";
import OrangeCapsule from "../components/OrangeCapsule";
import AppDesignGraphicLinks from "../components/app-design/AppDesignGraphicLinks";
import AppDesignProjectCards from "../components/app-design/AppDesignProjectCards";

export default function AppDesignPage() {
  return (
    <section className="grid grid-rows-[20rem,auto,10rem]">
      <OrangeCapsule>
        <div className="h-full flex flex-col tracking-widest items-center gap-4 justify-center">
          <Heading as="h2" styles="capitalize text-white ">
            App Design
          </Heading>
          <p className="text-base text-white text-center">
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </div>
      </OrangeCapsule>
      <AppDesignProjectCards />
      <AppDesignGraphicLinks />
    </section>
  );
}

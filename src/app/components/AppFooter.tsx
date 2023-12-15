import CTA from "./CTA";

import FooterNav from "../components/footer/FooterNav";
import FooterLocationCard from "./footer/FooterLocationCard";
import FooterSocialLinks from "./footer/FooterSocialLinks";
export default function AppFooter() {
  return (
    <section className=" bg-black grid grid-rows-2 gap-y-4 lg:pt-32 lg:px-24  pb-12 relative">
      {/* <div className="absolute top-[-50%] left-[8%]"> */}
      <div className="absolute lg:top-[-40%] left-[20%]  top-[-25%] right-[20%]">
        <CTA />
      </div>
      <div className="border-b-slate-700 border-b-2  flex justify-center items-end py-4 ">
        <FooterNav />
      </div>
      <div className="flex lg:flex-row flex-col gap-12 justify-between items-center ">
        <FooterLocationCard />
        <FooterSocialLinks />
      </div>
    </section>
  );
}

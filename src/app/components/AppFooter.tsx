import CTA from "./CTA";

import FooterNav from "../components/footer/FooterNav";
import FooterLocationCard from "./footer/FooterLocationCard";
import FooterSocialLinks from "./footer/FooterSocialLinks";
export default function AppFooter() {
  return (
    <section className=" bg-black grid grid-rows-2 gap-y-4 p-24 relative">
      <div className="absolute top-[-50%] left-[8%]">
        <CTA />
      </div>
      <div className="border-b-slate-700 border-b-2  self-center py-4">
        <FooterNav />
      </div>
      <div className="flex justify-between align-end ">
        <FooterLocationCard />
        <FooterSocialLinks />
      </div>
    </section>
  );
}

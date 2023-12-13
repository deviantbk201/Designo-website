import ProjectCard from "../ProjectCard";

export default function WebDesignProjectCards() {
  return (
    <div className="lg:flex lg:flex-wrap lg:gap-8 grid grid-rows-6 gap-y-4 ">
      <div className="lg:w-[30%]">
        <ProjectCard
          imageSrc="/web-design/desktop/image-express.jpg"
          imageAlt="screenshot of homepage of express.com"
          heading="Express"
        >
          A multi-carrier shipping website for ecommerce businesses
        </ProjectCard>
      </div>
      <div className="lg:w-[30%]">
        <ProjectCard
          imageSrc="/web-design/desktop/image-blogr.jpg"
          imageAlt="screenshot of homepage of blogr.com"
          heading="Blogr"
        >
          Blogr is a platform for creating an online blog or publication
        </ProjectCard>
      </div>
      <div className="lg:w-[30%]">
        <ProjectCard
          imageSrc="/web-design/desktop/image-builder.jpg"
          imageAlt="screenshot of homepage of builder.com"
          heading="Builder"
        >
          Get expert training in coding, data, design, and digital marketing
        </ProjectCard>
      </div>
      <div className="lg:w-[30%]">
        <ProjectCard
          imageSrc="/web-design/desktop/image-camp.jpg"
          imageAlt="screenshot of homepage of camp.com"
          heading="camp"
        >
          Get expert training in coding, data, design, and digital marketing
        </ProjectCard>
      </div>
      <div className="lg:w-[30%]">
        <ProjectCard
          imageSrc="/web-design/desktop/image-photon.jpg"
          imageAlt="screenshot of homepage of photon.com"
          heading="photon"
        >
          A state-of-the-art music player with high-resolution audio and DSP
          effects
        </ProjectCard>
      </div>
      <div className="lg:w-[30%]">
        <ProjectCard
          imageSrc="/web-design/desktop/image-transfer.jpg"
          imageAlt="screenshot of homepage of transfer.com"
          heading="transfer"
        >
          Site for low-cost money transfers and sending money within seconds
        </ProjectCard>
      </div>
    </div>
  );
}

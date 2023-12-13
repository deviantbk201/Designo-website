import ProjectCard from "../ProjectCard";

export default function GraphicDesignPrjectCards() {
  return (
    <div className="lg:flex lg:flex-wrap lg:gap-8 grid grid-rows-3 gap-y-4 ">
      <div className="lg:w-[30%]">
        <ProjectCard
          imageSrc="/graphic-design/desktop/image-change.jpg"
          imageAlt="Tim brown's new book's cover"
          heading="The Change"
        >
          A book cover designed for Tim Brown’s new release, ‘Change’
        </ProjectCard>
      </div>
      <div className="lg:w-[30%]">
        <ProjectCard
          imageSrc="/graphic-design/desktop/image-boxed-water.jpg"
          imageAlt="A simple packaging concept made for Boxed Water"
          heading="BOXED WATER"
        >
          A simple packaging concept made for Boxed Water
        </ProjectCard>
      </div>
      <div className="lg:w-[30%]">
        <ProjectCard
          imageSrc="/graphic-design/desktop/image-science.jpg"
          imageAlt="A poster made in collaboration with the Federal Art Project "
          heading="Sciences"
        >
          A poster made in collaboration with the Federal Art Project
        </ProjectCard>
      </div>
    </div>
  );
}

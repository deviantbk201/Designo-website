import ProjectCard from "../ProjectCard";

export default function AppDesignProjectCards() {
  return (
    <div className="lg:flex lg:flex-wrap lg:gap-8 grid grid-rows-5 gap-y-4">
      <div className="lg:w-[30%]">
        <ProjectCard
          imageSrc="/app-design/desktop/image-airfilter.jpg"
          imageAlt="screenshot of homepage of airfilter.app"
          heading="airfilter"
        >
          Solving the problem of poor indoor air quality by filtering the air
        </ProjectCard>
      </div>
      <div className="lg:w-[30%]">
        <ProjectCard
          imageSrc="/app-design/desktop/image-eyecam.jpg"
          imageAlt="screenshot of homepage of eyecam.com"
          heading="eyecam"
        >
          Product that lets you edit your favorite photos and videos at any time
        </ProjectCard>
      </div>
      <div className="lg:w-[30%]">
        <ProjectCard
          imageSrc="/app-design/desktop/image-faceit.jpg"
          imageAlt="screenshot of homepage of faceit.com"
          heading="faceit"
        >
          Get to meet your favorite internet superstar with the faceit app
        </ProjectCard>
      </div>
      <div className="lg:w-[30%]">
        <ProjectCard
          imageSrc="/app-design/desktop/image-todo.jpg"
          imageAlt="screenshot of homepage of TODO.com"
          heading="TODO"
        >
          A todo app that features cloud sync with light and dark mode
        </ProjectCard>
      </div>
      <div className="lg:w-[30%]">
        <ProjectCard
          imageSrc="/app-design/desktop/image-loopstudios.jpg"
          imageAlt="screenshot of homepage of loopstudios.com"
          heading="photon"
        >
          A VR experience app made for Loopstudios
        </ProjectCard>
      </div>
    </div>
  );
}

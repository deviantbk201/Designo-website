import GraphicLink from "../GraphicLink";

export default function WebDesignGraphicLinks() {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-x-7 grid-rows-2 gap-y-2">
      <GraphicLink
        imageSrc="/home/desktop/image-app-design.jpg"
        imageAlt="a black and white picture of Apple Macbook"
        title="App-design"
        linkHref="/app-design"
      />
      <GraphicLink
        imageSrc="/home/desktop/image-graphic-design.jpg"
        imageAlt="a black and white picture of Apple Macbook"
        title="graphic-design"
        linkHref="/graphic-design"
      />
    </div>
  );
}

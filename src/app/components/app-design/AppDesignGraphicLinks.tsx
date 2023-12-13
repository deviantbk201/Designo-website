import GraphicLink from "../GraphicLink";

export default function AppDesignGraphicLinks() {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-x-7 grid-rows-[10rem_10rem] gap-y-4">
      <GraphicLink
        imageSrc="/home/desktop/image-web-design-small.jpg"
        imageAlt="a black and white picture of Apple Macbook"
        title="web design"
        linkHref="/web-design"
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

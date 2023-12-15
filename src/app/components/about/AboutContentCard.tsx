type AboutContentCardPropType = {
  children: React.ReactNode;
  ltr: boolean;
};

export default function AboutContentCard({
  children,
  ltr,
}: AboutContentCardPropType) {
  return (
    <div
      className={`grid ${
        ltr ? "lg:grid-cols-[1.5fr_1fr]" : "lg:grid-cols-[1fr_1.5fr]"
      } lg:grid-rows-1 grid-rows-[25rem_auto] bg-peach rounded-2xl overflow-hidden gap-y-4  bg-[url(/about/desktop/bg-pattern-hero-about-desktop.svg)] bg-cover bg-[120%]`}
    >
      {children}
    </div>
  );
}

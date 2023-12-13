type HeadingPropType = {
  as?: string;
  children: any;
  color?: string;
  styles?: string;
};

export default function Heading({
  as,
  children,
  color,
  styles,
}: HeadingPropType) {
  if (as === "h1")
    return (
      <h1
        className={`${
          color ? color : ""
        } text-5xl leading-[3rem] font-medium ${styles}`}
      >
        {children}
      </h1>
    );

  if (as === "h2")
    return (
      <h2
        className={`${
          color ? color : ""
        }font-medium text-4xl leading-[3rem] tracking-wide ${styles}`}
      >
        {children}
      </h2>
    );

  if (as === "h3" || !as)
    return (
      <h3
        className={` text-dark-grey text-xl font-medium tracking-widest ${styles}`}
      >
        {children}
      </h3>
    );
}

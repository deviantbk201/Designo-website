type LocationCardPropsType = {
  direction?: string;
  children: React.ReactNode;
};

export default function LocationsCard({
  direction,
  children,
}: LocationCardPropsType) {
  return (
    <div
      className={`grid ${direction === "ltr" && "lg:grid-cols-[3fr_1fr]"}
        ${direction === "rtl" && "lg:grid-cols-[1fr_3fr]"}
      }  lg:gap-x-4 grid-rows-[200px_auto] 
      `}
    >
      {children}
    </div>
  );
}

type OrangeCapsulePropType = {
  children: any;
  width?: string;
};

export default function OrangeCapsule({
  children,
  width = "70rem",
}: OrangeCapsulePropType) {
  return (
    <div
      className={`bg-peach w-[${width}] h-[15.75rem] rounded-2xl  bg-[url(/web-design/desktop/bg-pattern-intro-web.svg)] bg-[50%]`}
    >
      {children}
    </div>
  );
}

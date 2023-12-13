type TextPropsType = {
  children: any;
  styles: string;
};
export default function Text({ children, styles }: TextPropsType) {
  return <p className={`text-base font-normal ${styles}`}>{children}</p>;
}

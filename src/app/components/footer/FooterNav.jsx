import Link from "next/link";
import Logo from "../Logo";
export default function FooterNav() {
  return (
    <nav className="text-slate-500 flex  lg:flex-row flex-col items-center gap-4  justify-between">
      <Logo imageSource="/shared/desktop/logo-light.png" />

      <ul className="flex gap-8">
        <li>
          <Link href="/about">
            <p className="text-md"> Our Company</p>
          </Link>
        </li>
        <li>
          <Link href="/locations">
            <p className="text-md"> Locations</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p className="text-md"> Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

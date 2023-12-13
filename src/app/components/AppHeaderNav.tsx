import { Link as LinkUi } from "@nextui-org/react";
import Link from "next/link";
export default function AppHeaderNav() {
  return (
    <ul className="flex gap-8 ">
      <li>
        <LinkUi color="foreground">
          <Link href="/about">
            <p className="text-md uppercase"> Our Company</p>
          </Link>
        </LinkUi>
      </li>
      <li>
        <LinkUi color="foreground">
          <Link href="/locations">
            <p className="text-md uppercase"> Locations</p>
          </Link>
        </LinkUi>
      </li>
      <li>
        <LinkUi color="foreground">
          <Link href="/contact">
            <p className="text-md uppercase"> Contact</p>
          </Link>
        </LinkUi>
      </li>
    </ul>
  );
}

"use client";
import {
  Link as LinkUi,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import AppHeaderNav from "./AppHeaderNav";
import Logo from "./Logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();
  // to cclose menu when you navifate to certain page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      height="6rem"
      classNames={{
        wrapper: "px-0",
        item: [
          "text",
          "data-[active=true]:border-bottom-4",
          "data-[active=true]:border-peach",
        ],
        menu: [
          " flex",
          "items-center",
          "justify-center",
          "bg-lightestPeach",
          "text-white",
          "h-[50%]",
        ],
      }}
    >
      <NavbarContent>
        <NavbarBrand>
          <Logo imageSource="/shared/desktop/logo-dark.png" />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      {/*  Navbar content that is usually visible on the lg and md breakpoint*/}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={currentPath === "/about"}>
          <LinkUi color="foreground">
            <Link href="/about">
              <p className="text-md uppercase"> Our Company</p>
            </Link>
          </LinkUi>
        </NavbarItem>
        <NavbarItem isActive={currentPath === "/locations"}>
          <LinkUi color="foreground">
            <Link href="/locations">
              <p className="text-md uppercase"> Locations</p>
            </Link>
          </LinkUi>
        </NavbarItem>
        <NavbarItem isActive={currentPath === "/contact"}>
          <LinkUi color="foreground">
            <Link href="/contact">
              <p className="text-md uppercase"> Contact</p>
            </Link>
          </LinkUi>
        </NavbarItem>
      </NavbarContent>

      {/* navbar menu item that gets displayed under menu */}
      <NavbarMenu>
        <NavbarMenuItem isActive={currentPath === "/about"}>
          <LinkUi color="foreground">
            <Link href="/about">
              <p className="text-md uppercase"> Our Company</p>
            </Link>
          </LinkUi>
        </NavbarMenuItem>
        <NavbarMenuItem isActive={currentPath === "/locations"}>
          <LinkUi color="foreground">
            <Link href="/locations">
              <p className="text-md uppercase"> Locations</p>
            </Link>
          </LinkUi>
        </NavbarMenuItem>
        <NavbarMenuItem isActive={currentPath === "/contact"}>
          <LinkUi className="text-peach">
            <Link href="/contact">
              <p className="text-md uppercase "> Contact</p>
            </Link>
          </LinkUi>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

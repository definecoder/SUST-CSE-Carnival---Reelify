import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import { NextUIProvider } from "@nextui-org/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Services",
    "Analytics",
    "Community",
    "Settings",
    "About Us",    
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <NextUIProvider>
      <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white"
          />
          <NavbarBrand>
            <a href="/">
            <p className="font-bold text-white text-inherit text-2xl">Re:elify</p>
            </a>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link className="text-white font-semibold -tracking-tight" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white font-semibold -tracking-tight" href="#" aria-current="page">
              Community
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white font-semibold -tracking-tight" href="#">
              Pricing
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link className="text-white" href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} className="text-white" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </NextUIProvider>
  );
}

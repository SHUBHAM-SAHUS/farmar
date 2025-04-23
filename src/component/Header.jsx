"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu as MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";

// Reusable Desktop Dropdown Component
const DesktopDropdown = ({ text, items, path = "/" }) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const iconRef = React.useRef(null);

  // This handler checks if the click was within the SVG icon
  const handleButtonClick = (e) => {
    e.preventDefault();

    // Check if the click was on or within the icon element
    if (iconRef.current && iconRef.current.contains(e.target)) {
      setOpen(!open);
    } else {
      // If not clicking the icon, navigate
      router.push(path);
    }
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} className="z-[1001]">
      <Button
        variant="ghost"
        className="flex items-center font-semibold text-base text-gray-700 hover:text-green-700 transition-colors"
        onClick={handleButtonClick}
      >
        <span>{text}</span>
        <div ref={iconRef} className="ml-1">
          <DropdownMenuTrigger asChild>
            <svg width="20" height="20" fill="none">
              <path
                d="M6 8l4 4 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </DropdownMenuTrigger>
        </div>
      </Button>

      <DropdownMenuContent className="z-[1001]">
        {items.map((item) => (
          <DropdownMenuItem key={item.text || item} asChild>
            <Link href={item.path || "/"} passHref>
              <span className="font-semibold text-base text-gray-700 hover:text-green-700 transition-colors">
                {item.text || item}
              </span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
// Reusable Mobile Dropdown Component
const MobileDropdown = ({ text, items, path = "/", onClose }) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const iconRef = React.useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (iconRef.current && iconRef.current.contains(e.target)) {
      setOpen(!open);
    } else {
      router.push(path);
      onClose();
    }
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        className="flex items-center font-semibold text-lg text-[var(--grey)] w-full justify-start"
        onClick={handleButtonClick}
      >
        {text}
        <div ref={iconRef} className="ml-1">
          <DropdownMenuTrigger asChild>
            <svg width="20" height="20" fill="none">
              <path
                d="M6 8l4 4 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </DropdownMenuTrigger>
        </div>
      </Button>
      <DropdownMenuContent side="bottom" className="z-[1001]" align="start">
        {items.map((item) => (
          <DropdownMenuItem key={item.text || item} asChild onClick={onClose}>
            <Link href={item.path || "/"} passHref>
              <span className="font-semibold text-lg text-gray-700 cursor-pointer">
                {item.text || item}
              </span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const pages = [
  { text: "Home", path: "/" },
  { text: "About Us", path: "/" },
  {
    text: "Products",
    path: "/products",
    dropdownItems: [
      { text: "Cereals & Pulses", path: "/products/cereals-pulses" },
      { text: "FMCG", path: "/products/fmcg" },
      { text: "Whole Spices", path: "/products/whole-spices" },
      { text: "Seeds", path: "/products/seeds" },
    ],
  },
  { text: "IPM chilly", path: "/" },
  { text: "PR & Media", path: "/" },
  { text: "Contact Us", path: "/contact-us" },
];
const aboutItems = ["Our Team", "Our Story", "Careers"];

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 1000,
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
        color: "var(--grey)",
        overflow: "hidden",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* LOGO + NAV LEFT */}
          <div className="flex items-center gap-8 flex-1 relative h-full">
            <Link href="/" passHref className="h-full flex relative">
              <Image
                src="/assets/LOGO/logo2.png"
                alt="Logo"
                width={60}
                height={60}
                priority
                className="h-full object-contain"
              />
            </Link>
          </div>
          {/* Nav Items for Desktop */}
          <nav className="hidden md:flex gap-4">
            {pages.map((page) => {
              if (page.text === "About Us") {
                return (
                  <DesktopDropdown
                    key={page.text}
                    text={page.text}
                    items={aboutItems}
                  />
                );
              } else if (page.text === "Products") {
                return (
                  <DesktopDropdown
                    key={page.text}
                    text={page.text}
                    items={page.dropdownItems}
                    path="/products"
                  />
                );
              } else {
                return (
                  <Link key={page.text} href={page.path} passHref>
                    <Button
                      variant="ghost"
                      className="font-semibold text-base text-gray-700 hover:text-green-700 transition-colors"
                    >
                      {page.text}
                    </Button>
                  </Link>
                );
              }
            })}
          </nav>
          {/* Hamburger Menu for Mobile */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                >
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0">
                <SheetHeader className="px-4 pt-4">
                  <SheetTitle className="text-left text-lg font-semibold text-green-700">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2 mt-6 px-4">
                  {pages.map((page) => {
                    if (page.text === "About Us") {
                      return (
                        <MobileDropdown
                          key={page.text}
                          text={page.text}
                          items={aboutItems}
                          onClose={() => setIsOpen(false)}
                        />
                      );
                    } else if (page.text === "Products") {
                      return (
                        <MobileDropdown
                          key={page.text}
                          text={page.text}
                          items={page.dropdownItems}
                          path="/products"
                          onClose={() => setIsOpen(false)}
                        />
                      );
                    } else {
                      return (
                        <Link
                          key={page.text}
                          href={page.path}
                          passHref
                          onClick={() => setIsOpen(false)}
                        >
                          <Button
                            variant="ghost"
                            className="font-semibold text-lg text-[var(--grey)] w-full justify-start"
                          >
                            {page.text}
                          </Button>
                        </Link>
                      );
                    }
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

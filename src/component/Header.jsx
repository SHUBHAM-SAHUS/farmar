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
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu as MenuIcon } from "lucide-react";

const pages = [
  "Homepage",
  "About Us",
  "Products",
  "IPM chilly",
  "PR & Media",
  "Contact Us",
];
const aboutItems = ["Our Team", "Our Story", "Careers"];

function Header() {
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
          <div className="flex items-center gap-8 flex-1">
            <Link href="/" passHref>
              <Image
                src="/assets/MainLogo.webp"
                alt="Logo"
                width={120}
                height={60}
                priority
              />
            </Link>
          </div>
          {/* Nav Items for Desktop */}
          <nav className="hidden md:flex gap-4">
            {pages.map((page) => {
              if (page === "About Us") {
                return (
                  <DropdownMenu key={page} className="z-[1001]">
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center font-semibold text-base text-gray-700  hover:text-green-700 transition-colors"
                      >
                        {page}
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          className="ml-1"
                        >
                          <path
                            d="M6 8l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="z-[1001]">
                      {" "}
                      {/* increased z-index */}
                      {aboutItems.map((item) => (
                        <DropdownMenuItem key={item} asChild>
                          <Link href="/" passHref>
                            <span className="font-semibold text-base text-gray-700 hover:text-green-700 transition-colors">
                              {" "}
                              {item}
                            </span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              } else {
                return (
                  <Link key={page} href="/" passHref>
                    <Button
                      variant="ghost"
                      className="font-semibold text-base text-gray-700 hover:text-green-700 transition-colors"
                    >
                      {page}
                    </Button>
                  </Link>
                );
              }
            })}
          </nav>
          {/* Hamburger Menu for Mobile */}
          <div className="flex md:hidden">
            <Sheet>
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
                <nav className="flex flex-col gap-2 mt-8 px-4">
                  {pages.map((page) => {
                    if (page === "About Us") {
                      return (
                        <DropdownMenu key={page}>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="flex items-center font-semibold text-lg text-[var(--grey)] w-full justify-start"
                            >
                              {page}
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                className="ml-1"
                              >
                                <path
                                  d="M6 8l4 4 4-4"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent side="right">
                            {aboutItems.map((item) => (
                              <DropdownMenuItem key={item} asChild>
                                <Link href="/" passHref>
                                  <span className="text-[var(--grey)] cursor-pointer">
                                    {item}
                                  </span>
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      );
                    } else {
                      return (
                        <Link key={page} href="/" passHref>
                          <Button
                            variant="ghost"
                            className="font-semibold text-lg text-[var(--grey)] w-full justify-start"
                          >
                            {page}
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

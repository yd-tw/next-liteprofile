"use client";

import Link from "next/link";
import { useState } from "react";
import { base } from "@/config/base";
import { Icon } from "@iconify/react";

const navLinks = [{ title: "部落格", path: "/blogs" }];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full mx-auto border-b border-gray-300 dark:border-gray-700 backdrop-blur bg-background/95">
      <div className="container mx-auto h-16 flex flex-wrap items-center justify-between px-4 py-2">
        <Link href={"/"} className="text-3xl font-semibold">
          {base.title}
        </Link>
        <div className="hidden md:block md:w-auto">
          <ul className="mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="block rounded-sm py-2 pl-3 pr-4 text-gray-900 dark:text-gray-300 hover:text-gray-500 sm:text-xl"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center rounded-sm border border-black px-3 py-2 text-black"
            >
              <Icon icon="mdi:menu" className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center rounded-sm border border-black px-3 py-2 text-black"
            >
              <Icon icon="mdi:close" className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
      {navbarOpen && (
        <ul className="flex flex-col items-center py-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="block rounded-sm py-2 pl-3 pr-4 text-gray-800 hover:text-gray-500 sm:text-xl md:p-0"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

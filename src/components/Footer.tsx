import Link from "next/link";
import { Icon } from "@iconify/react";
import { base } from "@/config/base";
import pkg from "../../package.json";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-8 md:flex-row md:justify-center md:px-12">
        <div className="text-center md:text-left">
          <span className="text-lg font-semibold">{base.title}</span>
          <p className="mt-1">All rights reserved 2025</p>
          <p className="">{`Web version: ${pkg.version}`}</p>
        </div>
        <div className="flex space-x-6">
          <Link href="https://github.com/" aria-label="GitHub">
            <Icon
              icon="mdi:github"
              className="cursor-pointer text-2xl transition duration-300 hover:text-gray-400"
            />
          </Link>
          <Link href="https://www.youtube.com/" aria-label="YouTube">
            <Icon
              icon="mdi:youtube"
              className="cursor-pointer text-2xl transition duration-300 hover:text-gray-400"
            />
          </Link>
          <Link href="https://www.facebook.com/" aria-label="Facebook">
            <Icon
              icon="mdi:facebook"
              className="cursor-pointer text-2xl transition duration-300 hover:text-gray-400"
            />
          </Link>
          <Link href="https://www.instagram.com/" aria-label="Instagram">
            <Icon
              icon="mdi:instagram"
              className="cursor-pointer text-2xl transition duration-300 hover:text-gray-400"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

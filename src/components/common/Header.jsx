'use client';

import Link from "next/link";
import HeaderLink from "./HeaderLink";

import { menus } from "@/utils/constants";

export default function Header() {
  return (
    <header className="border-b border-[#d0d3d4] pb-4">
      <div className="max-w-[1140px] mx-auto pt-2 flex flex-col items-center ">
        <Link data-aos="flip-up" href="/" className="inline text-[45px] text-center uppercase hover:opacity-70">
          Big<span className="text-red-600">Foot</span>
        </Link>

        <div data-aos="flip-up" className="flex gap-5 justify-center">
          {menus.map(m => (
            <HeaderLink title={m.title} href={m.href} />
          ))}
        </div>
      </div>
    </header>
  );
};

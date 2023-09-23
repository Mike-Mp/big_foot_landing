import Link from "next/link";
import HeaderLink from "./HeaderLink";

const menus = [
  {
    href: "/new",
    title: "New & Now",
  },
  {
    href: "/shoes?type=women",
    title: "Women",
  },
  {
    href: "/shoes?type=men",
    title: "Men",
  },
  {
    href: "/shoes?type=kids",
    title: "Kids",
  },
  {
    href: "/brands",
    title: "Brands",
  },
  {
    href: "/accessories",
    title: "Accessories",
  },
];

export default function Header() {
  return (
    <header className="border-b border-[#d0d3d4] pb-4">
      <div className="max-w-[1140px] mx-auto pt-2 flex flex-col items-center ">
        <Link href="/" className="inline text-[30px] text-center uppercase hover:opacity-70">
          Big<span className="text-red-600">Foot</span>
        </Link>

        <div className="flex gap-5 justify-center">
          {menus.map(m => (
            <HeaderLink title={m.title} href={m.href} />
          ))}
        </div>
      </div>
    </header>
  );
};

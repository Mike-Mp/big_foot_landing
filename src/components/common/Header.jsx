import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-[1140px] mx-auto">
      <Link href="/">
        <h3 className="text-[30px] text-center uppercase">Big<span className="text-red-600">Foot</span></h3>
      </Link>

      <div className="flex gap-5 justify-center">
        <Link href="/new">New & Now</Link>
        <Link href="/shoes?type=women">Women</Link>
        <Link href="/shoes?type=men">Men</Link>
        <Link href="/shoes?type=kids">Kids</Link>
        <Link href="/brands">Brands</Link>
        <Link href="/accessories">Accessories</Link>
      </div>
    </header>
  );
};

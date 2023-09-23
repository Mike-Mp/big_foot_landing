'use client';

import Image from "next/image";
import Link from "next/link";

export default function CurvedImages() {
  return (
    <div data-aos="flip-up">
      <div className="flex gap-5">
        <div className="self-end mt-[60px]">
          <Image src="/images/birkenstock.avif" alt="" width={540} height={590} />
          <Link href="/retro-sneakers">SHOP RETRO SNEAKERS</Link>
        </div>
        <div className="self-start">
          <Image src="/images/retro.webp" alt="" width={540} height={590} />
          <Link href="/birkenstock">SHOP BIRKENSTOCK</Link>
        </div>
      </div>
    </div>
  );
};

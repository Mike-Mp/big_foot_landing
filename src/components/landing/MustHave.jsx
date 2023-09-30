'use client';

import Image from "next/image";

export default function MustHave() {
  return (
    <div data-aos="fade-up" className="bg-[#F3DCC0] w-[100%] self-center flex flex-col items-center p-10">

      <h3 className="text-[54px] text-[#913C38] mb-4">MUST-HAVE <span className="text-[#EE6D68]">BOOTS</span></h3>

      <div className="flex justify-center">
        <Image src="/images/boot.jpg" alt="" width={470} height={535} />
        <Image src="/images/boot_2.jpg" alt="" width={470} height={535} />
      </div>

      <div className="mb-3 mt-4 text-[#333f48]">Bring on the sweater weather, pumpkin spice and, of course, the boots!</div>

      <button className="text-white hover:bg-black bg-[#162937] w-[320px] min-h-[44px] font-semibold py-[10px]">SHOP BOOTS</button>

    </div>
  );
};

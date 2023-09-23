import Image from "next/image"
import Link from "next/link"

export default function OneImage() {
  return (
    <div className="bg-[#F46C67] w-[100%] p-10 self-center flex flex-col justify-center items-center">
      <Image src="/images/justfitforyou.avif" alt="" width={900} height={300} />
      <Link className="text-white text-[18px] font-bold mt-10 hover:opacity-70 transition-opacity relative before:absolute before:top-[30px] before:bg-white before:left-0 before:w-[100%] before:h-[2px]" href="/link">WIDE CALF BOOT GUIDE</Link>
    </div>
  )
}

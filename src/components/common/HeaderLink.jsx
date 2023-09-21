import Link from "next/link";

export default function HeaderLink({ title, href }) {
  return (
    <Link
      className="text-black relative before:transition-all before:absolute before:w-0 hover:before:w-[100%] before:left-0 before:top-[23px] before:bg-black before:h-[2px]"
      href={href}>
      {title}
    </Link>
  )
}

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import CurvedImages from '@/components/landing/CurvedImages'
import MustHave from '@/components/landing/MustHave'
import OneImage from '@/components/landing/OneImage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col max-w-[1140px] mx-auto">

      <div className="mx-auto mt-5 flex flex-col mb-10">
        <div data-aos="flip-up" className="flex gap-5 justify-center items-center mb-5">
          <h2 className="text-green-500 text-[35px]">FAMOUS FOR FALL</h2>
          <div className="text-[20px]">The looks you need for the best. fall. ever.</div>
        </div>

        <CurvedImages />

      </div>

      <MustHave />

      <OneImage />

    </div>
  )
}

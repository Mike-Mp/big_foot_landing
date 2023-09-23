import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import CurvedImages from '@/components/landing/CurvedImages'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col">

      <div className="mx-auto mt-5 flex flex-col">
        <div className="flex gap-5 items-center">
          <h2 className="text-green-500 text-[25px]">FAMOUS FOR FALL</h2>
          <div>The looks you need for the best. fall. ever.</div>
        </div>

        <CurvedImages />

      </div>

    </div>
  )
}

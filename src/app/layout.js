import './globals.css'

import { Roboto_Condensed } from '@next/font/google'

const rob = Roboto_Condensed({ subsets: ['latin'], weight: "400" });
const rob_b = Roboto_Condensed({ subsets: ['latin'], weight: "700" });

import Header from '@/components/common/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={rob_b.className}>

        <Header />

        {children}

        <footer className="">

        </footer>
      </body>
    </html>
  )
}

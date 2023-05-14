"use client";

import HeroSection from '@/components/Sections/Hero'
import './globals.css'
import { Inter } from 'next/font/google'
import AppBar from '@/components/AppBar'
import FooterSection from '@/components/Sections/Footer'
import HeaderBackdrop from '@/components/HeaderBackdrop'
import {usePathname} from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body>
        <div className='w-full '>
          <div className={`w-full relative ${pathName==="/"?"h-screen":"h-[200px] md:h-[150px]"}`}>
            {pathName==="/"?<HeroSection/>:<HeaderBackdrop/>}
            <AppBar/>
          </div>
          {children}
          <FooterSection/>
        </div>
      </body>
    </html>
  )
}

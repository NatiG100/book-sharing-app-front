import AppBar from '@/components/AppBar'
import HeroSection from '@/components/Sections/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full '>
      <AppBar/>
      <HeroSection/>
    </div>
  )
}

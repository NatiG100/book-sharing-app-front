import AppBar from '@/components/AppBar'
import BookListItem from '@/components/BookListItem'
import HeroSection from '@/components/Sections/Hero'
import { TypeBook } from '@/types/types'
import Image from 'next/image'

const book:TypeBook = {
  _id:"thiasfldkajsdfk",
  author:"Dr. R.C Sproul",
  category:"Theology",
  coverImg:"/book-cover/2.jpg",
  description:"this is a description",
  downloads:46,
  file:"/this/asdfasf",
  pages:423,
  pubDate:"12/22/2022",
  title:"How to study Scripture",
  view:65
}

export default function Home() {
  return (
    <div className='w-full '>
      <AppBar/>
      <HeroSection/>
      <BookListItem book={book}/>
    </div>
  )
}

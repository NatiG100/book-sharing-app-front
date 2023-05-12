import AppBar from '@/components/AppBar'
import BookList from '@/components/BookList'
import BookListItem from '@/components/BookListItem'
import FooterSection from '@/components/Sections/Footer'
import HeroSection from '@/components/Sections/Hero'
import { TypeBook } from '@/types/types'
import Image from 'next/image'

const books:TypeBook[] = [{
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
},{
  _id:"wertswtsdg",
  author:"Dr. R.C Sproul",
  category:"Theology",
  coverImg:"/book-cover/1.jpeg",
  description:"this is a description",
  downloads:46,
  file:"/this/asdfasf",
  pages:423,
  pubDate:"12/22/2022",
  title:"How to study Scripture",
  view:65
},{
  _id:"sdfsersdhsdf",
  author:"Dr. R.C Sproul",
  category:"Theology",
  coverImg:"/book-cover/3.jpg",
  description:"this is a description",
  downloads:46,
  file:"/this/asdfasf",
  pages:423,
  pubDate:"12/22/2022",
  title:"How to study Scripture",
  view:65
},
{
  _id:"sdfserasdfadsfad",
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
},{
  _id:"thiasfldfdfdkajsdfk",
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
},{
  _id:"wertsaawtsdg",
  author:"Dr. R.C Sproul",
  category:"Theology",
  coverImg:"/book-cover/1.jpeg",
  description:"this is a description",
  downloads:46,
  file:"/this/asdfasf",
  pages:423,
  pubDate:"12/22/2022",
  title:"How to study Scripture",
  view:65
},{
  _id:"sdfsedfadrsdhsdf",
  author:"Dr. R.C Sproul",
  category:"Theology",
  coverImg:"/book-cover/3.jpg",
  description:"this is a description",
  downloads:46,
  file:"/this/asdfasf",
  pages:423,
  pubDate:"12/22/2022",
  title:"How to study Scripture",
  view:65
},
{
  _id:"sdfserasdsdfdfadsfad",
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
},
]
export default function Home() {
  return (
    <div className='w-full '>
      <div className='w-full relative h-screen'>
        <HeroSection/>
        <AppBar/>
      </div>
      <BookList books={books} title='popular' className='mt-20'/>
      <BookList books={books} title='recently uploaded' className='mt-20'/>
      <FooterSection/>
    </div>
  )
}

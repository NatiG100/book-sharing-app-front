import BookList from '@/components/BookList'
import { books } from '@/data'

export default function Home() {
  return (
      <>
        <BookList books={books} title='popular' className='mt-20'/>
        <BookList books={books} title='recently uploaded' className='mt-20'/>
      </>     
  )
}

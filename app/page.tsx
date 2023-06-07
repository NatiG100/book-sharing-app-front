import BookList from '@/components/BookList'
import { API_MEILISEARCH } from '@/constants/API_URL';
import { books } from '@/data'
import { TypeBooksResponse } from '@/types/types';

async function getPopularBooks(){
  const res = await fetch(`${API_MEILISEARCH}/indexes/book/search?sort=downloads:desc,view:desc&limit=8`,{
      method:"GET",
      next:{revalidate:0},
      headers:{
        Authorization: "Bearer NatnaelGashu12!@"
      }
  });
  if(!res.ok){
    throw new Error('Failed to fetch books.');
  }
  return res.json();
}
async function getRecentBooks(){
  const res = await fetch(`${API_MEILISEARCH}/indexes/book/search?sort=createdAt:desc&limit=8`,{
      method:"GET",
      next:{revalidate:0},
      headers:{
        Authorization: "Bearer NatnaelGashu12!@"
      }
  });
  if(!res.ok){
    throw new Error('Failed to fetch books.');
  }
  return res.json();
}

export default async function Home() {
  const popularBooks:TypeBooksResponse = await getPopularBooks();
  const recentBooks:TypeBooksResponse = await getRecentBooks();
  return (
      <>
        <BookList books={popularBooks.hits} title='popular' className='mt-20'/>
        <BookList books={recentBooks.hits} title='recently uploaded' className='mt-20'/>
      </>     
  )
}

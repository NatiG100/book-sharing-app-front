import BookList from "@/components/BookList";
import { books } from "@/data";

export default function SearchResult() {
    return (
        <>
            <BookList books={books} title='search result' className='mt-20'/>
        </>     
    )
}
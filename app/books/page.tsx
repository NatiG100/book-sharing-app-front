import BookList from "@/components/BookList";
import ToggleChip from "@/components/UIElements/ToggleChip";
import { API_MEILISEARCH } from "@/constants/API_URL";
import { books } from "@/data";
import { TypeBooksResponse } from "@/types/types";

interface BooksProps{
    searchParams:{query:string}
}

async function getBooks(query:string){
    const res = await fetch(`${API_MEILISEARCH}/indexes/book/search?q=${query}`,{
        method:"GET",
        next:{revalidate:0},
    });
    if(!res.ok){
        throw new Error('Failed to fetch books.');
    }
    return res.json();
}
export default async function Books(props:BooksProps) {
    const bookList = await getBooks(props.searchParams.query);
    return (
        <>
            <div className="w-full max-w-[1000px] ml-auto mr-auto px-11 sm:px-20 lg:px-5 flex justify-start items-center gap-3 flex-wrap">
                <ToggleChip isOn={true}>All</ToggleChip>
                <ToggleChip isOn={false}>Doctrine</ToggleChip>
                <ToggleChip isOn={false}>Practical</ToggleChip>
                <ToggleChip isOn={false}>History</ToggleChip>
                <ToggleChip isOn={false}>Others</ToggleChip>
            </div>
            <BookList 
                books={bookList.hits} 
                title={props.searchParams.query!==""&&props.searchParams.query ?'search result':"discover"} 
                className='mt-2'
                customCompnt={
                    props.searchParams.query!==""&&props.searchParams.query && <p className="text-gray-500">Search result for <span className="text-gray-400"><u><i>{props.searchParams.query}</i></u></span></p>
                }
            />
        </>     
    )
}
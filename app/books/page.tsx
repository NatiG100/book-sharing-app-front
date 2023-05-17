import BookList from "@/components/BookList";
import ToggleChip from "@/components/UIElements/ToggleChip";
import { books } from "@/data";
import { TypeBooksResponse } from "@/types/types";

interface BooksProps{
    searchParams:{query:string}
}

async function getBooks(){
    const res = await fetch('http://localhost:1337/api/books?populate=*',{method:"GET",next:{revalidate:10}});
    console.log(res.status);
    if(!res.ok){
        throw new Error('Failed to fetch books.');
    }
    return res.json();
}
export default async function Books(props:BooksProps) {
    const bookList = await getBooks();
    console.log(bookList.data);
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
                books={bookList.data} 
                title={props.searchParams.query!==""&&props.searchParams.query ?'search result':"discover"} 
                className='mt-2'
                customCompnt={
                    props.searchParams.query!==""&&props.searchParams.query && <p className="text-gray-500">Search result for <span className="text-gray-400"><u><i>{props.searchParams.query}</i></u></span></p>
                }
            />
        </>     
    )
}
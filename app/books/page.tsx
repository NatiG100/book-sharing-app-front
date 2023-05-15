import BookList from "@/components/BookList";
import ToggleChip from "@/components/UIElements/ToggleChip";
import { books } from "@/data";

interface BooksProps{
    searchParams:{query:string}
}
export default function Books(props:BooksProps) {
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
                books={books} 
                title='search result' 
                className='mt-2'
                customCompnt={
                    <p className="text-gray-500">Search result for <span className="text-gray-400"><u><i>{props.searchParams.query}</i></u></span></p>
                }
            />
        </>     
    )
}
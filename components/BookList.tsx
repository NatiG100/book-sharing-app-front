import { TypeBook } from "@/types/types";
import BookListItem from "./BookListItem";

export interface BookListProp{
    books:TypeBook[],
    title?:string,
    customCompnt?:React.ReactNode
}

export default function BookList({books,title,customCompnt}:BookListProp){
    return(
        <section title={title||"book-list"}
            className="w-full max-w-[1000px] ml-auto mr-auto px-14"
        >
            {title&&
                <h2 className="text-2xl lg:text-2xl text-white uppercase font-bold ml-5 mb-6">
                    {title}
                </h2>
            }
            {customCompnt&&customCompnt}
            <div className="
                grid grid-cols-[1fr] md:grid-cols-[1fr,1fr] 
                lg:grid-cols-[1fr,1fr,1fr] justify-between
                xl:grid-cols-[1fr,1fr,1fr,1fr]
            ">
                {books.map((book)=>(
                    <div className="mr-auto ml-auto" key={book._id}>
                        <BookListItem  book={book}/>
                    </div>
                ))}
            </div>
        </section>
    );
}
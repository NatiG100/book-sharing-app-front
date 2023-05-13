import { TypeBook } from "@/types/types";
import BookListItem from "./BookListItem";

export interface BookListProp{
    books:TypeBook[],
    title?:string,
    customCompnt?:React.ReactNode,
    className?:string,
}

export default function BookList({books,title,customCompnt,className=""}:BookListProp){
    return(
        <section title={title||"book-list"}
            className={className+" w-full max-w-[1000px] ml-auto mr-auto px-14"}
        >
            <div className="ml-5 mb-6">
                {title&&
                    <h2 className="text-lg lg:text-2xl text-white uppercase font-bold">
                        {title}
                    </h2>
                }
                {customCompnt&&customCompnt}
            </div>
            <div className="
                grid grid-cols-[1fr] sm:grid-cols-[1fr,1fr] 
                md:grid-cols-[1fr,1fr,1fr] justify-between
                lg:grid-cols-[1fr,1fr,1fr,1fr]
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
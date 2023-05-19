import BookList from "@/components/BookList";
import ToggleChip from "@/components/UIElements/ToggleChip";
import { API_MEILISEARCH, API_URL } from "@/constants/API_URL";
import { books } from "@/data";
import { TypeBooksResponse, TypeCategoriesStrapiRes } from "@/types/types";
import Link from "next/link";

async function getBooks(query:string,category:string|null){
    const res = await fetch(`${API_MEILISEARCH}/indexes/book/search?q=${query||""}`,{
        body:JSON.stringify({
            filter:category&&[`category.string = ${category}`]
        }),
        headers:{
            "Content-Type": "application/json",
        },
        method:"POST",
        next:{revalidate:0},
    });
    if(!res.ok){
        throw new Error('Failed to fetch books.');
    }
    return res.json();
}
async function getCategories(){
    const res = await fetch(`${API_URL}/api/categories`,{
        method:"GET",
        next:{revalidate:1000}
    });
    if(!res.ok){
        throw new Error("Failed to fetch categories");
    }
    return res.json();
}
interface BooksProps{
    searchParams:{query:string,category:string}
}

export default async function Books(props:BooksProps) {
    const categoryList:TypeCategoriesStrapiRes = await getCategories();
    function getCategoryString(){
        let string= null;
        categoryList.data.forEach((data)=>{
            if(data.attributes.string===props.searchParams.category){
                string = data.attributes.string;
                return ;
            }
        })
        return string;
    }
    const bookList = await getBooks(props.searchParams.query,getCategoryString());
    return (
        <>
            <div className="w-full max-w-[1000px] ml-auto mr-auto px-11 sm:px-20 lg:px-5 flex justify-start items-center gap-3 flex-wrap">
                <Link href={`/books?query=${props.searchParams.query}`}>
                    <ToggleChip isOn={!getCategoryString()}>All</ToggleChip>
                </Link>
                {categoryList.data.map((data)=>(
                    <Link key={data.id} href={`/books?query=${props.searchParams.query||""}&category=${data.attributes.string}`}>
                        <ToggleChip isOn={props.searchParams.category===data.attributes.string} >{data.attributes.string}</ToggleChip>
                    </Link>
                ))}
            </div>
            <BookList 
                books={bookList.hits} 
                title={props.searchParams.query!==""&&props.searchParams.query ?'search result':"discover"} 
                className='mt-2 min-h-screen'
                customCompnt={
                    props.searchParams.query!==""&&props.searchParams.query && <p className="text-gray-500">Search result for <span className="text-gray-400"><u><i>{props.searchParams.query}</i></u></span></p>
                }
            />
        </>     
    )
}
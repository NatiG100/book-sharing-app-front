import ToggleChip from "@/components/UIElements/ToggleChip";
import Image from "next/image";
import {GoPrimitiveDot as DotIcon} from 'react-icons/go';
import {
    FiDownload as DownloadIcon, 
    FiEye as EyeIcon,
} from 'react-icons/fi';
import Button from "@/components/UIElements/Button";
import BookList from "@/components/BookList";
import Link from "next/link";
import { API_MEILISEARCH, API_URL } from "@/constants/API_URL";
import { TypeBookStrapiRes, TypeBooksResponse } from "@/types/types";
import DownloadBtn from "@/components/DownloadBtn";
import TogleTxt from "@/components/UIElements/TogleTxt";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


async function getBooksByAuthor(authorName:string){
    const res = await fetch(`${API_MEILISEARCH}/indexes/book/search?filter="author.name='${authorName}'"`,{
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

async function getBook(id:string){
    const res = await fetch(`${API_URL}/api/books/${id}?populate=*`,{
        method:"GET",
        next:{revalidate:0},
    });
    if (!res.ok){
        throw new Error("Cant fetch the book with an id of "+id);
    }
    return res.json();
}
async function incrementDownload(id:string){
    const res = await fetch(`${API_URL}/api/download/${id}`,{
        method:"POST",
        next:{revalidate:0},
    });
    if (!res.ok){
        throw new Error("Can't download book");
    }
    return res.json();
}

interface BookProps{
    params:{id:string}
}
export default async function Book({params}:BookProps){
    const book:TypeBookStrapiRes = await getBook(params.id);
    const booksByThisAuthor:TypeBooksResponse = await getBooksByAuthor(book.data.attributes.author.data.attributes.fullName);
    return(
        <div className="w-full">

            <div className="w-full max-w-[650px] ml-auto mr-auto mt-6 px-8 md:px-0">
                <h1 className="text-3xl font-bold text-white mb-12 underline">{book.data.attributes.title}</h1>
                <div className="grid grid-rows-[mac-content, max-content] md:grid-cols-[max-content,1fr] gap-6">
                    <img
                        src={API_URL+book.data.attributes.coverImg.data.attributes.url}
                        alt={book.data.attributes.title}
                        height={580}
                        width={310}
                        className="object-cover h-[450px]"
                    />
                    <div>
                        <ToggleChip isOn={false}>{book.data.attributes.category.data.attributes.string}</ToggleChip>
                        <p className="mt-2 text-[14px] text-gray-100"><span className="text-white"><b>Author: </b></span> 
                        {book.data.attributes.author.data.attributes.fullName}</p>
                        <div className="text-gray-300 text flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-2">{book.data.attributes.pages} pages</div>
                            <DotIcon className="text-white gap-2 text-[8px]"/>
                            <div className="flex items-center gap-2">Published {(new Date(book.data.attributes.pubDate)).getFullYear()}</div>
                        </div>
                        <h3 className="text-white text-lg font-bold mt-6">Excerpt</h3>
                        <p className="text-gray-400 text-sm mb-6 text-justify">
                            <TogleTxt>
                            {book.data.attributes.description}
                            </TogleTxt>
 
                        </p>
                        <div className="
                            text-[#8e8e8e] text-sm
                            flex items-center gap-4 mt-1
                        ">
                            <div className="flex items-center gap-2"><DownloadIcon/> {book.data.attributes.downloads}</div>
                            <DotIcon className="text-white gap-2 text-[8px]"/>
                            <div className="flex items-center gap-2"><EyeIcon/> {book.data.attributes.view}</div>
                        </div>
                        {/* <Link href={`${API_URL}/"${book.data.attributes.file.data.attributes.url}"`}>
                            <Button className="w-full uppercase text-white bg-[#42AA4F]" icon={<DownloadIcon/>} onClick={()=>{}} >
                                Download
                            </Button>
                        </Link> */}
                        <DownloadBtn url={book.data.attributes.file.data.attributes.url} id={book.data.id.toString()}>Download</DownloadBtn>
                        <Link href={`/read/?url=${book.data.attributes.file.data.attributes.url}&id=${params.id}`}>
                            <Button className="w-full uppercase text-white bg-[#5B7ABA]" icon={<EyeIcon/>} >
                                Read now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            {booksByThisAuthor?.hits?.length!==0&&<BookList
                noDataTxt="No other books found by this author" 
                books={booksByThisAuthor.hits}  
                className="mt-16"
                customCompnt={<p className="text-xs md:text-lg font-semibold text-gray-300 bg-gray-800 rounded-md p-1 px-4 md:px-6">Other books from this author</p>}
            />}
        </div>
    );
}
import { TypeBook } from "@/types/types";
import Image from "next/image";
import {
    FiDownload as DownloadIcon, 
    FiEye as EyeIcon,
} from 'react-icons/fi';

import {GoPrimitiveDot as DotIcon} from 'react-icons/go';

export interface BookListItemProps{
    book:TypeBook
}
export default function BookListItem({book}:BookListItemProps){
    return(
        <div className="w-[175px] cursor-pointer hover:-translate-y-2 transition-transform duration-300 m-4">
            <Image
                height={800}
                width={200}
                alt={book.title}
                src={book.coverImg}
                className="
                    object-cover rounded-md mb-2
                    h-64 w-full
                "
            />
            <p className="text-white ">{book.title}</p>
            <p className="text-[#c1c1c1] ">By {book.author}</p>
            <div className="
                text-[#8e8e8e] text-sm
                flex items-center gap-4 mt-1
            ">
                <div className="flex items-center gap-2"><DownloadIcon/> {book.downloads}</div>
                <DotIcon className="text-white gap-2 text-[8px]"/>
                <div className="flex items-center gap-2"><EyeIcon/> {book.view}</div>
            </div>
        </div>
    );
}
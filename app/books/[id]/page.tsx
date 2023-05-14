import ToggleChip from "@/components/UIElements/ToggleChip";
import Image from "next/image";
import {GoPrimitiveDot as DotIcon} from 'react-icons/go';
import {
    FiDownload as DownloadIcon, 
    FiEye as EyeIcon,
} from 'react-icons/fi';
import Button from "@/components/UIElements/Button";
import BookList from "@/components/BookList";
import { books } from "@/data";

export default function Book(){
    return(
        <div className="w-full">

            <div className="w-full max-w-[650px] ml-auto mr-auto mt-6">
                <h1 className="text-3xl font-bold text-white mb-12 underline">How to study the Scripture</h1>
                <div className="grid grid-cols-[max-content,1fr] gap-6">
                    <Image
                        src='/book-cover/1.jpeg'
                        alt="title"
                        height={580}
                        width={300}
                        className="object-cover"
                    />
                    <div>
                        <ToggleChip isOn={false}>Doctrine</ToggleChip>
                        <p className="mt-2 text-[14px] text-gray-100"><span className="text-white"><b>Author:</b></span> Dr. R.C Sproul</p>
                        <div className="text-gray-300 text flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-2">200 pages</div>
                            <DotIcon className="text-white gap-2 text-[8px]"/>
                            <div className="flex items-center gap-2">Published 2008EC</div>
                        </div>
                        <h3 className="text-white text-lg font-bold mt-6">Excerpt</h3>
                        <p className="text-gray-400 text-sm mb-6 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <div className="
                            text-[#8e8e8e] text-sm
                            flex items-center gap-4 mt-1
                        ">
                            <div className="flex items-center gap-2"><DownloadIcon/> {200}</div>
                            <DotIcon className="text-white gap-2 text-[8px]"/>
                            <div className="flex items-center gap-2"><EyeIcon/> {254}</div>
                        </div>
                        <Button className="w-full uppercase text-white bg-[#42AA4F]" icon={<DownloadIcon/>} onClick={()=>{}} >
                            Download
                        </Button>
                        <Button className="w-full uppercase text-white bg-[#5B7ABA]" icon={<EyeIcon/>} onClick={()=>{}} >
                            Read now
                        </Button>
                    </div>
                </div>
            </div>
            <BookList books={books} title={"Other books from the Author"} className="mt-16"/>
        </div>
    );
}
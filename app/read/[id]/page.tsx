"use client";
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import {AiFillCloseCircle as CloseIcon} from 'react-icons/ai'

export default function BookReader(){
    const router = useRouter();
    return(
        <div className="h-full w-full max-w-[1000px] ml-auto mr-auto relative">
            <button 
                className="
                    border-0 top-5 right-10 text-gray-400/40 hover:text-gray-700 transition-colors absolute
                    bg-white/10 hover:bg-white rounded-full    
                "
                onClick={()=>{router.back()}}
            >
                <CloseIcon className="text-4xl"/>
            </button>
            <iframe src="/book.pdf" className="w-full h-screen"/>
        </div>
    )
}
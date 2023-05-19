"use client";
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import {AiFillCloseCircle as CloseIcon} from 'react-icons/ai'
import { API_URL } from '@/constants/API_URL';
import { useEffect } from 'react';
async function incrementView(id:string){
    const res = await fetch(`${API_URL}/api/view/${id}`,{
        method:"POST",
        next:{revalidate:0}
    });
    if (!res.ok){
        throw new Error("Can't view book");
    }
    return res.json();
}

export default function BookReader({searchParams}:{searchParams:{id:string,url:string}}){
    const router = useRouter();
    useEffect(()=>{
        incrementView(searchParams.id)
    },[]);
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
            <iframe src={`${API_URL}${searchParams.url}`} className="w-full h-screen"/>
        </div>
    )
}
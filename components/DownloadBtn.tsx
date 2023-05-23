"use client";
import Link from "next/link";
import Button from "./UIElements/Button";
import {FiDownload as DownloadIcon} from 'react-icons/fi';
import { API_URL } from "@/constants/API_URL";
import { useCallback } from "react";
export interface DownloadBtnProps{
    url:string,
    id:string,
    children:string,
}
async function incrementDownload(id:string){
    const res = await fetch(`${API_URL}/api/download/${id}`,{
        method:"POST",
    });
    if (!res.ok){
        throw new Error("Can't download book");
    }
    return res.json();
}
export default function DownloadBtn({url,id,children}:DownloadBtnProps){
    const handleClick = useCallback(async()=>{
        await incrementDownload(id);
    },[id])
    return(
        <Link href={`${API_URL}${url}`} download={true} onClick={handleClick}>
            <Button className="w-full uppercase text-white bg-[#42AA4F]" icon={<DownloadIcon/>} onClick={()=>{}} >
                {children}
            </Button>
        </Link>
    );
}
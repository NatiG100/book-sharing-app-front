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
    "use client";
    const res = await fetch(`${API_URL}/api/download/${id}`,{
        method:"POST",
    });
    if (!res.ok){
        throw new Error("Can't download book");
    }
    return res.json();
}
export default function DownloadBtn({url,id,children}:DownloadBtnProps){
    const downloadURI = (uri:string, name:string) => {
        const link = document.createElement("a");
        link.setAttribute("download","")
        
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    const handleClick = async ()=>{
        await incrementDownload(id).then(()=>{
            console.log("This is working")
            downloadURI(`${API_URL}${url}`,"book"+id)
        });
    }
    return(
        <Button className="w-full uppercase text-white bg-[#42AA4F]" icon={<DownloadIcon/>} onClick={handleClick} >
            {children}
        </Button>
    );
}
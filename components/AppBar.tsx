"use client";
import Image from "next/image";
import {   useEffect, useState } from "react";
import SearchBar from "./UIElements/SearchBar";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export interface AppBarProps {

}

export default function AppBar(props:AppBarProps){
    const router = useRouter();
    const pathName = useParams();
    const searchParams = useSearchParams();
    const [query,setQuery] = useState<string>('');
    useEffect(()=>{
        if(searchParams?.get("query")){
            setQuery(searchParams.get("query") as string);
        }
    },[searchParams])
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setQuery(event.target.value);
    }
    const onSearch = ()=>{
        if(query===""){
            return;
        }
        router.push(`/books?query=${query}`)
    }
    return(
        <div className="w-full absolute top-0 left-0 right-0">
            <div className="
                w-full max-w-[1480px] ml-auto mr-auto gap-6
                flex p-2 px-7 items-center justify-between flex-col md:flex-row z-50
            ">
                <Link href="/">
                    <img
                        src="/logoAt-01.png"
                        alt="logo"
                        width={135}
                        height={120}
                    />
                </Link>
                <div className="flex items-center justify-end w-full gap-4 md:flex-row flex-col">
                    <Link 
                        href={'/books'}
                        className="
                            border border-[#66de74] uppercase font-mono text-[#66de74] py-2 px-6 rounded-full 
                            hover:bg-[#66de74] hover:text-black transition-colors duration-500 text-center
                            saturate-100
                        "
                    >Discover</Link>
                    <SearchBar value={query} onChange={handleChange} onSearch={onSearch}/>
                </div>
            </div>
        </div>
    );
}
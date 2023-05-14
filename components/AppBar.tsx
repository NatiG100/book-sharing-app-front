"use client";
import Image from "next/image";
import {   useState } from "react";
import SearchBar from "./UIElements/SearchBar";
import { useRouter } from "next/navigation";

export interface AppBarProps {

}

export default function AppBar(props:AppBarProps){
    const router = useRouter();
    const [query,setQuery] = useState<string>('');
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setQuery(event.target.value);
    }
    const onSearch = ()=>{
        router.push(`/books?query=${query}`)
    }
    return(
        <div className="w-full absolute top-0 left-0 right-0">
            <div className="
                w-full max-w-[1480px] ml-auto mr-auto gap-6
                flex p-2 px-7 items-center justify-between flex-col md:flex-row z-50
            ">
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={80}
                    height={100}
                />
                <SearchBar value={query} onChange={handleChange} onSearch={onSearch}/>
            </div>
        </div>
    );
}
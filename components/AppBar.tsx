"use client";
import Image from "next/image";
import {   useState } from "react";
import SearchBar from "./UIElements/SearchBar";

export interface AppBarProps {

}

export default function AppBar(props:AppBarProps){
const [query,setQuery] = useState<string>('');
const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setQuery(event.target.value);
}
    return(
        <div className="
            w-full max-w-[1480px] ml-auto mr-auto gap-6
            flex p-6 px-7 items-center justify-between flex-col md:flex-row z-50
        ">
            <Image
                src="/logo.png"
                alt="logo"
                width={80}
                height={100}
            />
            <SearchBar value={query} onChange={handleChange}/>
        </div>
    );
}
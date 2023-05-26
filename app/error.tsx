"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}:{
    error:Error,
    reset:()=>void
}){
    // useEffect(()=>{
    //     console.error(error);
    // })
    return(
        <div className="w-full max-h-full flex items-center flex-col gap-4 justify-center h-[450px]">
            <h1 className="text-white text-4xl md:text-6xl font-semibold text-center">Oops!</h1>
            <p className="text-white text-lg md:text-2xl text-center font-mono">It seems something went wrong.</p>
            <button 
                onClick={()=>{reset();window.location.reload()}} 
                className="text-green-300 border text-lg rounded border-green-300 md:text-2xl px-4 md:px-6 py-1 md:py-2 hover:bg-green-600/10 transition-colors duration-200"
            >Try Again</button>
        </div>
    );
}
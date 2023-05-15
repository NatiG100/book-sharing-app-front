"use client";
import { useState } from "react";

export default function BookReader(){
    return(
        <div className="h-full w-full max-w-[1000px] ml-auto mr-auto">
            <iframe src="/book.pdf" className="w-full h-screen"/>
        </div>
    )
}
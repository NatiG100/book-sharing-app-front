"use client";
import { useEffect, useState } from "react";
import {FaChevronDown,FaChevronUp} from 'react-icons/fa'

export interface TogleTxtProps{
    children:string,
    maxLen?:number
}

export default function TogleTxt({children,maxLen=200}:TogleTxtProps){
    const [hidden,setHidden] = useState(true);
    const [firstTxt,setFirstTxt] = useState("");
    const [lastTxt,setLastTxt] = useState<null|string>(null);
    useEffect(()=>{
        setFirstTxt(children.substring(0,maxLen));
        let last = children.substring(maxLen,children.length)
        if(last!==""){
            setLastTxt(last); 
        }else{
            setLastTxt(null);
        }
    },[]);
    function toggleText(){
        setHidden((hidden)=>(!hidden));
    }
    return(
        <>
            <span>{firstTxt}</span>
            {(hidden&&lastTxt)&&<span>...</span>}
            {lastTxt&&!hidden&&<span>{lastTxt}</span>}
            <br/>
            {lastTxt&&
                <button className="p-2 py-1 border border-gray-400 hover:border-white text-gray-400 hover:text-white transition-colors flex items-center gap-2 my-2" onClick={toggleText}>
                    {hidden?"Show more":"Show less"}
                    {hidden?<FaChevronDown className="text-xs self-center"/>:<FaChevronUp className="text-xs self-center"/>}
                </button>
            }
        </>
    );
}
export interface ButtonProps{
    onClick:()=>void,
    className:string,
    children:string,
    icon:React.ReactNode,
}

export default function Button(props:ButtonProps){
    return(
        <button className={"border-0 rounded-md px-4 h-10 flex items-center justify-center gap-3 my-2 hover:saturate-150 "+props.className}>
            {props.icon}
            {props.children}
        </button>
    );
}
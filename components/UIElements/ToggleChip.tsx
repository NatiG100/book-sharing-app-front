export interface ToggleChipProps{
    isOn:boolean,
    onClick?:()=>void,
    children:string
}
export default function ToggleChip({isOn,onClick,children=""}:ToggleChipProps){
    return(
        <div className={`
            rounded ${isOn?"text-gray-950 bg-white":"text-white bg-[#4B6A93]"}
            h-7 px-3 flex items-center justify-center w-max cursor-pointer
        `}
            onClick={onClick}
        >
            <p>{children}</p>
        </div>
    );
}
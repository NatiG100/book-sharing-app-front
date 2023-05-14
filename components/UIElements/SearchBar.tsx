import {FiSearch as SearchIcon} from 'react-icons/fi'
export interface SearchBarProps{
    value:string,
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void,
    onSearch:()=>void
}

export default function SearchBar(props:SearchBarProps){
    return(    
        <div className='relative w-full max-w-[460px] h-11 flex items-center'>
            <input
                value={props.value}
                onChange={props.onChange}
                className='
                    ring-2 ring-[#42aa4f88] rounded-full focus:ring-[#42aa4f]
                    w-full h-full bg-white pl-8 pr-14
                    absolute top-0 bottom-0 left-0 right-0 text-sm
                    
                    '
                placeholder='Search by title or author'
            >
            </input>
            <SearchIcon className='
                absolute right-4 text-[#77dd7f] text-4xl
                p-2 hover:text-[#42aa4f] transition-colors
                cursor-pointer stroke-[3px]
            '
            onClick={props.onSearch}
            />
        </div>
    );
}
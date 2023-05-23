import Skeleton,{SkeletonTheme} from "react-loading-skeleton";

export default function Loading(){
    return(
        <SkeletonTheme baseColor="#0002" highlightColor="#00000019">
            <div className="w-full flex max-w-[650px] ml-auto mr-auto flex-col gap-6 mt-20 px-8">
                <Skeleton height={35} containerClassName="flex-1" className="flex-1 w-10 max-w-full"/>
                <div className="w-full flex flex-col md:flex-row gap-4">
                    <Skeleton height={400} containerClassName="flex-1" width={250} className="flex-1 w-52 h-40 max-w-full"/>
                    <div className="flex-1">
                        <Skeleton height={18} count={3} width={225} containerClassName="flex-1" className="flex-1 w-10 h-40 max-w-full"/>
                        <Skeleton height={120} count={1} containerClassName="flex-1" className="flex-1 w-10 h-40 my-8 max-w-full"/>
                        <Skeleton height={45} count={2} containerClassName="flex-1" className="flex-1 w-10 h-40 max-w-full"/>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
}
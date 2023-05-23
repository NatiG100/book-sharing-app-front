import Skeleton,{SkeletonTheme} from "react-loading-skeleton";
export default function(){
    return(
        <SkeletonTheme baseColor="#0002" highlightColor="#00000019">
            <div className="w-full max-w-[1000px] ml-auto mr-auto flex flex-col gap-8">
                <Skeleton height={30} width={400} count={2} containerClassName="flex-1" className="max-w-full"/>
                <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr,1fr] 
        md:grid-cols-[1fr,1fr,1fr] justify-between
        lg:grid-cols-[1fr,1fr,1fr,1fr]">
                    <Skeleton height={300} width={220} containerClassName="flex-1" className="max-w-full" />
                    <Skeleton height={300} width={220} containerClassName="flex-1" className="max-w-full" />
                    <Skeleton height={300} width={220} containerClassName="flex-1" className="max-w-full" />
                    <Skeleton height={300} width={220} containerClassName="flex-1" className="max-w-full" />
                </div>
            </div>
        </SkeletonTheme>
    );
}
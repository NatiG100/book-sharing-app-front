import Image from "next/image"

export default function HeroSection(){
    return(
        <section className="absolute h-screen w-full  left-0 right-0 top-0">
            <div className="relative h-full w-full">
                <img
                    src="/books.jpg"
                    height={400}
                    width={700}
                    alt="img"
                    className=" w-full h-full top-0 left-o right-0 left-0 object-cover absolute"
                />

                {/* image overlay */}
                <div
                    className="
                        w-full h-full top-0 right-0 left-0 absolute
                         from-[#062309bb] via-[#181d2388] to-[#181a23]
                        from-30% via-80% to-100% bg-gradient-to-b
                    "
                ></div>
                
                <div className="absolute flex flex-col items-center justify-center gap-8 w-full h-full top-0 right-0 left-0 p-12">

                    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        More than 100 free <span className="text-[#68ff7a]">Christian</span> books
                    </h1>
                    <p className="text-white text-lg lg:text-2xl max-w-lg lg:max-w-xl text-center">
                        Books that will help you to grow in your spiritual life and get deep in to the Christian faith
                    </p>
                </div>
            </div>
        </section>
    );
}
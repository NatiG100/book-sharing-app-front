import Image from "next/image";
import {FaTelegram,FaInstagram,FaFacebook}from'react-icons/fa';
import {SiGmail} from 'react-icons/si'
export default function FooterSection(){
    return(
        <footer className="flex flex-col items-center gap-5 w-full mr-auto ml-auto max-w-[1420px] py-20 mt-12">
            <Image
                src="/logo.png"
                alt="logo"
                width={70}
                height={920}
            />
            <p className="text-white text-lg">More than 100 free <span className="text-[#68ff7a]">Christian</span> books</p>
            <div className="text-2xl flex gap-5 text-white/50 ">
                <FaTelegram className="hover:text-white cursor-pointer"/>
                <FaInstagram className="hover:text-white cursor-pointer"/>
                <FaFacebook className="hover:text-white cursor-pointer"/>
                <SiGmail className="hover:text-white cursor-pointer"/>
            </div>
        </footer>
    );
}
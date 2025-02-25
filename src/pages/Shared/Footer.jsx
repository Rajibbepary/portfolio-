import { FaBehanceSquare, FaFacebookSquare, FaLinkedin,  FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-[#1C222A] text-[#fff] py-8">
            <div className="w-11/12 mx-auto flex max-sm:flex-col max-sm:gap-6 justify-between items-center">
            <div className="flex gap-5 text-xl">

                <Link to='https://web.facebook.com/imranajir88?_rdc=1&_rdr#'>
                
                <div className="p-2 bg-[#fff] rounded-full hover:bg-yellow-300 duration-1000 text-black">
                <FaFacebookSquare />
                </div>
                </Link>
               <Link to='https://www.linkedin.com/in/imranajir'>
               <div className="p-2 bg-[#fff] rounded-full hover:bg-yellow-300 duration-1000 text-black">
                <FaLinkedin />
                </div>
               </Link>
                <div className="p-2 bg-[#fff] rounded-full hover:bg-yellow-200 duration-1000 text-black">
                <FaYoutube />
                </div>
               
                <Link to='https://www.behance.net/Imranajir88'>
                <div className="p-2 bg-[#fff] rounded-full hover:bg-yellow-200 duration-1000 text-black">
                <FaBehanceSquare />
                </div>
                </Link>
             </div>
        <div>
        <p className="font-normal font-poppins text-center text-[14px]"> © All Rights Reserved 2019 - 2025 <span className="text-[#ff004f]"> |</span> Imran Hossain</p>
        </div>
            </div>
        </div>
    );
};

export default Footer;
import { FaFacebookSquare, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-[#262626] text-[#fff] py-8">
            <div className="w-11/12 mx-auto flex max-sm:flex-col max-sm:gap-6 justify-between items-center">
            <div className="flex gap-5 text-xl">

                <div className="p-2 bg-[#fff] rounded-full hover:bg-yellow-300 duration-1000 text-black">
                <FaFacebookSquare />
                </div>
                <div className="p-2 bg-[#fff] rounded-full hover:bg-yellow-300 duration-1000 text-black">
                <FaTwitter />
                </div>
                <div className="p-2 bg-[#fff] rounded-full hover:bg-yellow-300 duration-1000 text-black">
                <FaLinkedin />
                </div>
                <div className="p-2 bg-[#fff] rounded-full hover:bg-yellow-200 duration-1000 text-black">
                <FaYoutube />
                </div>
             </div>
        <div>
        <p className="font-semibold font-poppins text-center"> © All Rights Reserved 2019 - 2025 <span className="text-[#ff004f]"> |</span> Imran Hossain</p>
        </div>
            </div>
        </div>
    );
};

export default Footer;
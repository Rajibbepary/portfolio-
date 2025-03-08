import { FaArrowRight } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { Link } from "react-router-dom";



const Services = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="flex flex-col justify-center m-0 p-0 items-center">
            <h1 className="text-[55px] font-semibold text-[#FFFFFF] font-poppins m-0 leading-tight">
        What I do
             </h1>
         <h3 className="text-[20px] font-normal text-[#FFBF00] font-poppins m-0 leading-tight">
        My Services
             </h3>
        </div>

           <div className="flex gap-6 md:flex-row flex-col mt-10">

           <div className="text-slate-100 flex flex-col bg-[#1C222A] p-8 rounded-2xl">
           <RiComputerLine className="text-[#FFBF00] text-5xl font-bold" />
            <h3 className="text-[20px] font-semibold text-[#FFFFFF] font-poppins mt-3"> Graphic Designer </h3>
            <p className="text-[14px] text-[#FFFFFF] font-poppins mt-1 font-light">Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability</p>
           <div className="flex gap-3 items-center mt-5 ">
            
            <p className="text-[14px] font-semibold font-poppins">Say Hello</p>
           <Link to=''>
           <FaArrowRight className="text-[#FFBF00]" />
           </Link>
           </div>
        </div>
        <div className="text-slate-100 flex flex-col bg-[#1C222A] p-8 rounded-2xl">
           <RiComputerLine className="text-[#FFBF00] text-5xl font-bold" />
            <h3 className="text-[20px] font-semibold text-[#FFFFFF] font-poppins mt-3">KDP Expert</h3>
            <p className="text-[14px] text-[#FFFFFF] font-poppins mt-1 font-light">Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability</p>
           <div className="flex gap-3 items-center mt-5 ">
            
            <p className="text-[14px] font-semibold font-poppins">Say Hello</p>
           <Link to=''>
           <FaArrowRight className="text-[#FFBF00]" />
           </Link>
           </div>
        </div>
        <div className="text-slate-100 flex flex-col bg-[#1C222A] p-8 rounded-2xl">
           <RiComputerLine className="text-[#FFBF00] text-5xl font-bold" />
            <h3 className="text-[20px] font-semibold text-[#FFFFFF] font-poppins mt-3">Design Skills</h3>
            <p className="text-[14px] text-[#FFFFFF] font-poppins mt-1 font-light">Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability</p>
           <div className="flex gap-3 items-center mt-5 ">
            
            <p className="text-[14px] font-semibold font-poppins">Say Hello</p>
           <Link to=''>
           <FaArrowRight className="text-[#FFBF00]" />
           </Link>
           </div>
        </div>
           </div>
        </div>
    );
};

export default Services;
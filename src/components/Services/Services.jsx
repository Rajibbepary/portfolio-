import { FaArrowRight } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";



const Services = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="text-center">
                <h1 className="text-[55px] font-semibold text-slate-100">What I do</h1>
                <p className="text-[20px] font-normal text-yellow-500">My Services</p>
            </div>
           <div className="flex gap-6 md:flex-row flex-col mt-10">

           <div className="text-slate-100 flex flex-col bg-[#1C222A] p-4 rounded-2xl">
           <RiComputerLine />
            <h3>Design Skills</h3>
            <p>Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability</p>
           <div className="flex gap-3 items-center ">
            
            <p>Say Hello</p>
            <FaArrowRight />
           </div>
        </div>
        <div className="text-slate-100 flex flex-col bg-[#1C222A] p-4 rounded-2xl">
           <RiComputerLine />
            <h3>Design Skills</h3>
            <p>Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability</p>
           <div className="flex gap-3 items-center ">
            
            <p>Say Hello</p>
            <FaArrowRight />
           </div>
        </div>
        <div className="text-slate-100 flex flex-col bg-[#1C222A] p-4 rounded-2xl">
           <RiComputerLine />
            <h3>Design Skills</h3>
            <p>Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability</p>
           <div className="flex gap-3 items-center ">
            
            <p>Say Hello</p>
            <FaArrowRight />
           </div>
        </div>
           </div>
        </div>
    );
};

export default Services;
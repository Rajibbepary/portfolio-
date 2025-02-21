import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import {motion } from "motion/react"


const Navbar = () => {
const [open, setOpen] = useState(false)

    return (
     <nav className="flex text-[#FFFFFF] bg-[#010201] justify-between w-full md:p-6 p-3">

        <div>
           <motion.h2
           animate={{color:['#ff004f', '#33ffe3', '#55ffe5']}}
           transition={{duration:2.5, repeat:Infinity}}
           className="text-3xl font-medium "><span className="text-[#ff004f] font-bold">I</span><span className="text-green-500 ">m</span>ran</motion.h2>
        </div>
        <div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
            {
                open === true ?
                 <IoMdClose className="text-2xl font-bold" /> :
                  <FiMenu className="text-2xl font-bold"/>
            }
           
            
            </button>
            <ul className={`md:flex font-poppins duration-1000 max-sm:py-8 max-sm:px-4 max-sm:right-6 max-sm:space-y-4 ${open ? 'top-10' : '-top-60'} max-sm:bg-[#ff0051cc] max-sm:shadow-xl rounded-md absolute md:static gap-12 text-[15px]`}>
                <li><Link className="relative text-white text-[18px] capitalize no-underline before:absolute before:left-0 before:bottom-[-6px] before:w-0 before:h-[2px] before:bg-[#ff0051cc] before:transition-all before:duration-500 hover:before:w-full">Home</Link></li>
                <li><Link className="relative text-white text-[18px] capitalize no-underline before:absolute before:left-0 before:bottom-[-6px] before:w-0 before:h-[2px] before:bg-[#ff0051cc] before:transition-all before:duration-500 hover:before:w-full">About</Link></li>
                <li><Link className="relative text-white text-[18px] capitalize no-underline before:absolute before:left-0 before:bottom-[-6px] before:w-0 before:h-[2px] before:bg-[#ff0051cc] before:transition-all before:duration-500 hover:before:w-full">Servises</Link></li>
                <li><Link to='contact' className="relative text-white text-[18px] capitalize no-underline before:absolute before:left-0 before:bottom-[-6px] before:w-0 before:h-[2px] before:bg-[#ff0051cc] before:transition-all before:duration-500 hover:before:w-full">Contact</Link></li>
            </ul>

        </div>
      
     </nav>
    );
};

export default Navbar;
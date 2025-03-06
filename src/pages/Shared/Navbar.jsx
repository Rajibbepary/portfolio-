import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";



const Navbar = () => {
const [open, setOpen] = useState(false)

    return (
     <nav className="flex text-[#FFFFFF] justify-end w-full md:p-6 p-3">

        <div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
            {
                open === true ?
                 <IoMdClose className="text-2xl font-bold" /> :
                  <FiMenu className="text-2xl font-bold"/>
            }
           
            
            </button>
            <ul className={`md:flex font-poppins duration-1000 max-sm:py-8 max-sm:px-4 max-sm:right-6 max-sm:space-y-4 ${open ? 'top-10' : '-top-60'} max-sm:bg-[#DDB166] max-sm:shadow-xl rounded-md absolute md:static gap-12 text-[15px]`}>
                <li><Link className="relative text-white text-[15px] capitalize no-underline before:absolute before:left-0 before:bottom-[-6px] before:w-0 before:h-[2px] before:bg-[#DDB166] before:transition-all before:duration-500 hover:before:w-full font-semibold">Home</Link></li>
                <li><Link className="relative text-white text-[15px] capitalize no-underline before:absolute before:left-0 before:bottom-[-6px] before:w-0 before:h-[2px] before:bg-[#DDB166] before:transition-all before:duration-500 hover:before:w-full font-semibold">About</Link></li>
                <li><Link className="relative text-white text-[15px] capitalize no-underline before:absolute before:left-0 before:bottom-[-6px] before:w-0 before:h-[2px] before:bg-[#DDB166] before:transition-all before:duration-500 hover:before:w-full font-semibold">Servises</Link></li>
                <li><Link to='contact' className="relative text-white text-[15px] capitalize no-underline before:absolute before:left-0 before:bottom-[-6px] before:w-0 before:h-[2px] before:bg-[#DDB166] before:transition-all before:duration-500 hover:before:w-full font-semibold">Contact</Link></li>
            </ul>

        </div>
      
     </nav>
    );
};

export default Navbar;
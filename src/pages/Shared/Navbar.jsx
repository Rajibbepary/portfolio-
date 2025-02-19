import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";



const Navbar = () => {
const [open, setOpen] = useState(false)

    return (
     <nav className="flex text-black bg-yellow-300 justify-between w-full mx-auto font-poppins font-semibold p-6">

        <div>
           <h2> Rajib</h2>
        </div>
        <div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
            {
                open === true ?
                 <IoMdClose className="text-2xl" /> :
                  <FiMenu className="text-2xl"/>
            }
           
            
            </button>
            <ul className={`md:flex duration-1000 max-sm:py-8 max-sm:px-4 max-sm:right-6 max-sm:space-y-4 ${open ? 'top-12' : '-top-60'} bg-yellow-300 max-sm:shadow-xl rounded-md absolute md:static gap-12 text-[15px]`}>
                <li><Link className="hover:bg-black text-white p-2 rounded-md">Home</Link></li>
                <li><Link className="hover:bg-black text-white p-2 rounded-md">About</Link></li>
                <li><Link className="hover:bg-black text-white p-2 rounded-md">Servises</Link></li>
                <li><Link className="hover:bg-black text-white p-2 rounded-md">Contact Us</Link></li>
            </ul>

        </div>
      
     </nav>
    );
};

export default Navbar;
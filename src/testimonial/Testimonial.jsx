
import client1 from '../assets/imran-najir.png'
const Testimonial = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div>
                <div className="text-center">
                <h1 className="font-poppins text-[55px] font-semibold text-[#FFFFFF]">TESTIMONIALS</h1>
                <p className="font-poppins text-[20px] font-normal text-[#FFBF00]">What my Clients are saying?</p>
                </div>
               
                <div className="flex gap-6 md:flex-row flex-col mt-14">
               
                          <div className="text-slate-100 flex flex-col bg-[#1C222A] p-8 rounded-2xl">
                            <img src={client1} alt="" className='w-20 h-20 object-cover ' />
                           <h3 className="text-[20px] font-semibold text-[#FFFFFF] font-poppins mt-3"> Graphic Designer </h3>
                           <p className="text-[14px] text-[#FFFFFF] font-poppins mt-1 font-light">Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability</p>
                       </div>
                       <div className="text-slate-100 flex flex-col bg-[#1C222A] p-8 rounded-2xl">
                       <img src={client1} alt="" className='w-20 h-20 object-cover ' />
                           <h3 className="text-[20px] font-semibold text-[#FFFFFF] font-poppins mt-3">KDP Expert</h3>
                           <p className="text-[14px] text-[#FFFFFF] font-poppins mt-1 font-light">Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability</p>
                       </div>
                       <div className="text-slate-100 flex flex-col bg-[#1C222A] p-8 rounded-2xl">
                       <img src={client1} alt="" className='w-20 h-20 object-cover ' />
                           <h3 className="text-[20px] font-semibold text-[#FFFFFF] font-poppins mt-3">Design Skills</h3>
                           <p className="text-[14px] text-[#FFFFFF] font-poppins mt-1 font-light">Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability</p>
                       </div>
                          </div>
            </div>
        </div>
    );
};

export default Testimonial;

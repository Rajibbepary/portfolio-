import Marquee from "react-fast-marquee";
import star from '../../assets/star-of-life.svg'



const HappayClient = () => {
    return (
        <>
            <div className=" bg-[#FFBF00] py-4 flex items-center ">
            <Marquee  pauseOnHover={stop} speed={50}>


 <div className="flex justify-between items-center ">
 <img src={star} alt=""  className="w-14 h-14 animate-spin [animation-duration:3000ms]"/>
    <p className="font-semibold text-5xl text-transparent bg-gradient-to-r from-black to-gray-800 bg-clip-text drop-shadow-lg">
      1k+ SUCCESS PROJECTS
    </p>
 </div>
  <div className="flex justify-between items-center ml-16">
  <img src={star} alt=""  className="w-14 h-14 animate-spin [animation-duration:3000ms]"/>
    <p className="font-semibold text-5xl text-transparent bg-gradient-to-r from-black to-gray-900 bg-clip-text drop-shadow-2xl animate-text">
      300+ HAPPY CLIENTS
    </p>
  </div>

        </Marquee>
       
       
            </div>
        </>
    );
};

export default HappayClient;
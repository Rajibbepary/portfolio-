import Marquee from "react-fast-marquee";
import star from '../../assets/star-of-life.svg'



const HappayClient = () => {
    return (
        <>
            <div className="w-full bg-[#DDB166] h-[90px] flex items-center ">
            <Marquee >


<div className="flex justify-evenly text-center">
  <div className="flex justify-between gap-3">
  <img src={star} alt=""  className="animate-spin [animation-duration:3000ms]"/>
    <h1 className="font-semibold text-5xl text-transparent bg-gradient-to-r from-black to-gray-800 bg-clip-text drop-shadow-lg">
      300+ SUCCESS PROJECTS
    </h1>
  </div>
  <div className="flex justify-between gap-3">
  <img src={star} alt=""  className="animate-spin [animation-duration:3000ms]"/>
    <h1 className="font-semibold text-5xl text-transparent bg-gradient-to-r from-black to-gray-800 bg-clip-text drop-shadow-lg">
      10+ TEAM MEMBERS
    </h1>
  </div>
  <div className="flex justify-between gap-3">
  <img src={star} alt=""  className="animate-spin [animation-duration:3000ms]"/>
    <h1 className="font-semibold text-5xl text-transparent bg-gradient-to-r from-black to-gray-900 bg-clip-text drop-shadow-2xl animate-text">
      400+ HAPPY CLIENTS
    </h1>
  </div>
  
</div>

        </Marquee>
       
       
            </div>
        </>
    );
};

export default HappayClient;
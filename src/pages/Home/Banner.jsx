import { Typewriter } from "react-simple-typewriter";
import person from '../../assets/480442282_1349359656512565_4705522928167712045_n-removebg-preview.png'
const Banner = () => {
    return (
        <div className="bg-black ">
           
           <div className="flex max-sm:flex-col-reverse max-sm:gap-9 justify-between items-center w-11/12 mx-auto">

           <div className="lg:w-6/12 flex flex-col">
                <h1 className="uppercase text-white text-[18px] font-medium font-poppins">Hey, My Name is</h1>
                <h1 className="text-[50px] font-semibold mb-4 text-[#FFFFFF]" >Imran Hossain</h1>
            <h1 className='text-white  text-3xl mb-3 font-semibold'>
         <Typewriter
           words={['I AM Graphic designer', ' I AM Video Edtingin!']}
           loop={0}
           cursor
           cursorStyle='_'
           typeSpeed={50}
           deleteSpeed={150}
           delaySpeed={1000}
           
         />
       </h1>
        <p className="text-slate-200 mt-4">From Dhaka, Bangladesh. I’m a Graphic designer who is passionate about making error-free websites. I am good at video Edting. I love to talk with you about your unique. </p>
            </div>
            <div className="w-5/12 max-sm:w-full ">
                <img className="w-[500px] h-[500px] object-cover" src={person} alt=""  />
            </div>

           </div>
        </div>
    );
};

export default Banner;
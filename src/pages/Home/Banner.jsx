import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react"
import person from '../../assets/imran.png'
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
           <div className="flex max-sm:flex-col-reverse max-sm:gap-9 justify-between items-center w-11/12 mx-auto">
           <motion.div
           initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1.5,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
            }}
           className="lg:w-6/12 flex flex-col">
                {/* <h1 className="uppercase text-white text-[18px] font-medium font-poppins">Hey, My Name is</h1> */}
                <h1 className="text-[50px] font-semibold mb-4 text-[#FFFFFF]" >Imran Najir</h1>
            <h1 className='text-white  text-3xl mb-3 font-semibold'>
         <Typewriter
           words={[' Graphic Designer', 'KDP Expert']}
           loop={0}
           cursor
           cursorStyle='_'
           typeSpeed={50}
           deleteSpeed={150}
           delaySpeed={1000}
           
         />
       </h1>
        <p className="text-slate-200 mt-4">From Dhaka, Bangladesh. I’m a Graphic designer who is passionate about making Graphic. I am good at KDP Expert. I love to talk with you about your unique. </p>
       
           <Link to='contact'>
           <motion.div 
           animate={{ x:[0, 50, 0]}} 
           transition={{duration:10, delay:1, repeat:Infinity}}
            className={`
        p-3 max-sm:py-1 rounded-full  text-xl mt-5 text-center w-1/3 font-semibold
        text-slate-100
        transition-all
    shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]

        hover:shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        hover:text-violet-500
    `}>
        Contact
           
            </motion.div>
           
           </Link>
            </motion.div>
            <motion.div
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{
                 duration: 1.5,
                 delay: 1,
                 ease: [0, 0.71, 0.2, 1.01],
             }}
            className="w-5/12 max-sm:w-full  ">
                <img className="w-full h-full object-cover" src={person} alt=""  />


                {/* <div className="flex ">
                <motion.div 
                    animate={{ 
                        x: [10, 30, 10], 
                        borderColor: ["#3b82f6", "#a855f7", "#3b82f6"], 
                        boxShadow: [
                            "0 0 10px #3b82f6, inset 0 0 10px #3b82f6", 
                            "0 0 20px #a855f7, inset 0 0 20px #a855f7",
                            "0 0 10px #3b82f6, inset 0 0 10px #3b82f6"  
                        ]
                    }} 
                    transition={{
                        duration: 10, 
                        delay: 1, 
                        repeat: Infinity
                    }}
                    className={`
                        p-3 max-sm:py-1 rounded-full text-xl mt-3 text-center w-1/3 font-semibold
                        text-slate-100
                        transition-all
                        border-2 border-blue-500 // Initial border color
                        shadow-[-1px_-1px_5px_rgba(59,_130,_246,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(59,_130,_246,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
                        hover:shadow-[-5px_-5px_10px_rgba(59,_130,_246,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
                        hover:text-purple-500
                    `}
                >
                    Contact
                </motion.div>

                        <motion.div 
                animate={{ 
                    y: [20, 50, 20], 
                    borderColor: ["#ffffff", "#9333ea", "#ffffff"], 
                    boxShadow: [
                        "0 0 10px #ffffff, inset 0 0 10px #ffffff", 
                        "0 0 20px #9333ea, inset 0 0 20px #9333ea", 
                        "0 0 10px #ffffff, inset 0 0 10px #ffffff"  
                    ]
                }} 
                transition={{
                    duration: 10, 
                    delay: 1, 

                    repeat: Infinity
                }}
                className={`
                    p-3 max-sm:py-1 rounded-full text-xl mt-3 text-center w-1/3 font-semibold
                    text-slate-100
                    transition-all
                    border-2 border-white // Initial border color
                    shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
                    hover:shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
                    hover:text-violet-500
                `}
            >
                Contact
            </motion.div>
                </div> */}
            </motion.div>

           </div>
        </div>
    );
};

export default Banner;
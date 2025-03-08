import { FaLaptopCode } from "react-icons/fa6";
import ContactCard from "../components/ContactCard";

const Experience = () => {
    return (
        <div className="mt-8">
            <div className="text-center">
                <h1 className="text-[55px] font-semibold font-poppins text-[#FFBF00]">EXPERIENCE</h1>
                <p className="text-[22px] font-semibold font-poppins text-slate-200">What I have done?</p>
            </div>

            <div className="flex gap-8 p-8 bg-[#1C2229] mb-6 rounded-3xl mt-8">
                <div>
                <FaLaptopCode className="text-[#FFBF00] text-6xl font-bold"/>
                </div>
                <div>
                   <h3 className="text-[15px] font-semibold text-slate-200 font-poppins">2022 - Present</h3>
                   <h2 className="text-[20px] font-semibold font-poppins text-slate-200">www.fiverr.com</h2>
                   <p className="text-[15px] mt-3 font-light font-poppins text-slate-300">I am ImranNajir, a pixel-perfect graphic designer. With years of experience and expertise in the design industry since 2014, I create visually stunning and impactful designs. Precision, creativity, and attention to detail are my strengths. Client satisfaction is my top priority. Work with me and be delighted with the results.</p>
                  
                </div>
            </div>
            <div className="flex gap-8 p-8 bg-[#1C2229] mb-6 rounded-3xl mt-8">
                <div>
                <FaLaptopCode className="text-[#FFBF00] text-6xl font-bold"/>
                </div>
                <div>
                   <h3 className="text-[15px] font-semibold text-slate-200 font-poppins">2022 - Present</h3>
                   <h2 className="text-[20px] font-semibold font-poppins text-slate-200">www.upwork.com</h2>
                   <p className="text-[15px] mt-3 font-light font-poppins text-slate-300">As a graphic designer, I craft visually compelling designs that align with your brand is identity. From logos to website UI/UX, I focus on clean, modern aesthetics that enhance user experience. Whether you need branding materials, social media graphics, or custom illustrations, I bring creativity and precision to every project. Let is collaborate and make your vision a reality!</p>
                  
                </div>
            </div>
            <div className="flex gap-8 p-8 bg-[#1C2229] mb-6 rounded-3xl mt-8">
                <div>
                <FaLaptopCode className="text-[#FFBF00] text-6xl font-bold"/>
                </div>
                <div>
                   <h3 className="text-[15px] font-semibold text-slate-200 font-poppins">2020 - Present</h3>
                   <h2 className="text-[20px] font-semibold font-poppins text-slate-200">Graphic Designer</h2>
                   <p className="text-[15px] mt-3 font-light font-poppins text-slate-300">As a graphic designer, I specialize in creating visually engaging designs that reflect your brand is identity. From logo design to website UI/UX, I focus on delivering clean, modern, and user-friendly aesthetics. Whether you need branding materials, social media graphics, or marketing visuals, I ensure high-quality, impactful designs that stand out. Let is bring your creative vision to life!</p>
                  
                </div>
            </div>

            <ContactCard/>
        </div>
    );
};

export default Experience;
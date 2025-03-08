import about from '../assets/imran-najir-m-Size.png'
import Experience from './Experience';

const About = () => {
    return (
        <div >
            <div className='flex justify-center  items-center flex-col'>
                <div className=''>
                    <img className='w-80 h-80 object-cover' src={about} alt="" />
                </div>
                <div className='flex  justify-center items-center flex-col'>
                    <h1 className='md:text-[65px] text-3xl font-bold font-poppins text-[#FFFFFF]'>IMRAN NAJIR</h1>
                 <p className='text-[#FFBF00] text-[18px] font-semibold font-poppins mt-3'>Graphic Designer</p>
                </div>
            </div>
            <div>
                <h1 className='text-[#FFBF00]  text-[35px] font-semibold mt-5'>ABOUT ME</h1>
                <p className='text-[18px] font-light text-slate-300 font-poppins mt-4'>Welcome! I’m Imran Najir, a Graphic Designer, KDP Expert, and A+ Content Designer with over five years of experience in self-publishing. I specialize in creating high-quality book covers, word search books, dot marker books, and activity books for both adults and kids. As a KDP seller and professional designer, I understand what it takes to create visually appealing, upload-ready PDFs that not only meet Amazon’s requirements but also boost sales. My goal is to provide engaging, market-ready designs that help your books stand out.I have successfully completed numerous projects for both local and international clients, always prioritizing quality, accuracy, and customer satisfaction.</p>
            </div>
            <Experience/>
        </div>
        
    );
};

export default About;
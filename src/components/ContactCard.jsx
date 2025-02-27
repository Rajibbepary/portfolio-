

import { BsPersonFill, BsPersonFillCheck } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const ContactCard = () => {
    return (
        <div className=' bg-black w-full h-[350px] py-5'>
          <div className='text-center mt-7 mb-7 '>
          <h1 className='text-5xl font-semibold text-slate-50'>Contact</h1>
          <p className='text-[#F3B90B] text-[20px] font-normal'>Are You Looking For Your Business Online Presence? I am here. 🙂</p>
          </div>
           <div className=' flex justify-between max-sm:flex-col gap-4 w-10/12 mx-auto '>
           <div className='bg-[#1C222A] px-14 py-7 flex flex-col items-center rounded-2xl'>
                        <BsPersonFill className='text-4xl text-[#F3B90B]' />
                    <h2 className='text-slate-50 font-bold text-[25px]'>Imran Hossian</h2>
                <p className='text-slate-100'>Graphic designer</p>
            </div>
            <div className='bg-[#1C222A] py-7 px-14 rounded-2xl flex flex-col items-center'>
                    <BsPersonFillCheck className='text-4xl text-[#F3B90B]' />

                    <h2 className='text-slate-50 font-bold text-[25px]'>Freelance
                    </h2>
                <p className='text-slate-100'>Available Right Now</p>
            </div>
            <div className='bg-[#1C222A] p-7 px-14 rounded-2xl flex flex-col items-center '>
                         <MdEmail className='text-4xl text-[#F3B90B]'/>
                    <h2 className='text-slate-50 font-bold text-[25px]'>Email</h2>
                <p className='text-slate-100'>Imranajir88@gmail.com</p>
            </div>
           </div>
        </div>
    );
};

export default ContactCard;
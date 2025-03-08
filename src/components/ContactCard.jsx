import { motion } from "framer-motion";
import { BsPersonFill, BsPersonFillCheck } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


const ContactSection = () => {
  return (
    <div className="relative flex w-full py-5">
     
      {/* Main Content */}
      <div className="w-full md:h-[350px] text-center">
        <h1 className="text-[55px] font-semibold text-slate-50">Contact</h1>
        <p className="text-[#FFBF00] text-[25px] font-normal mb-10">
          Are You Looking For Your Business Online Presence? I am here. 🙂
        </p>
        <div className="grid md:grid-cols-12 gap-6 w-11/12 mx-auto">
          {/* First Card */}
          <motion.div
            className="bg-[#1C222A] px-14 py-7 col-span-4 flex flex-col items-center rounded-2xl"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <BsPersonFill className="text-4xl text-[#F3B90B]" />
            <h2 className="text-slate-50 font-bold text-[25px]">Imran Najir</h2>
            <p className="text-slate-100">Graphic designer</p>
          </motion.div>

          {/* Second Card */}
          <motion.div
            className="bg-[#1C222A] col-span-4 py-7 px-14 rounded-2xl flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <BsPersonFillCheck className="text-4xl text-[#F3B90B]" />
            <h2 className="text-slate-50 font-bold text-[25px]">Freelancer</h2>
            <p className="text-slate-100">Available Right Now</p>
          </motion.div>

          {/* Third Card */}
          <motion.div
            className="bg-[#1C222A] col-span-4 p-7 px-14 rounded-2xl flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <MdEmail className="text-4xl text-[#F3B90B]" />
            <h2 className="text-slate-50 font-bold text-[25px]">Email</h2>
            <p className="text-slate-100">Imranajir88@gmail.com</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

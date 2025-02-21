/* eslint-disable no-irregular-whitespace */

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import contact from '../assets/contact1.png'
import home from '../assets/home_5591266.png'
import man from '../assets/teacher_7162968.png'
import email from '../assets/email_552486.png'
const Contact = () => {
    return (
        <div className="w-full bg-black mx-auto ">
            <div className="text-center ">
                <h3 className="text-5xl font-semibold text-slate-100">Contact​</h3>
                <p className="text-slate-100 mt-3 mb-10"> Let is Talk About Ideas​</p>
                 </div>
<div className="w-11/12 mx-auto flex justify-between max-sm:flex-col-reverse">
        <div className="md:w-1/2">
            <div>
                <img src={contact} className="rounded-xl" alt=""  />
                <h1 className="text-3xl font-semibold font-poppins text-slate-100 mt-4">Imran Hossain</h1>
                <p className="text-xl font-semibold text-slate-100 mt-2 mb-2">Graphic designer</p>
                <p className="text-slate-100 ">Are You Looking For Your Business Online Presence?
               </p>
               <p className="text-slate-100"> I am here. 🙂</p>
            </div>
            <div>
                <div>
                    <img className="w-8 h-8 object-cover" src={home} alt="" />
                </div>
                <div>
                    <img className="w-8 h-8 object-cover" src={man} alt="" />
                </div>
                <div>
                    <img className="w-8 h-8 object-cover" src={email} alt="" />
                </div>
            </div>
        </div>
        <div className="md:w-1/2 flex flex-col gap-3">

            <div className="flex gap-3 max-sm:flex-col">
            <TextField 
                label="First Name" 
                variant="outlined" 
                fullWidth 
                sx={{
                    "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "red" }, 
                    "&:hover fieldset": { borderColor: "green" }, 
                    "&.Mui-focused fieldset": { borderColor: "blue" } 
                    },
                    "& .MuiInputLabel-root": { color: "red" }, 
                    "& .MuiInputLabel-root.Mui-focused": { color: "blue" }  
                }}
                />

        <TextField 
                label="First Name" 
                variant="outlined" 
                fullWidth 
                sx={{
                    "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "red" }, 
                    "&:hover fieldset": { borderColor: "green" }, 
                    "&.Mui-focused fieldset": { borderColor: "blue" } 
                    },
                    "& .MuiInputLabel-root": { color: "red" }, 
                    "& .MuiInputLabel-root.Mui-focused": { color: "blue" }  
                }}
                />

            </div>
       
            <TextField 
                label="First Name" 
                variant="outlined" 
                fullWidth 
                sx={{
                    "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "red" }, 
                    "&:hover fieldset": { borderColor: "green" }, 
                    "&.Mui-focused fieldset": { borderColor: "blue" } 
                    },
                    "& .MuiInputLabel-root": { color: "red" }, 
                    "& .MuiInputLabel-root.Mui-focused": { color: "blue" }  
                }}
                />

            <TextField 
                label="Write your message..." 
                variant="outlined" 
                fullWidth 
                sx={{
                    "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "red" }, 
                    "&:hover fieldset": { borderColor: "green" }, 
                    "&.Mui-focused fieldset": { borderColor: "blue" } 
                    },
                    "& .MuiInputLabel-root": { color: "red" }, 
                    "& .MuiInputLabel-root.Mui-focused": { color: "blue" }  
                }}
                />
                
            <Button variant="contained" color="success">Submit</Button>

        </div>
       </div>
        </div>    
    );
};

export default Contact;


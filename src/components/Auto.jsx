// import { useEffect, useState } from "react";


// const Auto = () => {

//     const [count, setCount] = useState(0);
//     const [isHovering, setIsHovering] = useState(false);
  
//     useEffect(() => {
//       let interval;
//       if (isHovering && count < 100) {
//         interval = setInterval(() => {
//           setCount((prevCount) => prevCount + 1);
//         }, 10);
//       } else {
//         clearInterval(interval);
//       }
  
//       return () => clearInterval(interval);
//     }, [isHovering, count]);
//     return (
       
//         <div
//         className="flex flex-col items-center justify-center h-screen bg-gray-100"
//         onMouseEnter={() => {
//           setCount(0); 
//           setIsHovering(true);
//         }}
//         onMouseLeave={() => setIsHovering(false)}
//       >
//         <h1 className="text-3xl font-bold">Hover to Start Counting</h1>
//         <p className="text-2xl mt-2">{count}</p>
//       </div>
//     );
// };

// export default Auto;

import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const PlaceCard = ({ 
  img,
  title,
  location,
  description,
  price,
  type 
}) => {
  
const navigate = useNavigate(); // Initialize navigate function

const handleBookNow = () => {
   // Navigate to booking form page
   navigate('/booking-form');
}

return (
   <>
      <div className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer">
         <div className="overflow-hidden">
            <img src={img} alt="No image" className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110" />
         </div>
         <div className="space-y-2 p-3">
            <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
            <div className="flex items-center gap-2 opacity-70">
               <IoLocationSharp />
               <span>{location}</span>
            </div>
            <p className="line-clamp-2">{description}</p>            
             {/* BOOK NOW Button */}
             {/* Updated button style */}
             {/* Redirects to booking form page on click */}
             <button
                onClick={handleBookNow}
                style={{ backgroundColor: 'blue', color: 'white' }}
                className='py-[8px] px-[16px] rounded-md'
              >
                 BOOK NOW
              </button>
           </div>
       </ div >
    </>
);
};

export default PlaceCard;
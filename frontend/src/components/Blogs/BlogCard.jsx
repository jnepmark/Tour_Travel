import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/places/masaimara.jpg";
import Img2 from "../../assets/places/usa.jpg";
import Img3 from "../../assets/places/dubai.jpg";
import Img4 from "../../assets/places/water.jpg";
import Img5 from "../../assets/places/polar.jpg";
import Img6 from "../../assets/places/place6.jpg";

const BlogCard = ({ imageUrl, date, title, description, author }) => {
  const getRandomColor = () => {
    let color;
    do {
      // Generate a random color in hexadecimal format
      color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    } while (parseInt(color.substring(1), 16) < 0x333333); // Ensure the random color is not too dark
    return color;
  };

  return (
    <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white">
      <div className="overflow-hidden">
        {/* Using imageUrl prop for image source */}
        <img
          src={imageUrl}
          alt="Destination"
          className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
        />
      </div>
      <div className="flex justify-between pt-2 text-slate-600">
        <p>{date}</p>
        <p className="line-clamp-1"> {author}</p>
      </div>

      {/* Discover & Explore link with hovering effect */}
       {/* Using title for link destination */}
       {/* Pass necessary data in location state */}
       <Link 
         to={{
           pathname: `/blogs/${title}`,
           state: { imageUrl, date, title, description, author }
         }}
         onClick={() => window.scrollTo(0, 0)}
         style={{ display:'block', marginTop:'10px', padding:'5px', backgroundColor:getRandomColor(), color:'#fff' }}
         className="hover:bg-gray-800 transition-colors duration-300"
       >
         Discover & Explore {title}
       </Link>

     {/* Displaying Description below link*/}
     {/* Using description prop for displaying blog description */} 
     <p>{description}</p> 
   </div>  
 );

 function getImageUrl(index) {
  switch (index) {
    case 1:
      return Img1;
    case 2:
      return Img2;
    case 3:
      return Img3;
    case 4:
     return Img4;
     case 5:
      return Img5;
    case 6:
     return Img6;
    default:
      return "";
  }
}

};

export default BlogCard;
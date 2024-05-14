import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/masaimara.jpg";
import Img2 from "../../assets/places/usa.jpg";
import Img3 from "../../assets/places/dubai.jpg";
import Img4 from "../../assets/places/water.jpg";
import Img5 from "../../assets/places/polar.jpg";
import Img6 from "../../assets/places/place6.jpg";
// Add more imports if necessary

const BlogsComp = () => {
  const navigate = useNavigate();
  const [blogsData, setBlogsData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/api/v1/destinations/")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setBlogsData(data))
      .catch((error) => console.error("Error fetching data:", error)); // Log the error
  }, []);

  // Function to handle clicking on a specific destination
  const handleDestinationClick = (destination_title) => {
    console.log(`Clicked on destination with ID: ${destination_title}`);
    // Navigate to placesbydestination.jsx or perform any other action based on the clicked destination
    navigate(`/blogs/${destination_title}`); 
  };

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Destinations<br />
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols=3 gap=33">
            {blogsData.length > 0 ? (
              blogsData.map((item, index) =>
                <div key={item.id} style={{ position:'relative' }}>
                  {/* Pass item properties including image URL to BlogCard */}
                  {/* Assuming each item has a property called "image" with a corresponding number for importing */}
                  {/* Use onClick handler to call handleDestinationClick when card is clicked */}
                  <BlogCard {...item} imageUrl={getImageUrl(index + 1)} onClick={() => handleDestinationClick(item.id)} />
                </div>
              )
            ) : (
              blogsData.length === 0 && (<p>Loading...</p>)
            )}
          </div>
        </section>
      </div>
    </>
  );
};


// Function to get corresponding image URL based on index
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

export default BlogsComp;
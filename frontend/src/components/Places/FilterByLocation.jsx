import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Img1 from "../../assets/places/Malindi.jpg";
import Img2 from "../../assets/places/masaimara.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg"
import Img7 from "../../assets/places/place4.jpg";
import Img8 from "../../assets/places/place5.jpg";
import Img9 from "../../assets/places/place6.jpg"

const FilterByLocation = () => {
  const [filteredLocations, setFilteredLocations] = useState([]);
  const location = useLocation();
  const PlacesData = 
 [
    {
      img: Img1,
    title: "Beach in Malindi",
    location: "AFRICA",
    description: "Malindi is a popular tourist attraction destination...",
    price: 6700,
    type: "Cultural Relax",
    },
    {
      img: Img2,
      title: "Masai mara",
      location: "MIDDLE EAST ",
      description:
        "Boasting exceptional year round wildlife, the Masai Mara is a must visit for anyone on safari in Kenya for the first time. A Masai Mara holiday rarely disappoints, this is especially the case from July to October during the Great Wildebeest Migration. Well-managed examples of sustainable tourism have developed as conservancies around the Masai Mara Game Reserve, these areas are carefully controlled areas of land, managed by the high-end safari lodges who lease them from the local Masai.",
      price: 6700,
      type: "Game Drive",
    },
    {
      img: Img3,
      title: "Underwater",
      location: "EUROPE",
      description:
        "The underwater is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
      price: 6200,
      type: "Cultural Relax",
    },
    {
      img: Img4,
      title: "Sydney",
      location: "USA",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 6700,
      type: "Cultural Relax",
    },
    {
      img: Img5,
      title: "Los Angeles",
      location: "POLAR",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
      price: 6700,
      type: "Cultural Relax",
    },
    {
      img: Img6,
      title: "Los Vegas",
      location: "ASIA",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
      price: 6200,
      type: "Cultural Relax",
    },
    {
      img: Img7,
      title: "Beach",
      location: "AFRICA",
      description: "Malindi is a popular tourist attraction destination .This wonderful coastal destination is located 120 km north east of the town of Mombasa with so much exciting things to do. Starting from the historical ruins to the National Parks.Established in the 14th century and was also served as a sanctuary to Vasco da Gama during 1498. The popular Vasco da Gama pillar and church was erected by the Portuguese explorer and is testimony to the fact of the friendship of the local people of Malindi with him.",
      price: 6700,
      type: "Cultural Relax",
    },
    {
      img: Img8,
      title: "Masai mara",
      location: "AFRICA",
      description:
        "Boasting exceptional year round wildlife, the Masai Mara is a must visit for anyone on safari in Kenya for the first time. A Masai Mara holiday rarely disappoints, this is especially the case from July to October during the Great Wildebeest Migration. Well-managed examples of sustainable tourism have developed as conservancies around the Masai Mara Game Reserve, these areas are carefully controlled areas of land, managed by the high-end safari lodges who lease them from the local Masai.",
      price: 6700,
      type: "Game Drive",
    },
    {
      img: Img9,
      title: "Underwater",
      location: "ASIA",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
      price: 6200,
      type: "Cultural Relax",
    },
    
  ];
  

  useEffect(() => {
    console.log("Location:", location);
    
    const searchParams = new URLSearchParams(location.search);
    
    if (searchParams.has("title")) {
       const selectedTitle = searchParams.get("title");
       console.log("Selected Title:", selectedTitle);

       // Filter data based on selected title
       const filteredData = PlacesData.filter(item => item.location === selectedTitle);
       
       console.log("Filtered Data:", filteredData);
       
       setFilteredLocations(filteredData);
     } else {
        console.log("No Title Selected");
        setFilteredLocations(PlacesData); 
     }
   }, [location]);

   useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    
    if (searchParams.has("title")) {
       const selectedTitle = searchParams.get("title");
       
       // Filter data based on selected title
       const filteredData = PlacesData.filter(item => item.location === selectedTitle);
       
       setFilteredLocations(filteredData);
     } else {
        setFilteredLocations(PlacesData); 
     }
   }, [location]);

   return (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredLocations.map((location, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img src={location.img} alt={location.title} className="w-full h-auto mb-4" />
            <h3 className="text-xl font-bold">{location.title}</h3>
            <p>{location.description}</p>
          </div>
        ))}
     </div>
   );
};

export default FilterByLocation;
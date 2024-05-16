import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const FilterByLocation = ({ locations }) => {
  const [filteredLocations, setFilteredLocations] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.title) {
      const filteredData = locations.filter(item => item.location === location.state.title);
      setFilteredLocations(filteredData);
    } else{
       setFilteredLocations(locations);
     }
   }, [locations, location]);

   return (
   
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
       {filteredLocations.map((location) => (
         <div key={location.id} className="bg-white rounded-lg shadow-md p-4">
           <img src={location.imageUrl} alt={location.name} className="w-full h-auto mb-4" />
           <h3 className="text-xl font-bold">{location.name}</h3>
           <p>{location.description}</p>
           <p> Hello Worlds</p>
         </div>
       ))}
     </div>
   );
};

export default FilterByLocation;
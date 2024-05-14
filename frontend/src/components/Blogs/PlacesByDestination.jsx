const PlacesByDestination = () => {
  const { destination } = useParams();
  const [placesData, setPlacesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define an object mapping place names to image imports
  const placeImagesMap = {
    masaimara: masaimaraImg,
    usa: usaImg,
    dubai: dubaiImg
    // Add more entries for other places if necessary
  };

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/destinations/places/${destination}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setPlacesData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
   }, [destination]);

   if (loading) {
     return <p>Loading...</p>;
   }

   if (error) {
     return <p>Error: {error.message}</p>;
   }

   return (
     <div>
       <h2>Places in {destination}</h2>
       <ul>
         {placesData.map((place) => (
           <li key={place.id}>
             {/* Displaying place name and image dynamically */}
             <img src={placeImagesMap[place.name]} alt={place.title} />
             {place.title} - Price: ${place.price} - Description: {place.description}
           </li>
         ))}
       </ul>
     </div>
   );
};

export default PlacesByDestination;
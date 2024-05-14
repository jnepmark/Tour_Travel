import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/Malindi.jpg";
import Img2 from "../../assets/places/masaimara.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Beach",
    location: "AFRICA",
    description: "Malindi is a popular tourist attraction destination .This wonderful coastal destination is located 120 km north east of the town of Mombasa with so much exciting things to do. Starting from the historical ruins to the National Parks.Established in the 14th century and was also served as a sanctuary to Vasco da Gama during 1498. The popular Vasco da Gama pillar and church was erected by the Portuguese explorer and is testimony to the fact of the friendship of the local people of Malindi with him.",
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
    img: Img1,
    title: "Beach",
    location: "AFRICA",
    description: "Malindi is a popular tourist attraction destination .This wonderful coastal destination is located 120 km north east of the town of Mombasa with so much exciting things to do. Starting from the historical ruins to the National Parks.Established in the 14th century and was also served as a sanctuary to Vasco da Gama during 1498. The popular Vasco da Gama pillar and church was erected by the Portuguese explorer and is testimony to the fact of the friendship of the local people of Malindi with him.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Masai mara",
    location: "AFRICA",
    description:
      "Boasting exceptional year round wildlife, the Masai Mara is a must visit for anyone on safari in Kenya for the first time. A Masai Mara holiday rarely disappoints, this is especially the case from July to October during the Great Wildebeest Migration. Well-managed examples of sustainable tourism have developed as conservancies around the Masai Mara Game Reserve, these areas are carefully controlled areas of land, managed by the high-end safari lodges who lease them from the local Masai.",
    price: 6700,
    type: "Game Drive",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "ASIA",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },
  
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Hot Deals & Great Offers
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;

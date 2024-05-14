import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          Ridcruisers Tour and Travel is more than just a travel agency - we are 
          passionate storytellers, dedicated to creating unforgettable journeys for 
          our clients. With a focus on all aspects related to tour and travel, 
          we offer personalized experiences that cater to every traveler's 
          unique preferences. Our team of experts is committed to curating authentic
           adventures that immerse you in the heart of each destination, ensuring that
            every moment is filled with discovery and excitement.
          </p>
          <br />
          <p>
          At Ridcruisers Tour and Travel, professionalism is at the core of everything we
           do. We take pride in our attention to detail, from meticulously planning 
           itineraries to providing unparalleled customer service throughout your journey.
            Our goal is not only to guide you through the world's most captivating 
            destinations but also to ensure that every aspect of your experience exceeds 
            expectations. With us, you can expect a seamless travel experience where 
            adventure meets expertise, leaving you with cherished memories for years to 
            come.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;

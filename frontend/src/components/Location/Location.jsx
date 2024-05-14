import React from "react";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>

          <div className="rounded-xl ">
            <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24239.91586965904!2d13.405020943404313!3d52.520477696780904!2m3!1f0!2f0!3f0!3m2!
                 1i1024!
                 2i768!
                 4f13.1!
                 3m3!
                  ! 
                  m2 !
                   ! 
                   s0x47a8516e00000001% 
                    ! 
                    %20s7x147b11c5a9bc31b5%21"
              width="100%"
              height="360"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;

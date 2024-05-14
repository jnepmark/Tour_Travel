import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import BlogsDetails from "./pages/BlogsDetails";
import PlacesRoute from "./pages/PlacesRoute";
import PlacesByDestination from "./components/Blogs/PlacesByDestination";
import BlogsComp from "./components/Blogs/BlogsComp";
import BookingForm from "./components/Places/Bookingform";
import Signup 	from './components/Signup';
import Signin 	from './components/Signin';
// Import AOS and its styles
import AOS from "aos"; 
 import "aos/dist/aos.css";





const App = () => {
  // Initialize AOS on component mount
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

   return (
     <Router>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="blogs" element={<Blogs />} />
           <Route path="blogs/:id" element={<BlogsDetails />} />
           <Route path="/" element={<BlogsComp />} />
           <Route path="/blogs/:destination" element={<PlacesByDestination />} />
           <Route path="best-places" element={<PlacesRoute />} />
           <Route path="/booking-form" element={<BookingForm />} />
           	{/* <Route path ="signup"element={<Signup/>} /> */}
           	{/* <Route path ="signin"element={<Signin/>} /> */}
            	<Route path="about" element={<About />} />
            	<Route path ="*"element={<NoPage/>}/>
         </Route>
       </Routes>
     </Router>
   );
};

export default App;
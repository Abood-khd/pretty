import Explore from "@/components/common/Explore";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import About from "@/components/home/home-v1/About";
import ApartmentType from "@/components/home/home-v1/ApartmentType";
import CallToActions from "@/components/common/CallToActions";
import FeaturedListings from "@/components/home/home-v1/FeatuerdListings";
import Header from "@/components/home/home-v1/Header";
import Partner from "@/components/common/Partner";
import PopularListings from "@/components/home/home-v1/PopularListings";
import PropertiesByCities from "@/components/home/home-v1/PropertiesByCities";
import Testimonial from "@/components/home/home-v1/Testimonial";
import Hero from "@/components/home/home-v1/hero";
import Image from "next/image";
import Blog from "@/components/common/Blog";
import Link from "next/link";
import PopulerProperty from "@/components/home/home-v1/PopulerProperty";
import Services from "@/components/core/Services";
import AboutUs from "@/components/core/AboutUs";
import WorkWithUs from "@/components/core/WorkWithUs";
import OurClients from "@/components/core/OurClients";
import Specialities from "@/components/core/Specialities";
import Trending from "@/components/core/Trending";

export const metadata = {
  title: "Home v1 || Homez - Real Estate NextJS Template",
};

const Home_V1 = () => {
  return (
    <>
      <section className="home-banner-style1 p0">
        <div className="home-style1">
          <div className="container">
            <div className="row">
              <div className="col-xl-11 mx-auto">
                <Hero />
              </div>
            </div>
          </div>
          {/* End .container */}

     
        </div>
      </section>
      {/* End Home Banner Style V1 */}

 <Trending/>

      <Services/>
<Specialities/>
  <WorkWithUs/>  
     <AboutUs />
    <OurClients />
   
     
     

    </>
  );
};

export default Home_V1;

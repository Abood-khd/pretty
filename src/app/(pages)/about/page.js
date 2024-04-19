import AboutUs from "@/components/core/AboutUs";
import AboutUsHero from "@/components/pages/about/HeroAboutUs";
import Link from "next/link";

export const metadata = {
  title: "About  || Homez - Real Estate NextJS Template",
};

const About = () => {
  return (
    <>
       <section className="home-services-style1 p0">
        <div className="home-style1">
          <div className="container about-container ">
            <div className="row">
              
                <AboutUsHero   />
            
            </div>
          </div>
          </div>
          </section>
          <AboutUs/>
    
    </>
  );
};

export default About;

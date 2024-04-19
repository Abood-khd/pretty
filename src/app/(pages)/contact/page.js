
import FAQ from "@/components/pages/contact/faqs";
import HeroServices from "@/components/pages/services/hero";
import VipServices from "@/components/pages/services/vip";

export const metadata = {
  title: "Contact  || Homez - Real Estate NextJS Template",
};

const Contact = () => {
  return (
<>
<section className="home-services-style1 p0">
        <div className="home-style1">
          <div className="container">
            <div className="row">
              
                <HeroServices title='Contact Us' subtitle='.Experience a VIP welcome at Heathrow Airport with our Very Important Traveler service.'  />
            
            </div>
          </div>
          </div>
          </section>
          <FAQ/>
</>
  );
};

export default Contact;

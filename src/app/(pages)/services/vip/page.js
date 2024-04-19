


import MobileMenu from "@/components/common/mobile-menu";
import Services from "@/components/core/Services";
import HeroServices from "@/components/pages/services/hero";
import VipServices from "@/components/pages/services/vip";


export const metadata = {
  title: "Pricing  || Homez - Real Estate NextJS Template",
};

const PricingPlan = () => {
  return (
    <>
    <section className="home-services-style1 p0">
        <div className="home-style1">
          <div className="container">
            <div className="row">
              
                <HeroServices title='VIP Service' subtitle='.Experience a VIP welcome at Heathrow Airport with our Very Important Traveler service.'  />
              
            </div>
          </div>
          </div>
          </section>
          <VipServices/>
    </>
  );
};

export default PricingPlan;
 
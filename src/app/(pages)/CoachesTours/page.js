


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
              
                <HeroServices title='Coaches Tours' subtitle='.Experience a VIP welcome at Heathrow Airport with our Very Important Traveler service.' content='Elevate your airport experience with our VIP services, From arrival to departure, we provide premium assistance and comfort at British airports,us' />
            
            </div>
          </div>
          </div>
          </section>
          <VipServices/>
    </>
  );
};

export default PricingPlan;
 
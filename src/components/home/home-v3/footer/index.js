import Image from "next/image";
import Link from "next/link";
import ContactMeta from "./ContactMeta";
import AppWidget from "./AppWidget";
import Social from "./Social";
import Subscribe from "./Subscribe";
import MenuWidget from "./MenuWidget";
import Copyright from "./Copyright";
import CardForm from "./CardForm";
import { Rectangle124 } from "./ImageFooter";

const Footer = () => {
  return (
    <>
      <Rectangle124 />

      <div className="section-footer" >
        <div className="d-flex justify-content-center align-items-center  ">
        <div className=" pl60 pr60 ">

<div className="row justify-content-center   sectionConnect  ">
  <div className="col-lg-4">
    <div className="row justify-content-center">
      <h3 className="font-title  text-start ">Pretty tours</h3>
      <p className="font-content text-start">We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut </p>

    </div>
  </div>
  <div className="col-lg-4">
    <div className="row justify-content-center">
      <h3 className="text-center font-title">Connect with us</h3>
      <p className="text-center">+00 000 000 00</p>
      <p className="text-center">info@prettytours.com</p>

      <div className="footer-icon d-flex gap-2 justify-content-center">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-whatsapp"></i>
        <i class="fa-brands fa-whatsapp"></i>
        <i class="fa-brands fa-whatsapp"></i>
      </div>

    </div>
  </div>
  {/* End .col */}

  <div className="col-md-6 col-lg-4 ">
    <div className="footer-widget mb-4 mb-lg-5">

      <AppWidget />



    </div>
  </div>
  {/* End .col */}

</div>
{/* End .row */}

</div>

        </div>

        {/* End .row */}
        <div style={{ position: 'relative', bottom: '140px', left: '75%' }} >
          <img src="/images/Footer img.png" alt="image" height={300} width={350} />

        </div>

        <div style={{ position: 'relative', bottom: '50px' }} >

        <Copyright />
        </div>
     

        {/* End .container */}

      </div>

      {/* End copyright */}

    </>
  );
};

export default Footer;

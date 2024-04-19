import Image from "next/image";
import Link from "next/link";
import ContactMeta from "./ContactMeta";
import AppWidget from "./AppWidget";
import Social from "./Social";
import Subscribe from "./Subscribe";
import MenuWidget from "./MenuWidget";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>


    <div className="section-footer">

  <div className="d-flex justify-content-center align-items-center gap-3 section-footer">
      <div className="Lets-connect-card">
      <div className="Lets-connect-content">
        <h3>Let’s connect</h3>

        <ul>
          <li>Phone  +385 91 322 8444</li>
          <li>email  prospekt@prospekt.hr</li>
          <li>Address  Prospekt LtdDrazice  138, 51 000  <br/>Rijeka Croatia</li>
        </ul>

        <div className="Lets-connect-icon">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-whatsapp"></i>
        </div>

      </div>
      </div>

      <div className="form-card">
        <div className="form=content text-center ">

          <form className="container form-container">
          <h3 className="font-title form-title ">We’d love to hear from you</h3>
          <div className="row justify-content-center align-items-center">
          <div className="d-flex justify-content-between align-items-center w-100 gap-2  my-3">

      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"/>

        <input type="email" class="form-control " id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Email"/>

          </div>
          <div>


        <input type="email" class="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Message"/>
        <p className="text-start font-content">I accept the Terms and conditions</p>

<div className="text-start ">

        <button type="submit" className="btn-sendd  mt-3">send</button>
</div>
          </div>
</div>


</form>


        </div>  
      </div>

  </div>
    <div className="d-flex justify-content-between align-items-start  footer-link">

<div className="col-one text-start">
<h3 className="font-content ">Pretty tours</h3>
<p className="font-content">We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut </p>


<div className="d-flex justify-content-start align-items-end  gap-3 text-start terms-footer">
  <Link href="/terms">
    <span>Terms & Conditions</span>
    </Link>
    <span>Privacy Notice and Cookies</span>
    <span>Work with us</span>
</div>

</div>
<div className="col-two">

    <h3>Connect with us</h3>
    <p>+00 000 000 00</p>
    <p>info@prettytours.com</p>

    <div className="footer-icon d-flex gap-2">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-whatsapp"></i>
        <i class="fa-brands fa-whatsapp"></i>
        <i class="fa-brands fa-whatsapp"></i>
        </div>

</div>
<div className="col-three">
<AppWidget/>
<div className="d-flex justify-content-start align-items-end  gap-3 text-start terms-footer">
    <p>Pretty tours. | © All rights reserved 2024</p>
</div>
</div>
    </div>
  </div>




    </>
  );
};

export default Footer;

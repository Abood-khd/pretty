import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Services = ({title,subtitle})=> {
  // const router = useRouter();
  return(

        
      <section  className="our-services">
      <div className="container text-center pt-3 ">
        <div
          className="row "
          data-aos="fade-up"
          data-aos-delay="100"
          >
          <h3 className="Title-Section">OUR SERVICES</h3>
          <p className="SubTittle-Section">Fusce blandit magna eget felis dapibus, ac lacinia quam faucibus. Quisque feugiat felis a quam volutpat, non scelerisque nibh scelerisque.</p>
        </div>
          </div>
        <div className="row container-image-our-services">
<div className="col-lg-4 col-md-12 col-xs-12 ">
<Link href="/services/vip" passHref>
  <div className='imageContainer'>
      <img
        priority
        src="/images/OUR SERVICES3.png"
        className='image'
        alt="blog"
      />
      <div className='overlay'>
      </div>
    </div>
   <p className="content-image">UK Tours</p> 
   </Link>
</div>
<div className="col-lg-4 col-md-12 col-xs-12">
  <Link href="/services/vip" passHref>
  <div className='imageContainer'>
  <img
    priority
    src="/images/OUR SERVICES2.png"
    alt="blog"
className='image-services-center'
  />
        <div className='overlay-center'>
      </div>
  </div>
       <p className="content-image">VIP Service</p> 
    
       </Link>
</div>
<div className="col-lg-4 col-md-12 col-xs-12">
<Link href="CoachesTours" passHref>
<div className='imageContainer'>
      <img
        priority
        src="/images/OUR SERVICES.png"
        className='image'
        alt="blog"
      />
      <div className='overlay'>
      
      </div>
      <p className="content-image">Coaches Tours</p> 
    </div>
   
  
</Link>
</div>


</div>




    </section>

    )

}

export default Services;
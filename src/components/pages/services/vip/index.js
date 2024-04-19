import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';

const VipServices = ({title,subtitle})=> {
  // const router = useRouter();
    return(

        
      <section  className="our-services mb-5">
      <div className="container text-center ">
        <div
          className="row"
          data-aos="fade-up"
          data-aos-delay="100"
          >
            <div className='col-lg-12'>

          <h3 className="Title-Section">VIP service for british airports</h3>
          <p className="SubTittle-Section">Fusce blandit magna eget felis dapibus, ac lacinia quam faucibus. Quisque feugiat felis a quam volutpat, non scelerisque nibh scelerisque.</p>
            </div>
        </div>
</div>

        <div className="row  container-image-our-services">
<div className="col-lg-4 col-md-12 col-sm-12">
  <div className='imageContainer'>
      <img
        priority
        src="/images/OUR SERVICES3.png"
        className='image'
        alt="blog"
      />
      <div className='overlay'>
        <h3 className='title-card'>Personalized Meet and Greet</h3>
      </div>
    </div>
   
</div>
<div className="col-lg-4 col-md-12 col-sm-12">
<div className='imageContainer'>
      <img
        priority
        src="/images/OUR SERVICES3.png"
        className='image'
        alt="blog"
      />
      <div className='overlay'>
        <h3 className='title-card'>Personalized Meet and Greet</h3>
      </div>
    </div>
</div>
<div className="col-lg-4 col-md-12 col-sm-12">
<div className='imageContainer'>
      <img
        priority
        src="/images/OUR SERVICES3.png"
        className='image '
        alt="blog"
      />
      <div className='overlay'>
        <h3 className='title-card'>Personalized Meet and Greet</h3>
      </div>
    </div>
</div>


</div>




    </section>

    )

}

export default VipServices;
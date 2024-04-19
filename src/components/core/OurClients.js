import React from 'react';
import Image from "next/image";

const OurClients = ()=> {

    return(

       

        <div className="img-Our-Clients">
              
           
                  
             
    <div className='client-position'>
    <h2 className="Client-Section" >See What Our Clients Say About Us</h2>
        
    </div>
          <div className="container" style={{height:700}}  >
         <div>
              <div id="carouselExampleDark" class="position carousel carousel-dark slide" data-bs-ride="carousel" >
             
                  <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                          class="active  mt-5" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                          aria-label="Slide 2" class=" mt-5"></button>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                          aria-label="Slide 3" class=" mt-5"></button>
                  </div>
                  <div class="carousel-inner">
                  <div class="carousel-indicatorss">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
          class="active  arrow-left" aria-current="true" aria-label="Slide 1">
          <i className="fas fa-arrow-left  "></i> 
      </button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
          aria-label="Slide 2" class="arrow-right">
          <i class="fas fa-arrow-right"></i> 
      </button>
  </div>
                      <div class="carousel-item active" data-bs-interval="10000">
                          <div class="client-item  text-center">
                              <div className="">
                                <img src="/images/apple-touch-icon-114x114.png" className=" rounded-circle shadow-lg img-thumbnail mb-3"
                                      alt=""/>
                                      </div>
                              <p class="font-content mx-auto">Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.</p>
                              <h3 className="font-content"> Christine Beckam - Designer</h3>
                          </div>
                      </div>
                      <div class="carousel-item " data-bs-interval="10000">
                          <div class="client-item  text-center">
                              <div className="">
                                <img src="/images/apple-touch-icon-114x114.png" className=" rounded-circle shadow-lg img-thumbnail mb-3"
                                      alt=""/>
                                      </div>
                              <p class="font-content mx-auto">Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.</p>
                              <h3 className="font-content"> Christine Beckam - Designer</h3>
                          </div>
                      </div>
                      </div>
                   
                 
                  </div>
  
              </div>
          </div>
      </div>
    
  
  


    )

}

export default OurClients;
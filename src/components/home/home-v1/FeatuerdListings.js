"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const FeaturedListings = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
            <div style={{ position: 'relative',bottom:"50px" }}>
            <ul className='dots' ><span className='dotss'>{dots}</span> </ul>
            
                        </div>
      </div>
    )
  };

  return (
    <>
    <div className='Our-Trending-container '>
    <div className='row  Our-Trending-row'>

  
          <div className="col-lg-4 col-md-6 col-xs-12" data-aos="fade-up" data-aos-delay="200">
    <Card  style={{ overflow:"hidden",borderRadius:"8px 8px 30px 8px",position:"relative",maxWidth:"370px" ,top:'4%'}}>
      <Slider  {...settings}>
        <div>
          <Card.Img style={{ height: "356px", borderRadius: "0px 0px 40px 0px" }} src="/images/image-ban.jpg" alt="slide1" />
        </div>
        <div>
          <Card.Img style={{ height: "356px", borderRadius: "0px 0px 40px 0px" }} src="/images/home/home-1.jpg" alt="slide2" />
        </div>
        <div>
          <Card.Img style={{ height: "356px", borderRadius: "0px 0px 40px 0px" }} src="/images/image-ban.jpg" alt="slide3" />
        </div>

      </Slider>
      <div style={{position:"absolute",left:"85%",top:"30px",color:"#fff"}} >
      <i style={{opacity:"0.8"}} class="fa-light fa-heart fa-xl pointer"></i>
       </div>
      <div className='priceCard' style={{position:"absolute",height:"40px",width:"67px",left:"30px",top:"30px"}} >
     <span className='font-content' style={{color:"#181d24",padding:"12px"}}>500 $</span>
       </div>
      <Card.Body>
        <div style={{display:"flex",alignItems:"center",gap:"14px"}}>

        <span className='font-content' style={{fontWeight:"700",fontSize:"15px"}}>London </span>
        <i  class="fa-solid fa-circle" style={{fontSize:"8px",color:"#5b656f"}}></i>
        <span className='font-content' style={{fontWeight:"400",fontSize:"15px",}}>Mountains</span>
        </div>
        <Card.Title className='font-title mt-2' style={{fontSize:"36px",fontWeight:"700"}}>Tour Name</Card.Title>
 

      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>

      <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
      <i class="fa-light fa-user-group" style={{color:"#918675"}}></i>
      <span className='font-content' style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}>8 </span>
      <span className='font-content' style={{fontWeight:"700",fontSize:"16px",color:"#181D24"}}> guests</span>
      </div>

      <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
      <img src='/images/calendar.svg' width={24} height={24}  alt='calendar'/>
      <span className='font-content' style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}>12, September 2024</span>
    
      </div>



      </div>


        {/* <i class="fa-solid fa-heart-circle-check fa-beat" style={{color: "#d91212"}}></i> */}
        
      </Card.Body>
    </Card>
    </div>
    <div className="col-lg-4 col-md-6 col-xs-12" data-aos="fade-up" data-aos-delay="200">
    <Card className='Our-Trending-card' style={{ overflow:"hidden",borderRadius:"8px 8px 30px 8px",position:"relative",maxWidth:"370px",top:'4%'   }}>
      <Slider  {...settings}>
        <div>
          <Card.Img style={{ height: "356px", borderRadius: "0px 0px 40px 0px" }} src="/images/image-ban.jpg" alt="slide1" />
        </div>
        <div>
          <Card.Img style={{ height: "356px", borderRadius: "0px 0px 40px 0px" }} src="/images/home/home-1.jpg" alt="slide2" />
        </div>
        <div>
          <Card.Img style={{ height: "356px", borderRadius: "0px 0px 40px 0px" }} src="/images/image-ban.jpg" alt="slide3" />
        </div>

      </Slider>
      <div style={{position:"absolute",left:"85%",top:"30px",color:"#fff"}} >
      <i style={{opacity:"0.8"}} class="fa-light fa-heart fa-xl pointer"></i>
       </div>
      <div className='priceCard' style={{position:"absolute",height:"40px",width:"67px",left:"30px",top:"30px",}} >
     <span className='font-content' style={{color:"#181d24",margin:"14px"}}>500 $</span>
       </div>
      <Card.Body>
        <div style={{display:"flex",alignItems:"center",gap:"14px"}}>

        <span className='font-content' style={{fontWeight:"700",fontSize:"15px"}}>London </span>
        <i  class="fa-solid fa-circle" style={{fontSize:"8px",color:"#5b656f"}}></i>
        <span className='font-content' style={{fontWeight:"400",fontSize:"15px",}}>Mountains</span>
        </div>
        <Card.Title className='font-title mt-2' style={{fontSize:"36px",fontWeight:"700"}}>Tour Name</Card.Title>
 

      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>

      <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
      <i class="fa-light fa-user-group" style={{color:"#918675"}}></i>
      <span className='font-content' style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}>8 </span>
      <span className='font-content' style={{fontWeight:"700",fontSize:"16px",color:"#181D24"}}> guests</span>
      </div>

      <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
      <img src='/images/calendar.svg'  alt=''/>
      <span className='font-content' style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}>12, September 2024</span>
    
      </div>



      </div>


        {/* <i class="fa-solid fa-heart-circle-check fa-beat" style={{color: "#d91212"}}></i> */}
        
      </Card.Body>
    </Card>
    </div>
    <div className="col-lg-4 col-md-6 col-xs-12" data-aos="fade-up" data-aos-delay="200">
    <Card className='Our-Trending-card' style={{ overflow:"hidden",borderRadius:"8px 8px 30px 8px",position:"relative",maxWidth:"370px",top:'4%'   }}>
      <Slider  {...settings}>
        <div>
          <Card.Img style={{ height: "356px", borderRadius: "0px 0px 40px 0px" }} src="/images/image-ban.jpg" alt="slide1" />
        </div>
        <div>
          <Card.Img style={{ height: "356px", borderRadius: "0px 0px 40px 0px" }} src="/images/home/home-1.jpg" alt="slide2" />
        </div>
        <div>
          <Card.Img style={{ height: "356px", borderRadius: "0px 0px 40px 0px" }} src="/images/image-ban.jpg" alt="slide3" />
        </div>

      </Slider>
      <div style={{position:"absolute",left:"85%",top:"30px",color:"#fff"}} >
      <i style={{opacity:"0.8"}} class="fa-light fa-heart fa-xl pointer"></i>
       </div>
      <div className='priceCard' style={{position:"absolute",height:"40px",width:"67px",left:"30px",top:"30px",}} >
     <span className='font-content' style={{color:"#181d24",margin:"14px"}}>500 $</span>
       </div>
      <Card.Body>
        <div style={{display:"flex",alignItems:"center",gap:"14px"}}>

        <span className='font-content' style={{fontWeight:"700",fontSize:"15px"}}>London </span>
        <i  class="fa-solid fa-circle" style={{fontSize:"8px",color:"#5b656f"}}></i>
        <span className='font-content' style={{fontWeight:"400",fontSize:"15px",}}>Mountains</span>
        </div>
        <Card.Title className='font-title mt-2' style={{fontSize:"36px",fontWeight:"700"}}>Tour Name</Card.Title>
 

      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>

      <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
      <i class="fa-light fa-user-group" style={{color:"#918675"}}></i>
      <span className='font-content' style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}>8 </span>
      <span className='font-content' style={{fontWeight:"700",fontSize:"16px",color:"#181D24"}}> guests</span>
      </div>

      <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
      <img src='/images/calendar.svg'  alt=''/>
      <span className='font-content' style={{fontWeight:"500",fontSize:"16px",color:"#181D24"}}>12, September 2024</span>
    
      </div>



      </div>


        {/* <i class="fa-solid fa-heart-circle-check fa-beat" style={{color: "#d91212"}}></i> */}
        
      </Card.Body>
    </Card>
    </div>
 
    </div>
    </div>

  </>
  );
};

export default FeaturedListings;

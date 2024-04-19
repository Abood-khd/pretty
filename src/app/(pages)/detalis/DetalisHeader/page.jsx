import React from 'react'
import styles from './DetalisHeader.module.css'

import '../detalis.css'

export default function DetalisHeader() {
  return (
    <>
            <div className="IMG">

          <div className="img-container  ">
    <div  className={` container  ${styles.container}`}>
    <div className="row justify-content-center align-items-center  ">
    <div className="row tour-name  justify-content-between align-items-center ml-2">
            <div className='col-md-6 tour-name'>
            <h1 className='font-title' style={{fontSize:"52px",fontWeight:"700",color:"#fff"}}>Tour Name</h1>

            </div>
            <div className=' col-md-6 text-end d-inline'>
            <span className='font-content tour-name' style={{fontSize:"16px",fontWeight:"600",color:"#fff"}}>Save <i class="fa-thin fa-heart" style={{color:"#fff"}}></i></span>
            <span className='ml-3 font-content tour-name'style={{fontSize:"16px",fontWeight:"600",color:"#fff"}}>Share <i class="fa-thin fa-arrow-up-from-bracket" style={{color:"#fff"}}></i></span>

            </div>
        </div>
      <div className="col-lg-7 col-md-12 mb-3">
        
        <img
          src='/images/main-img.jpg'
          // style={{ height: "570px", Width: "693px" }}
          className={ `${styles.mainImg}  `}
          alt="Main Image"
        />
      </div>
      <div className="col-lg-5 mb-3 col-md-12 gap-1 d-flex flex-column justify-content-center ">
        <div className="row ml-4 ">
          <div className="col-md-6">
            <img
              src='/images/image1.jpg'
              style={{ height: "281.3px", width: "210.3px" }}
              className={`${styles.ItemImg} `}
              alt="Image 1"
            />
          </div>
          <div className="col-md-6">
            <img
              src='/images/image2.jpg'
              style={{ height: "281.3px", width: "210.3px" }}
              className={`${styles.ItemImg} `}
              alt="Image 2"
            />
          </div>
        </div>
        <div className="row ml-4 ">
          <div className="col-md-6">
            <img
              src='/images/image3.jpg'
              style={{ height: "281.3px", width: "210.3px" }}
              className={`${styles.ItemImg} `}
              alt="Image 3"
            />
          </div>
          <div className="col-md-6">
            <img
              src='/images/image4.jpg'
              style={{ height: "281.3px", width: "210.3px" }}
              className={`${styles.ItemImg} `}
              alt="Image 4"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>


<div className="IMG">

<div className="img-container  ">
<div className={` ${styles.containerMobile}`}>
<div className="row justify-content-center align-items-center  ">

<div className="col-lg-7 col-md-12 mb-3">

<img
src='/images/main-img.jpg'
style={{ height: "397px", maxWidth: "693px" }}
className={ `${styles.mainImg} `}
alt="Main Image"
/>
</div>

</div>
</div>
</div>
</div>

  </>

  )
}

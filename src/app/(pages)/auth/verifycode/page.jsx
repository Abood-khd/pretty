"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from './VerifyCode.module.css'

const VerifyCode = () => {

  const [VerifyCode, setVerifyCode] = useState('');
 
  const handleSubmit = async (event) => {
    event.preventDefault();
                

  };




  return (
    <>
      <section className={ `${styles.LoginSection}`}>
       
       <div className="container">


 <div className="row justify-content-center align-items-center" data-aos="fade-left" data-aos-delay="300">
         
       <Link href="/auth/login" style={{textDecoration: "none", color: "#112211",position:"relative",top:"32px"}}>
  <i className="fa fa-arrow-left fade-Up" aria-hidden="true"></i> Back to login
</Link>        
           <div className="col-lg-6 mt-5">
             <div className="log-reg-form signup-modal form-style1   p30-sm  bdrs12">
               <div className="text-start mb40">
              
                 <h2 className={`font-title ${styles.LogInTitle}`}>Verify code</h2>
                 <p className={` ${styles.LogDesc}`}>An authentication code has been sent to your email.</p>
               </div>
               <Form  onSubmit={handleSubmit}>
               <FloatingLabel controlId="floatingVerifyCode" label="Enter Code">
          <Form.Control 
            type="password" 
            placeholder="Enter Code" 
            value={VerifyCode} 
            onChange={(e) => setVerifyCode(e.target.value)} 
          />
        </FloatingLabel>
        <div className="d-grid  mt-4">
          <p className={`${styles.receive} ml-1`}>Didn’t receive a code? Resend</p>
    <Link className={` ${styles.LogBtn}`} style={{textDecoration:"none",color:"#fff",textAlign:"center"}} href="/auth/setpassword">
  <p style={{color:"#fff"}}  >
    
    Verify 
  </p>
    </Link>
</div>
    
      </Form>
             </div>
           </div>
           <div className="col-lg-6">
<img src="/images/login-img.png" width={618} height={816} className={`${styles.ImgAuth} img-fluid img-auth`}/>
           </div>
         </div>
       </div>
     </section>
  
    </>
  );
};

export default VerifyCode;



"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from './SetPassword.module.css'

const SetPassword = () => {

  const [CreatePassowrd, SetCreatePassowrd] = useState('');
 
  const handleSubmit = async (event) => {
    event.preventDefault();
                

  };




  return (
    <>
      <section className={ `${styles.LoginSection}`}>
       
       <div className="container">

      

 <div className="row justify-content-center align-items-center" data-aos="fade-left" data-aos-delay="300">
         
           <div className="col-lg-6 mt-5">
             <div className="log-reg-form signup-modal form-style1   p30-sm  bdrs12">
               <div className="text-start mb40">
              
                 <h2 className={`font-title ${styles.LogInTitle}`}>Set a password</h2>
                 <p className={` ${styles.LogDesc}`}>Your previous password has been reseted. Please set a new password for your account.</p>
               </div>
               <Form  onSubmit={handleSubmit}>
               <FloatingLabel controlId="floatingCreatePassword" label="Create Password">
          <Form.Control 
            type="password" 
            placeholder="Create Password" 
            value={CreatePassowrd} 
            onChange={(e) => SetCreatePassowrd(e.target.value)} 
          />
        </FloatingLabel>
               <FloatingLabel controlId="floatingReenterPassword" label="Re-enter Password">
          <Form.Control 
            type="password" 
            placeholder="Re-enter Password" 
            value={CreatePassowrd} 
            onChange={(e) => SetCreatePassowrd(e.target.value)} 
            style={{marginTop:"12px"}}
          />
        </FloatingLabel>
        <div className="d-grid  mt-4">
    <Link className={` ${styles.LogBtn}`} style={{textDecoration:"none",color:"#fff",textAlign:"center"}} href="/auth/verifycode">
    <p style={{color:"#fff"}}  >
    
    Set password 
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

export default SetPassword;



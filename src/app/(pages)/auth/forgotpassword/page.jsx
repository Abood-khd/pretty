"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from './ForgotPassword.module.css'
import '../login.css';

const ForgotPassword = () => {

  const [ForgotPassword, setForgotPassword] = useState('');
 
  const handleSubmit = async (event) => {
    event.preventDefault();
                

  };




  return (
    <>
      <section className={ `${styles.LoginSection}`}>
       
       <div className="container">


 <div className="row justify-content-center align-items-center" data-aos="fade-left" data-aos-delay="300">
         
       <Link className="" href="/auth/login" style={{textDecoration: "none", color: "#112211",position:"relative",top:"32px"}}>
  <i className="fa fa-arrow-left fade-Up" aria-hidden="true"></i> Back to login
</Link>        
           <div className="col-lg-6 mt-5">
             <div className="log-reg-form signup-modal form-style1   p30-sm  bdrs12">
               <div className="text-start mb40">
              
                 <h2 className={`font-title ${styles.LogInTitle}`}>Forgot your password?</h2>
                 <p className={` ${styles.LogDesc}`}>Don’t worry, happens to all of us. Enter your email below to recover your password</p>
               </div>
               <Form  onSubmit={handleSubmit}>
               <FloatingLabel controlId="floatingForgotPassword" label="Email">
          <Form.Control 
            type="email" 
            placeholder="Email" 
            value={ForgotPassword} 
            onChange={(e) => setForgotPassword(e.target.value)} 

          />
        </FloatingLabel>
        <div className="d-grid  mt-4">
    <Link className={` ${styles.LogBtn}`} style={{textDecoration:"none",color:"#fff",textAlign:"center"}} href="/auth/verifycode">
  <p style={{color:"#fff"}} >
    
  Submit 
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

export default ForgotPassword;



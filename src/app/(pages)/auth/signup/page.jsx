"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from './signup.module.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [LastName, setLastName] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [Number, setNumber] = useState('');
  const [Agree, setAgree] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
   
  };


  return (
    <>
      <section className={ `${styles.LoginSection}`}>
       
       <div className="container">
        
         <div className="row" data-aos="fade-left" data-aos-delay="300">
         <div className="col-lg-6">
<img src="/images/login-img.png" width={618} height={816} className="img-fluid img-auth"/>
           </div>
           <div className="col-lg-6 mt-5">
             <div className="log-reg-form signup-modal form-style1  mt-3 p30-sm  bdrs12">
               <div className="text-start mb40">
              
                 <h2 className={`font-title ${styles.LogInTitle}`}>Sign up</h2>
                 <p className={` ${styles.LogDesc}`}>Let’s get you all st up so you can access your personal account.</p>
               </div>
               <Form onSubmit={handleSubmit}>
               <Row >
        <Col>
          <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
          <Form.Control 
            type="text" 
            placeholder="First Name" 
            value={FirstName} 
            onChange={(e) => setFirstName(e.target.value)} 
          />
        </FloatingLabel>

        </Col>
        <Col>
        <FloatingLabel controlId="floatingLastName" label="Last Name">
          <Form.Control 
            type="text" 
            placeholder="Last Name" 
            value={LastName} 
            onChange={(e) => setLastName(e.target.value)} 

          />
        </FloatingLabel>
        </Col>
      </Row>
               <Row >
        <Col>
          <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control 
            type="email" 
            placeholder="name@example.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </FloatingLabel>

        </Col>
        <Col>
        <FloatingLabel controlId="floatingPhoneNumber" label="Phone Number">
          <Form.Control 
            type="number" 
            placeholder="Phone Number" 
            value={Number} 
            onChange={(e) => setNumber(e.target.value)} 

          />
        </FloatingLabel>
        </Col>
      </Row>
      <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 

          />
        </FloatingLabel>

      <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password">
          <Form.Control 
            type="password" 
            placeholder="Confirm Password" 
            value={ConfirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            style={{marginTop:"12px"}}
          />
        </FloatingLabel>

      


        {/* Remember Me Checkbox */}
        <div className="mt-3 checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
          <label className="custom_checkbox fz14 ff-heading">
          I agree to all the Terms and Privacy Policies
            <input 
              type="checkbox" 
              checked={Agree} 
              onChange={(e) => setAgree(e.target.checked)} 
            />
            <span className="checkmark" />
          </label>
      
        </div>
        <div className="d-grid  mt-4">
  <button   className={` ${styles.LogBtn}`} type="submit" >
    <a className={` ${styles.LogBtn}`}  href="/auth/payment">

    Create account 
    </a>
  </button>
</div>
        <p className="dark-color text-center mb0 mt10">
        Already have an account ? {" "}
  <Link className="dark-color fw600" href="/auth/login">
  Login
  </Link>
</p>
      </Form>
             </div>
           </div>
          
         </div>
       </div>
     </section>
  
    </>
  );
};

export default SignUp;


{/* <form className="form-style1">
<div className="mb25">
  <label className="form-label fw600 dark-color">Email</label>
  <input
    type="email"
    className="form-control"
    placeholder="Enter Email"
    required
  />
</div>

<div className="mb15">
  <label className="form-label fw600 dark-color">Password</label>
  <input
    type="text"
    className="form-control"
    placeholder="Enter Password"
    required
  />
</div>

<div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
  <label className="custom_checkbox fz14 ff-heading">
    Remember me
    <input type="checkbox" defaultChecked="checked" />
    <span className="checkmark" />
  </label>
  <a className="fz14 ff-heading" href="#">
  Forgot Password
  </a>
</div>

<div className="d-grid mb20">
  <button className="ud-btn btn-thm" type="submit">
    Sign in <i className="fal fa-arrow-right-long" />
  </button>
</div>

<p className="dark-color text-center mb0 mt10">
Don’t have an account ? {" "}
  <Link className="dark-color fw600" href="/register">
  Sign up
  </Link>
</p>
</form> */}
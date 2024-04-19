"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from './login.module.css';
import '../login.css';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
                
    try {
      if (rememberMe) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }

    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);
  return (
    <>
      <section className={ `${styles.LoginSection}`}>
       
        <div className="container">
          <div className="row" data-aos="fade-left" data-aos-delay="300">
            <div className="col-lg-6 mt-5">
              <div className="log-reg-form signup-modal form-style1  p50 p30-sm  bdrs12">
                <div className="text-start mb40">
               
                  <h2 className={`font-title ${styles.LogInTitle}`}>Login</h2>
                  <p className={` ${styles.LogDesc}`}>Login to access your Golobe account</p>
                </div>
                <Form onSubmit={handleSubmit}>
        {/* Email */}
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control 
            type="email" 
            placeholder="name@example.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </FloatingLabel>

        {/* Password */}
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </FloatingLabel>

        {/* Remember Me Checkbox */}
        <div className="mt-3 checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
          <label className="custom_checkbox fz14 ff-heading">
            Remember me
            <input 
              type="checkbox" 
              checked={rememberMe} 
              onChange={(e) => setRememberMe(e.target.checked)} 
            />
            <span className="checkmark" />
          </label>
          <a style={{textDecoration:"none",color:"#112211"}} className="fz14 ff-heading mr-4" href="/auth/forgotpassword">
  Forgot Password
  </a>
        </div>
        <div className="d-grid  mt-4">
  <button className={` ${styles.LogBtn}`} type="submit">
  Login 
  </button>
</div>
        <p className="dark-color text-center mb0 mt10">
Don’t have an account ? {" "}
  <Link className="dark-color fw600" href="signup">
  Sign up
  </Link>
</p>
      </Form>
              </div>
            </div>
            <div className="col-lg-6">
<img src="/images/login-img.png" width={618} height={816} className={`img-auth img-fluid`}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

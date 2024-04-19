"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from './Payment.module.css'
// import SignIn from "../login/SignIn";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Payment = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [LastName, setLastName] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [NameCard, setNameCard] = useState('');
  const [SecurelyInformation, setSecurelyInformation] = useState(false);
  const [visaNumber, setVisaNumber] = useState('');
  const [CVC, setCVC] = useState('');
  const [ExpDate, setExpDate] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  const handleVisaNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    const formattedInput = input.replace(/(.{4})/g, '$1 '); 
    setVisaNumber(formattedInput);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    
   
  };


  return (
    <>
      <section className={ `${styles.LoginSection}`}>
       
       <div className="container">
        
         <div className="row" data-aos="fade-left" data-aos-delay="300">
         <div className="col-lg-6">
<img src="/images/login-img.png" width={618} height={816} className={`${styles.ImgAuth} img-fluid img-auth`}/>
           </div>
           <div className="col-lg-6 mt-5">
             <div className="log-reg-form signup-modal form-style1   p30-sm  bdrs12">
               <div className="text-start mb40">
              
             <Link href="/auth/login" style={{textDecoration: "none", color: "#112211"}}>
  <i className="fa fa-arrow-left fade-Up mb-4" aria-hidden="true"></i> Back to login
</Link>     
                 <h2 className={`font-title ${styles.LogInTitle}`}>Add a payment method</h2>
                 <p className={` ${styles.LogDesc}`}>Let’s get you all st up so you can access your personal account.</p>
               </div>
               <Form  onSubmit={handleSubmit}>
               <FloatingLabel controlId="floatingVisaNumber" label="Visa Card Number" className="mb-3">
      <Form.Control 
        type="text" 
        placeholder="Enter Visa Card Number" 
        value={visaNumber} 
        onChange={handleVisaNumberChange} 
        maxLength={19} 
        style={{ backgroundImage: `url(/images/Visa.svg)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'calc(100% - 10px) calc(50% + 2px)', backgroundSize: '24px 24px', paddingRight: '30px' }}

      />

    </FloatingLabel>
               <Row >
        <Col>
          <FloatingLabel controlId="floatingInputExpDate" label="Exp. Date" className="mb-3">
          <Form.Control 
            type="text" 
            placeholder="Exp. Date" 
            value={ExpDate} 
            onChange={(e) => setExpDate(e.target.value)} 
          />
        </FloatingLabel>

        </Col>
        <Col>
        <FloatingLabel controlId="floatingCVC" label="CVC">
          <Form.Control 
            type="text" 
            placeholder="CVC" 
            value={CVC} 
            maxLength={3} 

            onChange={(e) => setCVC(e.target.value)} 

          />
        </FloatingLabel>
        </Col>
      </Row>
      <FloatingLabel controlId="floatingNameCard" label="Name on Card">
          <Form.Control 
            type="text" 
            placeholder="Name on Card" 
            value={NameCard} 
            onChange={(e) => setNameCard(e.target.value)} 

          />
        </FloatingLabel>

      <FloatingLabel  controlId="floatingCountryOrRegion" label="Country or Region">
      <Form.Select 
        value={selectedCountry} 
        onChange={handleCountryChange} 
        style={{marginTop:"12px"}}
      >
        <option value="usa">United States</option>
        <option value="uk">UK</option>
        <option value="france">France</option>
      </Form.Select>
        </FloatingLabel>

      


        <div className="mt-3 checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
          <label className="custom_checkbox fz14 ff-heading">
          Securely save my information for 1-click checkout
            <input 
              type="checkbox" 
              checked={SecurelyInformation} 
              onChange={(e) => setSecurelyInformation(e.target.checked)} 
            />
            <span className="checkmark" />
          </label>
      
        </div>
        <div className="d-grid  mt-2">
  <button className={` ${styles.LogBtn}`} type="submit">
  Add payment method 
  </button>
</div>
        <p className={`${styles.Confirming}`}>
        By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.
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

export default Payment;



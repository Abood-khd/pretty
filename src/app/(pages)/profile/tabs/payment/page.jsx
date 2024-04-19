"use client"


import React, { useState } from 'react'
import styles from './Payment.module.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import SignIn from "../login/SignIn";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {

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
   <Modal
  {...props}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  
>
  <div className={` ${styles.Modal} p-5`}>
    <div className="modal-body">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2 className={`font-title ${styles.LogInTitle}`}>Add a new Card</h2>
      <button type="button" className="btn-close" onClick={props.onHide}></button>
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
               <Row>
        <Col>
          <FloatingLabel controlId="floatingInputExpDate" label="Exp. Date" className="mb-3">
          <Form.Control 
            type="text" 
            placeholder="Exp. Date" 
            value={ExpDate} 
            size='sm'
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
        <p className={`${styles.Confirming} mt-2`}>
        By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.
</p>
      </Form>   
       </div>
 
  </div>
</Modal>

        </>

    );
  }



export default function Payment() {

    const [modalShow, setModalShow] = useState(false);


  return (
    <>
    <div className={` ${styles.PaymentContainer}`}>
        <div className="d-flex  gap-3">

    <div className={` ${styles.PaymentCard}`}>

        <div className="d-flex justify-content-between  text-light">

            <div className="d-flex flex-column">
                <span className={`${styles.pass}`}>**** **** ****</span>
                <span className={`${styles.count}`}>4321</span>
            </div>
            <div className="icon">
               <i class="fa-solid fa-trash-can"></i>
            
            </div>

        </div>

        <div className="d-flex justify-content-between text-light">

            <div className="d-flex flex-column">
                <span className={`${styles.Valid}`}>Valid Thru</span>
                <span className={`${styles.date}`}>02/27</span>
            </div>
            <div className="icon">
               <i class="fa-solid fa-trash-can"></i>
            
            </div>

        </div>
    </div>

    <h5   onClick={() => setModalShow(true)}>
    <div className={` ${styles.PaymentAddCard} `}>
        <div className=" d-flex  justify-content-center align-items-center h-100">
            <div className=" text-center">

            <i class="fa-solid fa-plus"></i>
        <h5 className={` ${styles.TitleAdd} mt-2`}>Add a new card</h5>
            </div>
        </div>
    </div>
      </h5>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

   

        </div>

    </div>
    </>
  )
}

"use client"

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './BookTour.module.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
import { DateRange } from 'react-date-range';

export default function BookTour() {

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  console.log(state);


  return (
    <>
      <div className={`bg-section ${styles.bookTourSection}`}>
        <Container>
          <Row className="align-items-center">
            <Col md={5} className={`text-start ${styles.availabilityContainer}`}>
              <h3 className={`font-title ${styles.availabilityHeading}`}>Availability</h3>
              {/* <img src="/images/datePaker.svg" className={`img-fluid mt-4 ${styles.datePicker}`} alt="" /> */}
              <DateRange
editableDateInputs={false}
  onChange={item => setState([item.selection])}
  moveRangeOnFirstSelection={true}
   className={`${styles.rdrCalendarWrapper}`}
   ranges={state.map(range => ({
    ...range,
    color: '#8998A6' 
  }))}
/>
            </Col>
            <Col md={7} className={`${styles.bookTourContainer}`}>
              <h3 className={`font-title ${styles.bookTourHeading}`}>Book This Tour</h3>
              <div className={`${styles.bookTourBox} mt-4 text-center`}>
                <form className={`d-flex flex-column flex-md-row align-items-center gap-3 w-100 ${styles.bookTourForm}`}>
                  <div className={`w-100 ${styles.formGroup}`}>
                    <Form.Select aria-label="Default select example" className={`w-100 bg-input text-white ${styles.formInput}`}>
                      <option>Guests</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <input
                      type="text"
                      className={`form-control w-100 mt-3 bg-input border-none ${styles.formInput}`}
                      id="exampleInputName"
                      aria-describedby="emailHelp"
                      placeholder="Name"
                    />
                    <input
                      type="number"
                      className={`form-control w-100 mt-4 bg-input ${styles.formInput}`}
                      id="exampleInputPhone"
                      aria-describedby="emailHelp"
                      placeholder="Phone"
                    />
                  </div>
                  <div className={`w-100 ${styles.formGroup}`}>
                    <Form.Select aria-label="Default select example" className={`w-100 bg-input text-white ${styles.formInput}`}>
                      <option>Payment method</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <div>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        className={`w-100 mt-3 bg-input border-none placeholder-white textarea ${styles.formInput} ${styles.textarea}`}
                        id="exampleInputMessage"
                        placeholder="send message"
                      />
                    </div>
                  </div>
                </form>
                <button className={`btn-book font-content mt-4 ${styles.bookButton}`}>Book</button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={`container ${styles.footerAvailability}`}>
          <div className={`d-flex justify-content-between bg-white ${styles.priceContainer}`}>
            <h4 className='font-content'>Price $600</h4>
            <h4 className='font-content'>Total for 2 guests $600</h4>
          </div>
          <h2 className={`font-title mt-4 ${styles.vipServiceHeading}`}>Book VIP Service</h2>
        </div>
      </div>


      
      <div className={`bg-section   ${styles.ForMobile}`}>
      <Container className={``}>
        <Row className={`align-items-center  ${styles.RowAvailability}`}>
          <Col md={5} className={`p-4 text-center ${styles.availabilityContainer}`}>
            <h3 className={`font-title  ${styles.availabilityHeading}`}>Availability</h3>
            <DateRange
editableDateInputs={false}
  onChange={item => setState([item.selection])}
  moveRangeOnFirstSelection={true}
   className={`${styles.rdrCalendarWrapper}`}
   ranges={state.map(range => ({
    ...range,
    color: '#8998A6' 
  }))}
/>
<div className={`${styles.FormDaily} text-start`}>

<p className='font-content'>From €350 / daily</p>
<p className='font-content'>Total for 12 nights €5600</p>
</div>
          </Col>
          <Col md={7} className={`${styles.bookTourContainer}`}>
            <div className={`${styles.bookTourBox}  text-center`}>
            <h3 className={`font-title ${styles.bookTourHeading} ${styles.bookTourHeadingMobile} `}>Book This Tour</h3>
              <form className={`d-flex  flex-column  align-items-center gap-3 w-100 ${styles.bookTourForm}`}>
                <div className={`w-75 ${styles.formGroup}`}>
                  <Form.Select aria-label="Default select example" className={`w-100 bg-input text-white ${styles.formInput}`}>
                    <option>Guests</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <input
                    type="text"
                    className={`form-control w-100 mt-3 bg-input border-none ${styles.formInput}`}
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Send MESSAGE"
                  />
                  <input
                    type="url"
                    className={`form-control w-100 mt-4 bg-input ${styles.formInput}`}
                    id="exampleInputPhone"
                    aria-describedby="emailHelp"
                    placeholder="VISIT WEBSITE"
                  />

                  <a href="/" style={{color:"#181D24",textDecoration:"none"}}>Do not speak the language?No problem.</a>
                  <a href="/" style={{color:"#181D24",textDecoration:"none"}}>Ask us for help</a>
                </div>
                
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    
    </div>
      
    </>
  );
}
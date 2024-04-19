import React from 'react';
import Faq2 from '../faq/Faq2';
import Faq1 from '../faq/Faq1';

export default function FAQ (){

    return(

        <>
         <section className="our-faq pb90 pt-7">
         <div className="container text-center ">
        <div
          className="row "
          data-aos="fade-up"
          data-aos-delay="100"
          >
          <h3 className="Title-Section">OUR SERVICES</h3>
          <p className="SubTittle-Section">Fusce blandit magna eget felis dapibus, ac lacinia quam faucibus. Quisque feugiat felis a quam volutpat, non scelerisque nibh scelerisque.</p>
        </div>
          </div>
        <div className="container mt-5">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="ui-content">
                
                <div className="accordion-style1 faq-page mb-4 mb-lg-5">
                  <Faq1 />
                </div>
              </div>
              
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">

              <div className="ui-content">
                <div className="accordion-style1 faq-page mb-4 mb-lg-5">
                  <Faq2 />
                </div>
              </div>
              {/* End ui-content */}
            </div>
            {/* End .col-lg-12 */}
          </div>
        </div>
      </section>
        </>

    )

}
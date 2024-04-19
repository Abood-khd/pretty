import React from 'react';

export default function Specialities (){

    return(

        <section className="text-center">
        <h3 className="Title-Section"> Our Properties Specialities</h3>
          <div className="container">
        <div class="row  justify-content-around mt-5">
          <div className="col-lg-3 col-md-6 position-relative ">
            <div className="d-flex flex-column align-items-start box-border card-res ">
              <img src="/images/water-waves.svg" className="Properties-Specialities-icon" />
              <h4 className="font-title Properties-Specialities-content mt-4">Guide Tours</h4>
              <p className="font-content Properties-Specialities-link">Have a look
                <img className="ml-2" src="/images/Arrow 1.svg" />
              </p>
            </div>
          </div>
      
          <div className="col-lg-3 col-md-6 ">
            <div className="d-flex flex-column  align-items-start box-border card-res">
              <img src="/images/pawprint 1.svg" className="Properties-Specialities-icon" />
              <h4 className="font-title Properties-Specialities-content mt-4">Religious Tours</h4>
              <p className="font-content Properties-Specialities-link">Pets allowed
                <img className="ml-2" src="/images/Arrow 1.svg" />
              </p>
            </div>
          </div>
      
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column align-items-start  box-border card-res">
              <img src="/images/Vector2.svg" className="Properties-Specialities-icon" />
              <h4 className="font-title Properties-Specialities-content mt-4">Best Flights Options</h4>
              <p className="font-content Properties-Specialities-link">Charge your car
                <img className="ml-2" src="/images/Arrow 1.svg" />
              </p>
            </div>
          </div>
      
          <div className="col-lg-3 col-md-6 ">
            <div className="d-flex flex-column align-items-start box-border card-res">
              <img src="/images/Vector3.svg" className="Properties-Specialities-icon" />
              <h4 className="font-title Properties-Specialities-content mt-4">Medical insurance</h4>
              <p className="font-content Properties-Specialities-link">Take a trip
                <img className="ml-2" src="/images/Arrow 1.svg" />
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

    )

}
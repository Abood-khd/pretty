import React from 'react';

export default function CardForm (){

    return(

        <div className="d-flex justify-content-center align-items-center gap-3 section-footer " style={{height:'10px'}}>
        <div className='row'>
          <div className='col-md-6 col-xs-12 col-lg-6'>
        <div className="Lets-connect-card">
        <div className="Lets-connect-content">
          <h3>Let’s connect</h3>
  
          <ul>
            <li>Phone  +385 91 322 8444</li>
            <li>email  prospekt@prospekt.hr</li>
            <li>Address  Prospekt LtdDrazice  138, 51 000  <br/>Rijeka Croatia</li>
          </ul>
  
          <div className="Lets-connect-icon">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-whatsapp"></i>
          </div>
  
        </div>
        </div>
        </div>
  <div className='col-md-6' >
        <div className="form-card">
          <div className="form=content text-center ">
  
            <form className="container form-container">
            <h3 className="font-title form-title ">We’d love to hear from you</h3>
            <div className="row justify-content-center align-items-center">
            <div className="d-flex justify-content-between align-items-center w-100 gap-2  my-3">
  
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"/>
  
          <input type="email" class="form-control " id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Email"/>
  
            </div>
            <div>
  
  
          <input type="email" class="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Message"/>
          <p className="text-start font-content">I accept the Terms and conditions</p>
  
  <div className="text-start ">
  
          <button type="submit" className="btn-sendd  mt-3">send</button>
  </div>
            </div>
  </div>
  
  
  </form>
  
  
          </div>  
        </div>
        </div>
        </div>
        </div>

    )

}
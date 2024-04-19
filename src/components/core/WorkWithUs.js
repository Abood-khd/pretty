"use client";
import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';

const WorkWithUs = ()=> {
  const router = useRouter();


    return(

        
        <section >

        <div className="section-image">
      <div className="d-flex justify-content-center align-items-center " style={{height:'680px'}}>
        <div className="bg-light card-container">
            <div className="card-content d-flex flex-column justify-content-center align-items-center">
          <h5 className="font-content  Work-With-Us" style={{fontWeight:"700",fontSize:"16px",color:"#5B656F"}}>Work With Us</h5>

        <h3 className="font-title Join-the-pretty" style={{fontWeight:"700",fontSize:"60px",color:"#181d24"}}>Join the pretty tours family</h3>

        <p className="font-content Join-the-family" style={{fontWeight:"500",fontSize:"20px",color:"#181d24",maxWidth:"558px",textAlign:"center"}}>Join the pretty tours family Join the pretty tours familyJoin the pretty tours familyJoin the pretty tours family</p>

        <button className="font-content btn-join" style={{width:"787px",height:"48px",borderRadius:"0px 10px 10px 10px",padding:"12px 20px 12px 20px",backgroundColor:"#5b656f",color:"#fff",fontSize:"16px",fontWeight:"600"}} onClick={() => router.push("/contact")} >join</button>
            </div>
        </div>
        </div>
      </div>

      </section>

    )

}

export default WorkWithUs;
"use client";

import React from 'react'
import "photoswipe/dist/photoswipe.css";
import './detalis.css'
import DetalisHeader from './DetalisHeader/page';
import Destiations from './Destiations/page';
import Location from './Location/page'
import BookTour from './BookTour/page';


export default function Detalis() {
  return (
        <>


        {/* section DetalisHeader */}
      <div>
      <DetalisHeader/>
      </div>

        {/* End section DetalisHeader */}
        <div className='container '>

        
        {/* section Destiations */}
        <div style={{marginTop:"80px"}}>
      <Destiations/>
      </div>

        {/* End section Destiations */}


        
        {/* section Location */}
        <div style={{marginTop:"80px"}}>
      <Location/>
      </div>
        {/* End section Location */}

        {/* section Book This Tour */}
        </div>
        <div style={{marginTop:"80px",}}>
      <BookTour/>

      </div>
        {/* End section Book This Tour */}

    
        </>
  )
}

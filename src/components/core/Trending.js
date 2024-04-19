import React from 'react';
import FeaturedListings from "@/components/home/home-v1/FeatuerdListings";
export default function Trending (){

    return(

        <section id="explore-property" className="pb90 pb90-xs pb30-md ">
        <div className="container">

          <div className="w-100 text-center">
    <h1 className="Title-Section" style={{marginBottom:"40px"}}>Our Trending Tour Packages</h1>
    <p className="SubTittle-Section"> Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl. Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.</p>
          </div>
       
        </div>

        

      <FeaturedListings style={{marginTop:'32px'}} />

      </section>

    )

}
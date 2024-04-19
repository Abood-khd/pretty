"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import LookingFor from "../../home-v10/filter-with-property/LookingFor";
import Location from "../../home-v10/filter-with-property/Location";

const HeroContent = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("buy");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };



  const [price, setPrice] = useState({ value: { min: 2000, max: 45000 } });

  // price range handler
  const handleOnChange = (value) => {
    setPrice({ value });
  };

  return (
    <div className="filterContainer animate-up-2">
    

      <div className="tab-content text-start  ">
          <div>
            <div>
              <div className="row justify-content-around ">
             
                {/* End .col-3 */}

                <div className="col-md-4 col-xl-2 " style={{paddingTop: '24px',paddingTop: '24px',paddingLeft: "10px" ,paddingRight: '10px'}}>
                  <LookingFor />
                      
                    
                </div>
                {/* End col-md-4 */}

                <div className="col-md-4 col-xl-2 "  style={{paddingTop: '24px',paddingTop: '24px',paddingLeft: "10px" ,paddingRight: '10px'}}>
                      <Location />
                   
                  
                </div>
                <div className="col-md-4 col-xl-2 "  style={{paddingTop: '24px',paddingTop: '24px',paddingLeft: "10px" ,paddingRight: '10px'}}>
                      <Location />
                  
                </div>
                <div className="col-md-4 col-xl-2 "  style={{paddingTop: '24px',paddingTop: '24px',paddingLeft: "10px" ,paddingRight: '10px'}}>
                      <Location />
                  
                </div>
         

                

                <div className="col-md-4 col-xl-2">
                  <div className="py-2">
                  <button
                      className=" search-btn d-flex justify-content-end align-items-center gap-2"
                      type="button"
                      style={{paddingX:'16px',paddingY:'15px'}}
                      onClick={() => router.push("/grid-full-3-col")}
                      >
                        Search
                      <span className="flaticon-search pe-2" />
                    </button>
                    
                  </div>

                      
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default HeroContent;

import React from 'react'
import styles from './bookings.module.css'

export default function Bookings() {
  return (
   <>
    <div className={`${styles.Bookings} d-flex justify-content-between`}>
        <div className=" d-flex align-items-center gap-4">
            <div className={` ${styles.Border}`}></div>
            <div className='d-flex flex-column'>
                <span className={`${styles.City}`}>Newark(EWR)</span>
                <span className={`${styles.Time}`}>12:00 pm</span>
            </div>
        </div>
        <div className={`${styles.SecOne}  d-flex flex-column align-items-center gap-1`}>
            <div className='d-flex align-items-center'>
            <div className={`${styles.Icon}`}>
            <i class="fa-solid fa-calendar-days"></i>
            </div>
            <div className="d-flex flex-column">

                <span className={`${styles.Date}`}>Date</span>
                <span className={`${styles.DateValue}`}>12-11-22</span>
            </div>
            </div>
            <div className='d-flex align-items-center '>
            <div className={`${styles.Icon}`}>
            <i class="fa-solid fa-clock"></i>
            </div>
            <div className="d-flex flex-column">

                <span className={`${styles.Date}`}>Destination</span>
                <span className={`${styles.DateValue}`}>London</span>
            </div>
            </div>
         
        </div>
        <div className={`${styles.SecOne}  d-flex flex-column align-items-center gap-1`}>
            <div className='d-flex align-items-center'>
            <div className={`${styles.Icon}`}>
            <i class="fa-light fa-user-group"></i>
            </div>
            <div className="d-flex flex-column">

                <span className={`${styles.Date}`}>Guests</span>
                <span className={`${styles.DateValue}`}>5</span>
            </div>
            </div>
            <div className='d-flex align-items-center'>
            <div className={`${styles.Icon}`}>
            <i class="fa-light fa-dollar-sign"></i>
            </div>
            <div className="d-flex flex-column">

                <span className={`${styles.Date}`}>Price</span>
                <span className={`${styles.DateValue}`}>$50</span>
            </div>
            </div>
         
        </div>
        <div className=" d-flex  align-items-center gap-4 ">
            <div className="">
            <button className={`${styles.Detalis}`}>Details</button>

            </div>
            <div className="">
                
            <button className={`${styles.BtnDetalis}`}>
            <i class="fa-thin fa-chevron-right"></i>
            </button>
            </div>
        </div>
    </div>
    <div className={`${styles.Bookings} d-flex justify-content-between mt-4`}>
        <div className=" d-flex align-items-center gap-4">
            <div className={` ${styles.Border}`}></div>
            <div className='d-flex flex-column'>
                <span className={`${styles.City}`}>Newark(EWR)</span>
                <span className={`${styles.Time}`}>12:00 pm</span>
            </div>
        </div>
        <div className={`${styles.SecOne}  d-flex flex-column align-items-center gap-1`}>
            <div className='d-flex align-items-center'>
            <div className={`${styles.Icon}`}>
            <i class="fa-solid fa-calendar-days"></i>
            </div>
            <div className="d-flex flex-column">

                <span className={`${styles.Date}`}>Date</span>
                <span className={`${styles.DateValue}`}>12-11-22</span>
            </div>
            </div>
            <div className='d-flex align-items-center '>
            <div className={`${styles.Icon}`}>
            <i class="fa-solid fa-clock"></i>
            </div>
            <div className="d-flex flex-column">

                <span className={`${styles.Date}`}>Destination</span>
                <span className={`${styles.DateValue}`}>London</span>
            </div>
            </div>
         
        </div>
        <div className={`${styles.SecOne}  d-flex flex-column align-items-center gap-1`}>
            <div className='d-flex align-items-center'>
            <div className={`${styles.Icon}`}>
            <i class="fa-light fa-user-group"></i>
            </div>
            <div className="d-flex flex-column">

                <span className={`${styles.Date}`}>Guests</span>
                <span className={`${styles.DateValue}`}>5</span>
            </div>
            </div>
            <div className='d-flex align-items-center'>
            <div className={`${styles.Icon}`}>
            <i class="fa-light fa-dollar-sign"></i>
            </div>
            <div className="d-flex flex-column">

                <span className={`${styles.Date}`}>Price</span>
                <span className={`${styles.DateValue}`}>$50</span>
            </div>
            </div>
         
        </div>
        <div className=" d-flex  align-items-center gap-4 ">
            <div className="">
            <button className={`${styles.Detalis}`}>Details</button>

            </div>
            <div className="">
                
            <button className={`${styles.BtnDetalis}`}>
            <i class="fa-thin fa-chevron-right"></i>
            </button>
            </div>
        </div>
    </div>
    <div className={`${styles.Bookings} d-flex justify-content-between mt-4`}>
        <div className=" d-flex align-items-center gap-4">
            <div className={` ${styles.Border}`}></div>
            <div className='d-flex flex-column'>
                <span className={`${styles.City}`}>Newark(EWR)</span>
                <span className={`${styles.Time}`}>12:00 pm</span>
            </div>
        </div>
        <div className={`${styles.SecOne}  d-flex flex-column align-items-center gap-1`}>
            <div className='d-flex align-items-center'>
            <div className={`${styles.Icon}`}>
            <i class="fa-solid fa-calendar-days"></i>
            </div>
            <div className="d-flex flex-column">

                <span className={`${styles.Date}`}>Date</span>
                <span className={`${styles.DateValue}`}>12-11-22</span>
            </div>
            </div>
            <div className='d-flex align-items-center '>
            <div className={`${styles.Icon}`}>
            <i class="fa-solid fa-clock"></i>
            </div>
            <div className="d-flex flex-column">

                <span className={`${styles.Date}`}>Destination</span>
                <span className={`${styles.DateValue}`}>London</span>
            </div>
            </div>
         
        </div>
        <div className={`${styles.SecOne}  d-flex flex-column align-items-center gap-1`}>
            <div className='d-flex align-items-center'>
            <div className={`${styles.Icon}`}>
            <i class="fa-light fa-user-group"></i>
            </div>
            <div className="d-flex flex-column">

                <span className={`${styles.Date}`}>Guests</span>
                <span className={`${styles.DateValue}`}>5</span>
            </div>
            </div>
            <div className='d-flex align-items-center'>
            <div className={`${styles.Icon}`}>
            <i class="fa-light fa-dollar-sign"></i>
            </div>
            <div className="d-flex flex-column">

                <span className={`${styles.Date}`}>Price</span>
                <span className={`${styles.DateValue}`}>$50</span>
            </div>
            </div>
         
        </div>
        <div className=" d-flex  align-items-center gap-4 ">
            <div className="">
            <button className={`${styles.Detalis}`}>Details</button>

            </div>
            <div className="">
                
            <button className={`${styles.BtnDetalis}`}>
            <i class="fa-thin fa-chevron-right"></i>
            </button>
            </div>
        </div>
    </div>
    <div className={`${styles.Bookings} d-flex justify-content-between mt-4`}>
        <div className=" d-flex align-items-center gap-4">
            <div className={` ${styles.Border}`}></div>
            <div className='d-flex flex-column'>
                <span className={`${styles.City}`}>Newark(EWR)</span>
                <span className={`${styles.Time}`}>12:00 pm</span>
            </div>
        </div>
        <div className={`${styles.SecOne}  d-flex flex-column align-items-center gap-1`}>
            <div className='d-flex align-items-center'>
            <div className={`${styles.Icon}`}>
            <i class="fa-solid fa-calendar-days"></i>
            </div>
            <div className="d-flex flex-column">

                <span className={`${styles.Date}`}>Date</span>
                <span className={`${styles.DateValue}`}>12-11-22</span>
            </div>
            </div>
            <div className='d-flex align-items-center '>
            <div className={`${styles.Icon}`}>
            <i class="fa-solid fa-clock"></i>
            </div>
            <div className="d-flex flex-column">

                <span className={`${styles.Date}`}>Destination</span>
                <span className={`${styles.DateValue}`}>London</span>
            </div>
            </div>
         
        </div>
        <div className={`${styles.SecOne}  d-flex flex-column align-items-center gap-1`}>
            <div className='d-flex align-items-center'>
            <div className={`${styles.Icon}`}>
            <i class="fa-light fa-user-group"></i>
            </div>
            <div className="d-flex flex-column">

                <span className={`${styles.Date}`}>Guests</span>
                <span className={`${styles.DateValue}`}>5</span>
            </div>
            </div>
            <div className='d-flex align-items-center'>
            <div className={`${styles.Icon}`}>
            <i class="fa-light fa-dollar-sign"></i>
            </div>
            <div className="d-flex flex-column">

                <span className={`${styles.Date}`}>Price</span>
                <span className={`${styles.DateValue}`}>$50</span>
            </div>
            </div>
         
        </div>
        <div className=" d-flex  align-items-center gap-4 ">
            <div className="">
            <button className={`${styles.Detalis}`}>Details</button>

            </div>
            <div className="">
                
            <button className={`${styles.BtnDetalis}`}>
            <i class="fa-thin fa-chevron-right"></i>
            </button>
            </div>
        </div>
    </div>
    
   </>
  )
}

import React from 'react'
import styles from './account.module.css'
export default function Account() {
  return (
  <>
  <div className={`container p-3 ${styles.Account}`}>
    <div className="row justify-content-between ">
        <div className="col-md-12 d-flex justify-content-between align-items-center">

        <div className="name ">
        <h6 className={`${styles.Kye}`}>Name</h6>
        <p className={`${styles.Value}`}>John Doe</p>
        </div>
        <div >
            <button className={`${styles.Btn}`}>
            <i class="fa-solid fa-pen-to-square"></i> Change
            </button>
        </div>
        </div>
        <div className=" col-md-12 d-flex justify-content-between align-items-center mt-4">

        <div className="name ">
        <h6 className={`${styles.Kye}`}>Email</h6>
        <p className={`${styles.Value}`}>john.doe@gmail.com</p>
        </div>
        <div >
            <button className={`${styles.BtnEmail} `}>
            <i class="fa-solid fa-circle-plus"></i> Add another email
            </button>
            <button className={`${styles.Btn} ml-4 `}>
            <i class="fa-solid fa-pen-to-square"></i> Change
            </button>
        </div>
        </div>
        <div className="col-md-12 d-flex justify-content-between align-items-center mt-4">

        <div className="name ">
        <h6 className={`${styles.Kye}`}>Password</h6>
        <p className={`${styles.Value}`}>*************</p>
        </div>
        <div >
            <button className={`${styles.Btn}`}>
            <i class="fa-solid fa-pen-to-square"></i> Change
            </button>
        </div>
        </div>
        <div className="col-md-12 d-flex justify-content-between align-items-center mt-4">

        <div className="name ">
        <h6 className={`${styles.Kye}`}>Phone number</h6>
        <p className={`${styles.Value}`}>+1 000-000-0000</p>
        </div>
        <div >
            <button className={`${styles.Btn}`}>
            <i class="fa-solid fa-pen-to-square"></i> Change
            </button>
        </div>
        </div>
        {/* <div className="col-md-6 ">
            <div className="d-flex flex-column gap-1">

            <span className={`${styles.Kye}`}>Name</span>
            <span className={`${styles.Value}`}>John Doe</span>
            </div>
            <div className="d-flex flex-column gap-1 mt-5">

            <span className={`${styles.Kye}`}>Name</span>
            <span className={`${styles.Value}`}>John Doe</span>
            </div>
        </div>
        <div className="col-md-6 text-end">
            <p className=" mt-5">dd</p>
            <p className=" mt-5">dd</p>
        </div> */}
    </div>
  </div>
  
  
  </>
  )
}

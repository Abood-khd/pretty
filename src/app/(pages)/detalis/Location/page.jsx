import React from 'react'

import styles from './Location.module.css'

export default function Location() {
  return (
    <>
    <h3 className={`font-title  ${styles.LocationTitle}`}>Location</h3>
    <div  className={` ${styles.LocationImg}`}>
    <img className={` ${styles.Img}`}  src="/images/location.svg" alt="" />

    </div>
    </>
  )
}

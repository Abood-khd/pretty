"use client"
import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from './profile.module.css'
import Image from "next/image";
import './profile.css' 
import TabsComponent from './tabs/pages';

function Profile() {
    const [file, setFile] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);
    
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };


    const handleUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setUploadedImage(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };

  return (
    <>
    <div className={`${styles.ContainerProfile} `}>
        {/* Profile Background and  photo */}

           <div className={`${styles.Background} `} >
            {file ? (
                <div className={styles.ImageWrapper}>
                    <img
                        src={URL.createObjectURL(file)}
                        alt="Preview"
                        className={styles.Image}
                    />
                </div>
            ) : (
                <div className={styles.ImageWrapper}>
                    <img
                        src="/images/background-def.jpg" 
                        alt="Default Preview"
                        className={styles.Image}
                    />
                </div>
            )}
            <label className={styles.UploadButton} htmlFor="fileInput">
                <p><i class="fa-solid fa-cloud-arrow-up"></i> Upload new cover</p>
                <input
                    id="fileInput"
                    type="file"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
            </label>

            <div className={`${styles.Photo}`}>
  <img
    className={`${styles.photoImage}`} 
    src={uploadedImage || "/images/listings/profile-1.jpg"}
    alt="profile avatar"
  />
  <button
    className="tag-del"
    style={{ border: "none" }}
    data-tooltip-id="profile_del"
    onClick={() => setUploadedImage(null)}
  >
  </button>
  <div className="profile-content ml30 ml0-sm">
    <label className="upload-label pointer">
      <input
        type="file"
        accept="image/jpeg,image/png"
        onChange={handleUpload}
        style={{ display: "none" }}
      />
      <div className={` ${styles.Icon}`}>
        {/* <i className={`fal fa-arrow-right-long`} /> */}
        <i class="fa-solid fa-pen"></i>
      </div>
    </label>
  </div>
  <div className="text-center">
  <h4 className={` name`}>John Doe.</h4>
  <p className='email'>john.doe@gmail.com</p>
  </div>
</div>

        </div>
        {/* End Profile Background and  photo */}



  
    </div>

            <TabsComponent/>
    </>

  );
  
}

export default Profile;
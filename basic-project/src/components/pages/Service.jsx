import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./Service.module.css";
import bgVideo from "../../assets/bgvideo.mp4";

const Services = () => {
  return (
    <>
  
      <div className={styles.videoContainer}>
        <video autoPlay loop muted playsInline className={styles.bgVideo}>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.page}>
          <h1>Our Services</h1>
          <p>Here are the services we provide to our users.</p>
        </div>
      </div>
    </>
  );
};

export default Services;

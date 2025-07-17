import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./Contact.module.css";
import bgVideo from "../../assets/bgvideo.mp4";

const Contact = () => {
  return (
    <>
      {/* Header Section */}
      <header className={styles.header}>
        <Navbar />
      </header>

      {/* Main Content Section */}
      <main className={styles.main}>
        <div className={styles.videoContainer}>
          <video autoPlay loop muted playsInline className={styles.bgVideo}>
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.page}>
            <div className={styles.contentContainer}>
              <h1 className={styles.title}>Contact Us</h1>
              <p className={styles.subtitle}>Get in touch with us for any inquiries or support.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
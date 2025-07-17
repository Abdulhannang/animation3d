import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./Home.module.css";
import bgVideo from "../../assets/bgvideo.mp4";
import { FaMobileAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa"
import { MdOutlineNetworkCell } from "react-icons/md";
import Nextpage from "../nextpage/Nextpage";
import Section1st from "../nextpage/section1st/Section1st";
import Section2nd from "../nextpage/section/section2nd/Section2nd";
const features = [
  {
    icon: <FaMobileAlt/>,
    title: 'Any Device',
    desc: 'Track any photo – from smartphones to normal phones.',
  },
  {
    icon: <FaGlobe/>,
    title: 'Maximum Precision',
    desc: 'We use the latest map technology to locate the devices of the people you are looking for.',
  },
  {
    icon: <MdOutlineNetworkCell/>,
    title: 'All Networks',
    desc: 'Geolocation works on any mobile phone network, in any country and at any distance.',
  },
];

const Home = () => {
  return (
    <>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted playsInline className={styles.bgVideo}>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Our Features</h1>
          <div className={styles.featureCards}>
            {features.map((f, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.icon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.nextSection}>
        <Nextpage/>
      </div>
      <div>
        <Section1st/>
      </div>
      <div>
        <Section2nd/>
      </div>
    </>
  );
};

export default Home;

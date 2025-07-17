import React, { useState } from 'react';
import styles from './Login.module.css';
import bgVideo from '../../assets/bgvideo.mp4';

const Login = () => {
  const [formData, setFormData] = useState({  
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', formData);
    // Add login logic here
  };

  return (
    <>
      <div className={styles.videoContainer}>
        <video className={styles.bgVideo} autoPlay muted loop>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className={styles.page}>
        <div className={styles.authForm}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Login;

import React from 'react'
import styles from './Next.module.css'

function Nextpage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Our <span className={styles.highlight}>Website</span></h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum sapiente amet voluptatem unde voluptatum fugiat. Dignissimos, eaque dicta vel nam vitae deleniti provident quo at nesciunt inventore veniam corporis. 
        Explore our comprehensive solutions designed to meet your every need with precision and reliability.
      </p>
    </div>
  )
}

export default Nextpage

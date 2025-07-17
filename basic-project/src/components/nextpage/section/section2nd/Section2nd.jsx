
import React from 'react'
import styles from './Section2nd.module.css'

const Section2nd = () => {
  const imageUrls = [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop'
  ];

  const boxes = imageUrls.map((url, i) => (
    <div key={`box-${i}`} className={styles.size}>
      <img src={url} alt={`img-${i}`} />
    </div>
  ));

  const duplicateBoxes = imageUrls.map((url, i) => (
    <div key={`dup-${i}`} className={styles.size}>
      <img src={url} alt={`img-dup-${i}`} />
    </div>
  ));

  return (
    <div className={styles.scrollWrapper}>
      <div className={styles.containerc1}>
        {boxes}
        {duplicateBoxes}
      </div>
    </div>
  )
}

export default Section2nd;

'use client';

import styles from '../components/styles/skills.module.css';


export default function Speah() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sphere}>
        {Array.from({ length: 21 }).map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
      
    </div>
  );
}
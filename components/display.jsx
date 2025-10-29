'use client';

import { useState, useEffect } from 'react';

import styles from '../components/styles/display.module.css'

export default function Display() {
  const teamMembers = [
    { name: "Luffy", role: "Founder" },
    { name: "Monkey D. Luffy", role: "Creative Director" },
    { name: "Luffy chan", role: "Lead Developer" },
    { name: "Lucy", role: "UX Designer" },
    { name: "Luffy kun", role: "Marketing Manager" },
    { name: "Monkey chan", role: "Product Manager" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const total = teamMembers.length;

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCurrentIndex((newIndex + total) % total);
    setTimeout(() => setIsAnimating(false), 800);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowUp') updateCarousel(currentIndex - 1);
      else if (e.key === 'ArrowDown') updateCarousel(currentIndex + 1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex]);

  // Swipe logic
  useEffect(() => {
    let touchStartY = 0;
    const handleStart = (e) => (touchStartY = e.changedTouches[0].screenY);
    const handleEnd = (e) => {
      const diff = touchStartY - e.changedTouches[0].screenY;
      if (Math.abs(diff) > 50) {
        if (diff > 0) updateCarousel(currentIndex + 1);
        else updateCarousel(currentIndex - 1);
      }
    };
    window.addEventListener('touchstart', handleStart);
    window.addEventListener('touchend', handleEnd);
    return () => {
      window.removeEventListener('touchstart', handleStart);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [currentIndex]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.carouselSection}>
        <div className={styles.carouselContainer}>
          <button
            className={`${styles.navArrow} ${styles.up}`}
            onClick={() => updateCarousel(currentIndex - 1)}
          >
            <img src="https://ik.imagekit.io/gopichakradhar/icons/top.png?updatedAt=1754290522765" alt="Up" />
          </button>

          <div className={styles.carouselTrack}>
            {teamMembers.map((member, i) => {
              const offset = (i - currentIndex + total) % total;
              let positionClass = '';
              if (offset === 0) positionClass = styles.center;
              else if (offset === 1) positionClass = styles.down1;
              else if (offset === 2) positionClass = styles.down2;
              else if (offset === total - 1) positionClass = styles.up1;
              else if (offset === total - 2) positionClass = styles.up2;
              else positionClass = styles.hidden;

              return (
                <div
                  key={i}
                  className={`${styles.card} ${positionClass}`}
                  onClick={() => updateCarousel(i)}
                >
                  <img
                    src={`https://ik.imagekit.io/gopichakradhar/luffy/o${i + 1}.jpeg?updatedAt=1754289569411`}
                    alt={`Team Member ${i + 1}`}
                  />
                </div>
              );
            })}
          </div>

          <button
            className={`${styles.navArrow} ${styles.down}`}
            onClick={() => updateCarousel(currentIndex + 1)}
          >
            <img src="https://ik.imagekit.io/gopichakradhar/icons/down.png?updatedAt=1754290523249" alt="Down" />
          </button>
        </div>
      </div>

      <div className={styles.controlsSection}>
        <div className={styles.navControls}>
          <button
            className={`${styles.navArrow} ${styles.up}`}
            onClick={() => updateCarousel(currentIndex - 1)}
          >
            <img src="https://ik.imagekit.io/gopichakradhar/icons/top.png?updatedAt=1754290522765" alt="Up" />
          </button>
          <button
            className={`${styles.navArrow} ${styles.down}`}
            onClick={() => updateCarousel(currentIndex + 1)}
          >
            <img src="https://ik.imagekit.io/gopichakradhar/icons/down.png?updatedAt=1754290523249" alt="Down" />
          </button>
        </div>

        <div className={styles.memberInfo}>
          <h2 className={styles.memberName}>{teamMembers[currentIndex].name}</h2>
          <p className={styles.memberRole}>{teamMembers[currentIndex].role}</p>
        </div>

        <div className={styles.dots}>
          {teamMembers.map((_, i) => (
            <div
              key={i}
              className={`${styles.dot} ${i === currentIndex ? styles.active : ''}`}
              onClick={() => updateCarousel(i)}
            ></div>
          ))}
        </div>
      </div>

      <a
        href="https://gopichakradhar.me"
        target="_blank"
        rel="noopener noreferrer"
        id="super-btn"
        className={styles.superBtn}
      >
        <img
          src="https://ik.imagekit.io/gopichakradhar/assets/super.jpg?updatedAt=1748004690247"
          alt="Super"
        />
      </a>
    </div>
  );
}

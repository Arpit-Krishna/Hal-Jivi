import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageCarousel({ images }) {
  let [current, setCurrent] = useState(0);

  let prevSlide = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const styles = {
    carouselContainer: {
      width: '100%',
      overflow: 'hidden',
      position: 'relative',
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
    },
    imageWrapper: {
      display: 'flex',
      transition: 'transform 0.5s ease-out',
      transform: `translateX(-${current * 100}%)`,
    },
    image: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
      flexShrink: 0,
    },
    navButtons: {
      position: 'absolute',
      top: '50%',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#ffffff',
      fontSize: '2rem',
      zIndex: 1,
      padding: '0 10px',
    },
    dotsContainer: {
      position: 'absolute',
      bottom: '10px',
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      width: '100%',
    },
    dot: (isActive) => ({
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      cursor: 'pointer',
      backgroundColor: isActive ? '#00adb5' : '#555',
    }),
  };

  return (
    <div style={styles.carouselContainer}>
      <div style={styles.imageWrapper}>
        {images.map((src, index) => (
          <img key={index} src={src} style={styles.image} alt="" />
        ))}
      </div>

      <div style={styles.navButtons}>
        <button onClick={prevSlide}>
          <BsArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsArrowRightCircleFill />
        </button>
      </div>

      <div style={styles.dotsContainer}>
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            style={styles.dot(i === current)}
          />
        ))}
      </div>
    </div>
  );
}

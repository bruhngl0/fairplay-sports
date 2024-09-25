import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "../styles/hero.scss";

const Hero = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const textFrontRef = useRef(null);
  const bgRef = useRef(null);

  // Set max scroll effect limits
  const maxScrollImage = -50; // Maximum pixel translation for the image
  const maxScrollTextBack = 650; // Maximum pixel translation for the background text
  const maxScrollTextFront = -500; // Maximum pixel translation for the front text
  const maxScrollBg = -10; // Maximum pixel translation for the background image
 
  const scrollSpeedFactor = 1000; 

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY *  scrollSpeedFactor;

      // Set clamped scroll values (limit the transformations)
      const imageY = Math.max(-scrollY * 0.5, maxScrollImage);
      const textBackY = Math.min(scrollY * 5.5, maxScrollTextBack);
      const textFrontY = Math.max(-scrollY * 4.5, maxScrollTextFront);
      const bgY = Math.max(-scrollY * 0.2, maxScrollBg);

      // Apply GSAP animations only within the limits
      gsap.to(imageRef.current, { 
        y: imageY,
        ease: 'power2.out'
      });

      gsap.to(textRef.current, { 
        y: textBackY,
        ease: 'power2.out'
      });

      gsap.to(textFrontRef.current, { 
        y: textFrontY,
        ease: 'power2.out'
      });

      gsap.to(bgRef.current, { 
        y: bgY,
        ease: 'power2.out'
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='hero-main'>
      <img src="bg.png" ref={bgRef} className='bg-hero' />
      <h1 ref={textRef} className='hero-back-text'>FAIRPLAY</h1>
      <img ref={imageRef} src="group1.png" alt="Athletes" className='group-hero' />
      <h1 ref={textFrontRef} className='hero-front-text'>SPORTS</h1>
    </div>
  );
}

export default Hero;




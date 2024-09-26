import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/about.scss';
import '../styles/ani.scss';
import Layout from './Layout';
import AnimatedServices from './AnimateServices';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const innerDivRef = useRef(null);
  const animatedServicesRef = useRef(null);
  const layoutRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const innerDiv = innerDivRef.current;
    const animatedServices = animatedServicesRef.current;
    const layout = layoutRef.current;

    gsap.set(innerDiv, { width: 0, height: 0, opacity: 0 });
    gsap.set(animatedServices, { opacity: 1 });
    gsap.set(layout, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    tl.to(innerDiv, {
      width: '70vw',
      height: '58vh',
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
    })
      .to(layout, {
        opacity: 1,
        duration: 0.5,
      })
      .to(animatedServices, {
        opacity: 1,
        duration: 0.5,
        delay: 0.4, // Delay the appearance of AnimatedServices by 1 second
      });

  }, []);

  return (
    <div ref={containerRef} className="about-container">
      <div ref={innerDivRef} className="about-inner">
        <div ref={animatedServicesRef}>
          <AnimatedServices />
        </div>
        <div ref={layoutRef}>
          <Layout className="layout-loa" />
        </div>
      </div>
    </div>
  );
};

export default About;
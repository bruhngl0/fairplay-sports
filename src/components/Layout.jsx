import React, { useEffect, useState } from 'react';
import '../styles/layout.scss';

const Layout = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3); // Rotate through 3 images
        setIsPaused(true); // Pause after moving to the next image
      } else {
        setIsPaused(false); // Resume after the pause
      }
    }, isPaused ? 1300 : 2000); // Pause for 1 second, slide every 2 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="layout-one">
      <div className={`image-container image-${currentImageIndex}`}>
        <img src="frame3.png" alt="frame1" />
        <img src="frame2.png" alt="frame2" />
        <img src="frame1.png" alt="frame3" />
      </div>
    </div>
  );
};

export default Layout;






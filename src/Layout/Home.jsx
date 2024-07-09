import React, { useState, useEffect } from 'react';
import photo from '../assets/images/Preboda/DSC00397.jpg';
import photo2 from '../assets/images/Preboda/DSC00408.jpg';
import photo3 from '../assets/images/Preboda/DSC00410.jpg';

const Home = () => {
  const slides = [
    photo,
   // photo2
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      {/* Home Section Start */}
      <section  className="home-section" data-scroll-index="0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="home-content">
                  <h1>Kevin & Isa</h1>
                  <br />
                  <span>Nos casamos</span>
                  
                  <div className="scroll-down-indicator">
                    <div className="mouse-icon">
                      <div className="mouse-wheel"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
        {/* Indicator for scrolling down */}

      </section>
      {/* Home Section End */}
    </div>
  );
}

export default Home;

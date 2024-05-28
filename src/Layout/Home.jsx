import React, { useState, useEffect } from 'react';
import photo from '../assets/images/gallery/Isa.jpeg';
import photo2 from '../assets/images/gallery/juntos.jpeg';
import photo3 from '../assets/images/gallery/ometepe.jpeg';

const Home = () => {
  const slides = [
    photo,
    photo2
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

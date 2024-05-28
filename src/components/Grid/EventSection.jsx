import {React,useEffect,useState} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import place2 from '../../assets/images/gallery/contempo2.avif';
import place4 from '../../assets/images/gallery/contempo4.jpeg';
import place5 from '../../assets/images/gallery/contempo5.jpeg';
import AnimatedSection from '../Animations/Animation';

const EventSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Arreglo de imágenes
  const images = [
    place2, 
    place4,
    place5
  ];
    const openMap = () => {
        const mapURL = "https://www.google.com/maps/place/Hotel+Contempo/@12.074556,-86.225196,17z/data=!3m1!4b1!4m9!3m8!1s0x8f73ffa35eb0681b:0x2515f97172776223!5m2!4m1!1i2!8m2!3d12.074556!4d-86.225196!16s%2Fg%2F1thtqn9x?entry=ttu";

        window.open(mapURL, '_blank');
    };
    return (
      <AnimatedSection animationClass="movement">
        <section className="event-section" data-scroll-index="3">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Celebra nuestro amor</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {/* <div className="event-item">
                        <div className="event-item-inner">
                        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Card ${index + 1}`}
            className={index === currentImageIndex ? 'active' : ''}
          />
        ))}
                        </div>
                    </div> */}
                    
<div className="event-item">
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Card ${index + 1}`}
            className={index === currentImageIndex ? 'active' : ''}
          />
        ))}
      </div>
    </div>
                    <div className="event-item">
                        <div className="event-item-inner">
                            <h3>Recepción</h3>
                            <span className="date">7 Septiembre 2024</span>
                            <span className="time">04:00 PM - 9:PM</span>
                            <p>Hotel Contempo</p>
                            <p>Carretera a Masaya, km. 11 carretera a Masaya 400 metros oeste</p>
                            <button className="map-button" onClick={openMap}>
                                Abrir Mapa
                            </button>
                        </div>

                    </div>
                    {/* Items End */}
                </div>
            </div>
        </section>
        </AnimatedSection>
    );
}

export default EventSection;

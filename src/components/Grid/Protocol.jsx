import React from 'react';
import clothes from '../../assets/images/gallery/clothes.png';
import noChildren from '../../assets/images/gallery/wedding.jpeg';
import AnimatedSection from '../Animations/Animation';
const Protocol = () => {
    return (
        <AnimatedSection animationClass="fade-in">
        <div className="container">
            <div className="couple-section">
                <div className="row">
                    <div className="row">
                        <div className="protocol">
                            <img  src={clothes} alt="Jaga jarak" />
                            <h3>Código de Vestimenta</h3>
                            <p>Por favor, únete a nosotros luciendo vestimenta formal. Nos encantaría que te vistas con tu mejor atuendo, pero por favor evita el color blanco, ya que reservamos ese color para los protagonistas del día. ¡Estamos emocionados de verte lucir increíble en nuestro día especial!</p>

                        </div>
                        <div className="protocol">
                            <img src={noChildren} alt="Bride" />
                            <h3>Sólo Adultos</h3>
                            <p>Evento únicamente para adultos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </AnimatedSection>
    );
}

export default Protocol;

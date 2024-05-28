import React from 'react';
import clothes from '../../assets/images/gallery/clothes.png';
import noChildren from '../../assets/images/gallery/children.png';
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
                            <p>Formal, No vestidos blancos ni colores que se asemejen</p>

                        </div>
                        <div className="protocol">
                            <img src={noChildren} alt="Bride" />
                            <h3>Sólo Adultos</h3>
                            <p>Adoramos a sus hijos, pero creemos que necesitan una noche libre. Solo adultos por favor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </AnimatedSection>
    );
}

export default Protocol;

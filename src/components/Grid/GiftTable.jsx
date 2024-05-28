import React from 'react';
import gitftable from '../../assets/images/gallery/gitftable.png';
import AnimatedSection from '../Animations/Animation';
const GiftTable = () => {
    return (
        <AnimatedSection animationClass="bounce">
        <div className="container">
            <div className="couple-section">
                <div className="row">
                    <div className="row">
                    <div className="gifttable">
                            <img  src={gitftable} alt="gift" />
                            <h3>Regalos</h3>
                            <p>Nos complace invitarlos a compartir con nosotros uno de los momentos más especiales de nuestras vidas. No contamos con mesa de regalos, sin embargo, les pedimos que nos acompañen en este día único y, si lo desean, puedan demostrar su cariño y apoyo mediante una lluvia de sobres. Será un honor contar con su presencia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </AnimatedSection>
    );
}

export default GiftTable;

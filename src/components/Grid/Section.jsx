import React, { useState, useEffect } from 'react';
import groomPhoto from '../../assets/images/gallery/Kevin.jpeg';
import bridePhoto from '../../assets/images/gallery/ise.jpeg';

const CoupleSection = () => {
  return (
    <section className="couple-section" data-scroll-index="1">
      <div className="container">
        <div className="row">
          <div className="textobiblico">
            <h3>1 Corintios 13:7.</h3>
            <p>El amor nunca se dara por vencido, jamás pierda la fe, siempre tiene esperanzas y se mantiente firme en todas las circuntancias</p>
          </div>
        </div>
        <div className="row">
          <div className="textobiblico">
            <h2>¡Con la bendición de Dios y de nuestros padres tenemos el honor de celebrar con ustedes nuestra boda!</h2>
          </div>
        </div>
        <div className="row">
          <div className="couple">
            <img src={groomPhoto} alt="Groom" />
            <h3>Kevin Vanegas</h3>
            <span>Padres del novio</span>
            <p>Javier Vanegas</p>
            <p>Yorlene Fariñas</p>

          </div>
          <div className="couple">
            <i className="fas fa-heart"></i>
            <img src={bridePhoto} alt="Bride" />
            <h3>Isa Carrillo</h3>
            <span>Padres de la novia</span>
            <p>Benjamin Carrillo</p>
            <p>Maria C. Torres</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoupleSection;

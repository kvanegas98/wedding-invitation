import React from 'react';
import gitftable from '../../assets/images/gallery/gitftable.png';

const GiftTable = () => {
    return (
        <div className="container">
            <div className="couple-section">
                <div className="row">
                    <div className="row">
                    <div className="gifttable">
                            <img  src={gitftable} alt="gift" />
                            <h3>Mesa de regalos</h3>
                            <p>Tu compañia es nuestro mejor regalo, pero si tienes la intención de hacernos un obsequio, encontrarás un buzón el día del evento</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GiftTable;

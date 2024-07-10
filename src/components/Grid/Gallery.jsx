import React, { useState } from 'react';
import 'react-awesome-lightbox/build/style.css'; // Importa los estilos de lightbox
import Lightbox from 'react-awesome-lightbox';
import photo1 from '../../assets/images/PreBoda2/personalizada.jpeg';
import photo2 from '../../assets/images/PreBoda2/_DSC9177.JPG';
import photo3 from '../../assets/images/PreBoda2/_DSC9224.JPG';
import photo4 from '../../assets/images/PreBoda2/_DSC9171.JPG';
import photo5 from '../../assets/images/PreBoda2/_DSC9147.JPG';
import photo6 from '../../assets/images/PreBoda2/_DSC9203.JPG';
import photo7 from '../../assets/images/PreBoda2/p2.jpeg';
import photo8 from '../../assets/images/PreBoda2/personalizada2.jpg';
import photo9 from '../../assets/images/PreBoda2/p3.jpg';

const Gallery = () => {
    // Array de objetos con la información de las imágenes
    const images = [
        // { thumbnail: photo2, large: photo2 },
        { thumbnail: photo3, large: photo3 },
        { thumbnail: photo5, large: photo5 },
        // { thumbnail: photo6, large: photo6 },
        { thumbnail: photo7, large: photo7 },
        { thumbnail: photo8, large: photo8 },
        // { thumbnail: photo9, large: photo9 },
        { thumbnail: photo1, large: photo1 },

    ];

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <section className="gallery-section" data-scroll-index="4">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2 style={{ color: '##A5AA9C' }}>Galeria</h2>
                    </div>
                </div>
                <div className="row">
                    {images.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <div className="gallery-item-inner">
                                <img 
                                    src={image.thumbnail} 
                                    alt="" 
                                    data-large={image.large}
                                    onClick={() => { setIsOpen(true); setPhotoIndex(index); }}
                                    style={{ cursor: 'pointer' }} 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isOpen && (
                <Lightbox
                    images={images.map(image => ({ url: image.large }))}
                    startIndex={photoIndex}
                    onClose={() => setIsOpen(false)}
                />
            )}
        </section>
    );
}

export default Gallery;

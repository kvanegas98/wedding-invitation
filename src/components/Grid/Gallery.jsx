import React, { useState } from 'react';
import 'react-awesome-lightbox/build/style.css'; // Importa los estilos de lightbox
import Lightbox from 'react-awesome-lightbox';
import photo1 from '../../assets/images/Preboda/DSC00397.jpg';
import photo2 from '../../assets/images/Preboda/DSC00408.jpg';
import photo3 from '../../assets/images/Preboda/DSC00410.jpg';
import photo4 from '../../assets/images/Preboda/DSC00453.jpg';

const Gallery = () => {
    // Array de objetos con la información de las imágenes
    const images = [
        { thumbnail: photo1, large: photo1 },
        { thumbnail: photo2, large: photo2 },
        { thumbnail: photo3, large: photo3 },
        { thumbnail: photo4, large: photo4 },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <section className="gallery-section" data-scroll-index="4">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2 style={{ color: '##8FADDD' }}>Galeria</h2>
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

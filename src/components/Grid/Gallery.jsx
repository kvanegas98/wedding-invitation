import React from 'react';
import '../../assets/images/couple-1.jpg'
import photo1 from '../../assets/images/couple-1.jpg';
import photo2 from '../../assets/images/couple-2.jpg';
import photo3 from '../../assets/images/couple-3.jpg';


const Gallery = () => {
    // Array de objetos con la información de las imágenes
    const images = [
        { thumbnail: photo1, large: photo1 },
        { thumbnail: photo2, large: photo2 },
        { thumbnail: photo3, large: photo3 },
        // { thumbnail: '../../assets/images/couple-2.jpg', large: '../../assets/images/couple-2.jpg' },
        // { thumbnail: 'assets/img/gallery/thumb/3.jpg', large: 'assets/img/gallery/large/3.jpg' },
        // { thumbnail: 'assets/img/gallery/thumb/4.jpg', large: 'assets/img/gallery/large/4.jpg' },
        // { thumbnail: 'assets/img/gallery/thumb/5.jpg', large: 'assets/img/gallery/large/5.jpg' },
        // { thumbnail: 'assets/img/gallery/thumb/6.jpg', large: 'assets/img/gallery/large/6.jpg' }
    ];

    return (
        <section className="gallery-section" data-scroll-index="4">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Galeria</h2>
                    </div>
                </div>
                <div className="row">
                    {images.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <div className="gallery-item-inner">
                                <img src={image.thumbnail} alt="" data-large={image.large} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;

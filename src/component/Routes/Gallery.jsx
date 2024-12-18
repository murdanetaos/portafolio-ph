import React from 'react';
import styled from 'styled-components';

const PhotoCard = styled.div`
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
    }

    img {
        width: 100%;
        height: auto;
    }
`;

function Gallery() {
    const photos = [
        { src: '/images/car1.jpg', alt: 'Car Photo 1' },
        { src: '/images/sports1.jpg', alt: 'Sports Photo 1' },
        { src: '/images/portrait1.jpg', alt: 'Portrait Photo 1' },
    ];

    return (
        <section>
            <h1 className="text-center text-2xl font-bold mt-4">Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {photos.map((photo, index) => (
                    <PhotoCard key={index}>
                        <img src={photo.src} alt={photo.alt} />
                    </PhotoCard>
                ))}
            </div>
        </section>
    );
}

export default Gallery;

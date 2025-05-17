import React, { useState, useEffect, useRef } from 'react';
// import './Slider.scss'; // SCSS стилі

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const trackRef = useRef(null);
    const autoSlideRef = useRef(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    635094
    const images = [
        `${process.env.PUBLIC_URL}/assets/work/1-1.jpg`,
        `${process.env.PUBLIC_URL}/assets/work/2-2.jpg`,
        `${process.env.PUBLIC_URL}/assets/work/3-3.jpg`,
        `${process.env.PUBLIC_URL}/assets/work/4-4.jpg`,
        `${process.env.PUBLIC_URL}/assets/work/5-5.jpg`,
        `${process.env.PUBLIC_URL}/assets/work/6-6.jpg`,
    ];

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    const selectSlide = (index) => {
        setCurrent(index);
    };

    // автопрокрутка
    useEffect(() => {
        autoSlideRef.current = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(autoSlideRef.current);
    }, [images.length]);

    // touch-свайп
    useEffect(() => {
        const handleTouchStart = (e) => {
            touchStartX.current = e.touches[0].clientX;
        };

        const handleTouchMove = (e) => {
            touchEndX.current = e.touches[0].clientX;
        };

        const handleTouchEnd = () => {
            const diff = touchStartX.current - touchEndX.current;
            if (diff > 50) nextSlide();
            else if (diff < -50) prevSlide();
        };

        const track = trackRef.current;
        if (track) {
            track.addEventListener('touchstart', handleTouchStart);
            track.addEventListener('touchmove', handleTouchMove);
            track.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            if (track) {
                track.removeEventListener('touchstart', handleTouchStart);
                track.removeEventListener('touchmove', handleTouchMove);
                track.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }, [images.length]);

    return (
        <section className="slider">
            <div className="container">
                <h2>Мої роботи</h2>
                <div className="blockSlider">
                    <div className="FullArea" ref={trackRef}>
                        <div className="imagesArea">
                            <img
                                src={images[current]}
                                alt={`Slider Image ${current + 1}`}
                                className="imageSlider"
                            />
                        </div>

                        <div className="pointsAreaSize">
                            {images.map((_, index) => (
                                <span
                                    key={index}
                                    className={`point ${current === index ? 'active' : ''}`}
                                    onClick={() => selectSlide(index)}
                                ></span>
                            ))}
                        </div>

                        <div className="btnsAreaSize">
                            <div className="btn-reset blockArow" onClick={prevSlide}>
                                <i className="fa fa-angle-left" aria-hidden="true"></i>
                            </div>
                            <div className="btn-reset blockArow" onClick={nextSlide}>
                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;

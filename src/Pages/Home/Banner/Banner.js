import React, { useState } from 'react';
import './Banner.css'
import banner from '../../../images/Banner/banner.jpg'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <div className=''>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Good Trainer is Important</h3>
                        <p>An excellent personal trainer believes that every client has</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-dark'>Health Is wealth</h3>
                        <p className='text-dark'>Food Habit is more important than exercise</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Regular exercise</h3>
                        <p>
                            Regular physical activity can improve your muscle strength and boost your endurance.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
    );
};

export default Banner;
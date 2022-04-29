import React from 'react';
import './Banner.css'
import banner from '../../../images/Banner/banner.jpg'

const Banner = () => {
    return (
        <div className='container'>
            
            <img className='img-fluid' src={banner} alt="" />
        </div>
    );
};

export default Banner;
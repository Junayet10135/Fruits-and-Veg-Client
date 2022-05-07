import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5  rounded p-2  '>
            <h4><small> &copy; Copyright Reserved by JH Tamim {year} </small></h4>
        </footer>
    );
};

export default Footer;
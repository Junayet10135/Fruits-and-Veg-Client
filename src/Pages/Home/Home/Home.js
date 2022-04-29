import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import UpComing from '../UpComingProducts/UpComing';
import YetToFinished from '../YetToFinished/YetToFinished'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <UpComing></UpComing>
            <YetToFinished></YetToFinished>
        </div>
    );
};

export default Home;
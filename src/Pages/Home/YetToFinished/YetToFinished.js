import React, { useEffect, useState } from 'react';
import YetToFinishedProduct from './YetToFinishedProduct';

const MostSales = () => {
    const [lessProducts, setLessProducts]=useState([]);
    useEffect(() => {
        fetch('https://cryptic-escarpment-05910.herokuapp.com/finishing')
            .then(res => res.json())
            .then(data => setLessProducts(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='text-center section-title p-2 '>Product Which Will Be Finished Soon</h2>
            <div className='row mx-auto text-center'>
                {
                    lessProducts.map(lessProduct => <YetToFinishedProduct
                        key={lessProduct._id}
                        lessProduct={lessProduct}
                    ></YetToFinishedProduct>)
                }
            </div>
        </div>
    );
};

export default MostSales;
import React, { useEffect, useState } from 'react';
import YetToFinishedProduct from './YetToFinishedProduct';

const MostSales = () => {
    const [lessProducts, setLessProducts]=useState([]);
    useEffect(() => {
        fetch('upComing.json')
            .then(res => res.json())
            .then(data => setLessProducts(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='text-center'>About to Coming:{lessProducts.length}</h2>
            <div className='row mx-auto text-center'>
                {
                    lessProducts.map(lessProduct => <YetToFinishedProduct
                        key={lessProduct.id}
                        lessProduct={lessProduct}
                    ></YetToFinishedProduct>)
                }
            </div>
        </div>
    );
};

export default MostSales;
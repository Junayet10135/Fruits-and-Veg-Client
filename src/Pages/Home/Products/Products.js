import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [inventorys, setInventorys] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res=>res.json())
        .then(data => setInventorys(data))
    },[]);
    return (
        <div className='container'>
            <h2 className='text-center'>Here products section :{inventorys.length}</h2>
            <div className='row mx-auto text-center'>
                {
                    inventorys.slice(0,6).map(inventory => <Product
                    key={inventory._id}
                    inventory = {inventory}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;
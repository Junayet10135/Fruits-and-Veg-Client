import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [inventorys, setInventorys] = useState([]);

    useEffect(()=>{
        fetch('inventory.json')
        .then(res=>res.json())
        .then(data => setInventorys(data))
    },[]);
    return (
        <div className='container'>
            <h2>Here products section :{inventorys.length}</h2>
            <div className='row'>
                {
                    inventorys.slice(0,6).map(inventory => <Product
                    key={inventory.id}
                    inventory = {inventory}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;
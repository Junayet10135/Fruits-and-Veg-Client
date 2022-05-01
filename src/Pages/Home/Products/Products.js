import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Inventory from '../../Inventory/Inventory';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [inventorys, setInventorys] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res=>res.json())
        .then(data => setInventorys(data))
    },[]);

    const handleAllProduct=()=>{
        navigate('/inventory');
    }
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
            <button onClick={handleAllProduct} className='btn btn-primary'>Manage All Products</button>
        </div>
    );
};

export default Products;
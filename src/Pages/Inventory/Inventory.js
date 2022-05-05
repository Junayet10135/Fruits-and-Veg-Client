import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import AllProduct from './AllProduct';

const Inventory = () => {
    const [inventorys] = useInventory();
    const navigate = useNavigate();


    const handleUpdate = ()=>{
        navigate('/addProduct');
    }
    return (
        <div style={{minHeight:"100vh"}} className='container'>
            <h2 className='text-center'>Here products section :{inventorys.length}</h2>
            <button onClick={handleUpdate} className='button d-block mx-auto'> Add New Product?</button>
            <div className='row mx-auto text-center'>
                {
                    inventorys.map(inventory => <AllProduct
                        key={inventory._id}
                        inventory={inventory}
                    ></AllProduct>)
                }
            </div>
        </div>
    );
};

export default Inventory;
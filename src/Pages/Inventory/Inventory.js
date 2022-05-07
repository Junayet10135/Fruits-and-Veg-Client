import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventory from '../../hooks/useInventory';
import AllProduct from './AllProduct';

const Inventory = () => {
    const [inventorys, setInventorys] = useInventory();
    const navigate = useNavigate();

    const handleDelete = id => {
        const proceed = window.confirm('are you sure? you want to delete');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast('delete successfully!')
                    const remaining = inventorys.filter(inventory => inventory._id !== id);
                    setInventorys(remaining);
                })

        }
    }


    const handleUpdate = ()=>{
        navigate('/addProduct');
    }
    return (
        <div style={{minHeight:"100vh"}} className='container'>
            <h2 className='text-center section-title mt-4 mb-2'>All Inventories Section</h2>
            <button onClick={handleUpdate} className='w-75 all-inven-btn d-block mx-auto'> Add New Product?</button>
            <div className='row mx-auto text-center'>
                {
                    inventorys.map(inventory => <AllProduct
                        key={inventory._id}
                        inventory={inventory}
                        handleDelete={handleDelete}
                    ></AllProduct>)
                }
            </div>
        </div>
    );
};

export default Inventory;
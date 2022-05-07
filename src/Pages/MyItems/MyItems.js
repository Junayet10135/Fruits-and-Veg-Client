import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useInventory from '../../hooks/useInventory';
import MyItem from './MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [inventorys, setInventorys]=useInventory();
    
    const email = user?.email;

    const remaining = inventorys.filter(item => item.email === email);

    const handleDelete = id => {
        const proceed = window.confirm('are you sure?');
        if (proceed) {
            const url = `https://cryptic-escarpment-05910.herokuapp.com/inventory/${id}`;
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

    

    return (
        <div className='container' style={{ minHeight: "100vh" }}>
            <h2 className='my-4'>Your Added Product You Can <span className='text-danger'>Delete</span> It From here</h2>
            <h5>Your Name: {user?.displayName}</h5>
            <h5>Your Email: {user?.email}</h5>

            <p>If You Don't see any data , wait few second it will show soon or please reload again and check again your product added in all inventories or not</p>
            
            
            <div className='row container'>
                {
                    remaining.map(item => <MyItem
                    key={item._id}
                    item={item}
                    handleDelete={handleDelete}
                    ></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;
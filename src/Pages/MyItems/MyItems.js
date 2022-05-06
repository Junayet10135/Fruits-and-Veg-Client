import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useInventory from '../../hooks/useInventory';
import MyItem from './MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [inventorys, setInventorys]=useInventory();
    
    const email = user?.email;

    const remaining = inventorys.filter(item => item.email === email);

    

    return (
        <div>
            <h5>Your Name: {user?.displayName}</h5>
            <h5>Your Email: {user?.email}</h5>
            
            <div>
                {
                    remaining.map(item => <MyItem
                    key={item._id}
                    item={item}
                    ></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;
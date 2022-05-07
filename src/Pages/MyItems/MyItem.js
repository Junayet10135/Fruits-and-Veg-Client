import React from 'react';
import { toast } from 'react-toastify';
import useInventory from '../../hooks/useInventory';

const MyItem = ({ item, handleDelete }) => {
    const [inventorys, setInventorys] = useInventory();
    const {name} = item;


    return (
        <div className='text-center'>
            <h6>{name}</h6>
            <button onClick={() => handleDelete(item._id)} className='button d-block mx-auto'>Delete</button>
        </div>
    );
};

export default MyItem;
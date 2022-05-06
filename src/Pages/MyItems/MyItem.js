import React from 'react';
import { toast } from 'react-toastify';
import useInventory from '../../hooks/useInventory';

const MyItem = ({ item }) => {
    const [inventorys, setInventorys] = useInventory();
    const {name} = item;

    const handleDelete = id => {
        const proceed = window.confirm('are you sure?');
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

    return (
        <div className='text-center'>
            <h6>{name}</h6>
            <button onClick={() => handleDelete(item._id)} className='button d-block mx-auto'>Delete</button>
        </div>
    );
};

export default MyItem;
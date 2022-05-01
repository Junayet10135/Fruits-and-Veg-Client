import React, { useEffect, useState } from 'react';
import AllProduct from './AllProduct';

const Inventory = () => {
    const [inventorys, setInventorys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventorys(data))
    }, []);
    return (
        <div style={{minHeight:"100vh"}} className='container'>
            <h2 className='text-center'>Here products section :{inventorys.length}</h2>
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
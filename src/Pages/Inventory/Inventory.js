import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AllProduct from './AllProduct';

const Inventory = () => {
    const [inventorys, setInventorys] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventorys(data))
    }, []);

    const handleUpdate = ()=>{
        navigate('/update')
    }
    return (
        <div style={{minHeight:"100vh"}} className='container'>
            <h2 className='text-center'>Here products section :{inventorys.length}</h2>
            <button onClick={handleUpdate} className='button d-block mx-auto'> Update Product?</button>
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
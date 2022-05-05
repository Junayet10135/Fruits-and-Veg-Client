import React from 'react';
import { toast } from 'react-toastify';
import useInventory from '../../hooks/useInventory';

const AllProduct = ({ inventory }) => {
    const { name, img, price, quantity, Supplier, description } = inventory;

    const [inventorys, setInventorys ] = useInventory();

    const handleDelete =id=>{
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
        <div className='inventory-container mb-5 g-5 col-sm-12 col-md-6 col-lg-4 rounded'>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body text-start">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"><strong>Price: $</strong> {price}</p>
                <p className="card-text"><strong>Quantity:</strong> {quantity}</p>
                <p className="card-text"><strong>Supplier Name:</strong> {Supplier}</p>
                <p><small>{description}</small></p>
                <button onClick={() => handleDelete(inventory._id)} className='button d-block mx-auto'> Delete</button>
            </div>
        </div>
    );
};

export default AllProduct;
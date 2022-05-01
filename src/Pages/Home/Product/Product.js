import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ inventory }) => {
    const { name, img, price, quantity, Supplier, description, _id} = inventory;
    const navigate = useNavigate();

    const handleInventoryId = id => {
        navigate(`/inventory/${id}`)

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
                <button onClick={() => handleInventoryId(_id)} className='button d-block mx-auto'> Update ?{name}</button>
            </div>
        </div>
    );
};

export default Product;
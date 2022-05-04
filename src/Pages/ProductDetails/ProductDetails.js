import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { inventoryId } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [inventoryId]);
    const handleAllProduct = () => {
        navigate('/inventory');
    }
    return (
        <div className='row container '>
            <div className='inventory-container mb-5 g-5 col-sm-12 col-md-6 col-lg-4 rounded'>
                <img src={product.img} className="card-img-top" alt="..." />
                <div className="card-body text-start">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text"><strong>Price: $</strong> {product.price}</p>
                    <p className="card-text"><strong>Quantity:</strong> {product.quantity}</p>
                    <p className="card-text"><strong>Supplier Name:</strong> {product.Supplier}</p>
                    <p><small>{product.description}</small></p>
                    <div className=''>
                        <button className='button d-block mx-auto'> Deliverd</button></div>

                </div>
                <input type="number" />
                <button className='button '> update</button>
            </div>
            <button onClick={handleAllProduct} className='btn btn-primary'>Manage All Products</button>
        </div>
    );
};

export default ProductDetails;
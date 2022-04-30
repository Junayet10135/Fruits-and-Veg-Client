import React from 'react';

const UpComingProduct = ({ upComing }) => {
    const { name, img, price, quantity, Supplier, description } = upComing;
    return (
        <div className='inventory-container mb-5 g-5 col-sm-12 col-md-6 col-lg-4 rounded'>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body text-start">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"><strong>Price: $</strong> {price}</p>
                <p className="card-text"><strong>Quantity:</strong> {quantity}</p>
                <p className="card-text"><strong>Supplier Name:</strong> {Supplier}</p>
                <p><small>{description}</small></p>
                <button className='button d-block mx-auto'> Update</button>
            </div>
        </div>
    );
};

export default UpComingProduct;
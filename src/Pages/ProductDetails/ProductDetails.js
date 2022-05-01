import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { inventoryId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [inventoryId]);
    return (
        <div>
            <h2>hello from : {product.name}</h2>
        </div>
    );
};

export default ProductDetails;
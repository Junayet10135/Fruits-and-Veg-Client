import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const { inventoryId } = useParams();
    const [product, setProduct] = useState({});
    const [isReload, setReload] = useState(false);
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

    const handleUpdate = event=>{
        // event.preventDefault()
        const quantity = event.target.Quantity.value;
        const newQuantity = parseInt(quantity) + parseInt(product?.quantity)
        console.log(newQuantity);

        const updateProduct = {newQuantity}

        if(!quantity){
            toast('no value')
        }
        else{
            const url = `http://localhost:5000/inventory/${inventoryId}`
            fetch(url,{
                method : 'PUT',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(updateProduct)
            })

            .then(res => res.json())
            .then(data =>{
                console.log(data);
                setReload(!isReload);
                event.target.reset();
            })

        }

        
    }
    const delivery = event => {
        const quantity = product?.quantity;
        const updateProduct = {quantity};

        const url = `http://localhost:5000/delivery/${inventoryId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReload(!isReload);
                
            })


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
                        <button onClick={() => delivery(product._id)} className='button d-block mx-auto'> Deliverd</button></div>

                </div>
                <form onSubmit={handleUpdate}>
                    <input type="text" name='Quantity' />
                    <input type="submit" value="update" />
                </form>
            </div>
            <button onClick={handleAllProduct} className='btn btn-primary'>Manage All Products</button>
        </div>
    );
};

export default ProductDetails;
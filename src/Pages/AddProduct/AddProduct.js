import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
       // console.log(data);
        const url = `https://cryptic-escarpment-05910.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
            toast('Product added')
            

    };
    return (
        <div style={{ minHeight: "100vh" }}  className='w-50 mx-auto'>
            <h2>Add Product</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='email ( use current logged in email )' type="email"  {...register("email")} value={user?.email} />
                <input className='mb-2' placeholder='Product name' autoComplete='off' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='price' type="text" {...register("price")} />
                <input className='mb-2' placeholder='quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier' {...register("Supplier", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='photo URL' type="text" {...register("img")} />
                <textarea className='mb-2' placeholder='description' {...register("description")} />
                <input className='button' type="submit" value='add product' />
            </form>
            
        </div>
    );
};

export default AddService;
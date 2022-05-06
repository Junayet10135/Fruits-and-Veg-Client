import React, { useEffect, useState } from 'react';
import UpComingProduct from './UpComingProduct';

const UpComing = () => {
    const [UpComings, setUpComings] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/upcoming')
        .then(res=>res.json())
        .then(data=> setUpComings(data))
    },[])
    return (
        <div className='container'>
            <h2 className='text-center bg-secondary p-2'>Product Should Add By Tomorrow:{UpComings.length}</h2>
            <div className='row mx-auto text-center'>
                {
                    UpComings.map(upComing=> <UpComingProduct
                    key={upComing.id}
                    upComing = {upComing}
                    ></UpComingProduct>)
                }
            </div>
        </div>
    );
};

export default UpComing;
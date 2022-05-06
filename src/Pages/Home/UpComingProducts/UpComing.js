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
            <h2 className='text-center  p-2 section-title'>Product Should Add By Tomorrow</h2>
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
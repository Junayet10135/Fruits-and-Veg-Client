import React, { useEffect, useState } from 'react';
import UpComingProduct from './UpComingProduct';

const UpComing = () => {
    const [UpComings, setUpComings] = useState([]);

    useEffect(()=>{
        fetch('upComing.json')
        .then(res=>res.json())
        .then(data=> setUpComings(data))
    },[])
    return (
        <div className='container'>
            <h2 className='text-center'>About to Coming:{UpComings.length}</h2>
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
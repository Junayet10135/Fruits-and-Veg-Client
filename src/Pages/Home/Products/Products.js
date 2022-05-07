import { useNavigate } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [inventorys] = useInventory();
    const navigate = useNavigate();


    const handleAllProduct=()=>{
        navigate('/inventory');
    }
    return (
        <div className='container'>
            <h2 className='text-center section-title p-2 my-2'>My Inventory</h2>
            <div className='row mx-auto text-center'>
                {
                    inventorys.slice(0,6).map(inventory => <Product
                    key={inventory._id}
                    inventory = {inventory}
                    ></Product>)
                }
            </div>
            <button onClick={handleAllProduct} className=' w-75  d-block mx-auto all-inven-btn mt-2 mb-4'>Manage All Products</button>
        </div>
    );
};

export default Products;
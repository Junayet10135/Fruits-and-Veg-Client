import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:inventoryId' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

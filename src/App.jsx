import './App.css';
import Navbar from './Components/Shared/Navbar.js/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from './Components/AdminPanel/DashboardLayout/DashboardLayout';
import ProductList from './Components/AdminPanel/Products/ProductList/ProductList';
import Dashboard from './Components/AdminPanel/Dashboard/Dashboard';
import CustomerList from './Components/AdminPanel/Customers/CustomerList/CustomerList';
import OrderList from './Components/AdminPanel/Orders/OrderList/OrderList';
import Login from './Components/Shared/Login/Login/Login';
import Register from './Components/Shared/Login/Register/Register';
import Home from './Components/Home/Home/Home';
import Cart from './Components/Cart/Cart/Cart';

import AddCustomer from './Components/AdminPanel/Customers/AddCustomer/AddCustomer';
import RequireAuth from './Components/Shared/Login/RequireAuth/RequireAuth';
import DetailView from './Components/AdminPanel/DetailView/DetailView';
import ProductDetails from './Components/Products/ProductDetails/ProductDetails';
import CheckOut from './Components/CheckOut/CheckOut';
import { ToastContainer } from 'react-toastify';


function App() {


  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<Cart />} >
          <Route element={<Navbar></Navbar>}>
            <Route path='/home' element={<RequireAuth><Home /></RequireAuth> } />
            <Route path='/productdetail' element={<ProductDetails />} />
            <Route path='/checkout' element={<CheckOut />} />
          </Route>
          <Route element={<RequireAuth><DashboardLayout /></RequireAuth>}>
            <Route path='/productlist' element={<ProductList />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='/customerlist' element={<CustomerList />} />
            <Route path='/addcustomer' element={<AddCustomer />} />
            <Route path='/orderlist' element={<OrderList />} />
   
            <Route path='/:id' element={<DetailView />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App

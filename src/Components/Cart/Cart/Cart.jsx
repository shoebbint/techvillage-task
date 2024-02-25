import React from 'react';
import { Outlet } from 'react-router-dom';
import CartDetails from '../CartDetails/CartDetails';

const Cart = () => {
    return (
        <div>
            <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
<Outlet></Outlet>
   
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
  
      {/* <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li> */}
      <CartDetails></CartDetails>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Cart;
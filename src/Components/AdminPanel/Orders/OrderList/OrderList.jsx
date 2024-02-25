import React from 'react';
import UseOrders from '../../../../Hooks/UseOrders';
import { Link } from 'react-router-dom';

const OrderList = () => {
  const [orders,setOrders]=UseOrders();
    return (
        <div>
                              <div className="overflow-x-auto w-full">
        <table className="table table-compact w-full">
          {/* head */}
          <thead>
      <tr>
        <th></th> 
        <th>Order Time</th> 
        <th>order Name</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Quantity</th> 
        <th>Action</th>
      </tr>
    </thead> 
    <tbody>
      {
        orders?.map(order=>
      <tr>
        <th>{order.id}</th> 
        <td>{order.date}</td> 
        <td>{order.userName}</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>{order?.products[0]?.quantity}</td> 
        <td><Link  key={order} to={`/${order.id}`}><button className="btn btn-ghost btn-xs">details</button></Link></td>
      </tr>
)}
          </tbody>


        </table>
      </div>
        </div>
    );
};

export default OrderList;
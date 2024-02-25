import React, { useState } from 'react';
import UseCustomers from '../../../../Hooks/UseCustomers';
import { Link, json } from 'react-router-dom';

const CustomerList = () => {
  const [customers, setCustomers] = UseCustomers();
  const [data, setData] = useState();
  const newData=localStorage.getItem("newCustomer");
  const newCustomer=JSON.parse(newData);
  const updatedCustomers=[...customers,newCustomer];

  console.log(customers);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table table-compact w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
              </th>
              <th>Name</th>
              <th>Address</th>
              <th>Orders</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              updatedCustomers.map(customer =>
                <tr>
                  <th>
                    {customer?.id}
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={customer?.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{customer?.name}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                      </div>
                    </div>
                  </td>
                  <td>
                    {customer?.address}

                  </td>
                  <td>{customer?.orders?.length}</td>
                  <th>
                    <Link  key={customer} to={`/${customer?.id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
                  </th>
                </tr>
              )
            }
          </tbody>
          {/* foot */}


        </table>

      </div>
      <div className="btn-group mt-10">
  <button className="btn">«</button>
  <button className="btn">Page 1</button>
  <button className="btn">»</button>
</div>
    </div>
  );
};

export default CustomerList;
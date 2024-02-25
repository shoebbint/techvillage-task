import React from 'react';
import UseProducts from '../../../../Hooks/UseProducts';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products,setProducts]=UseProducts()
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
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              products.map(product=>
            <tr>
              <th>
   {product.id}
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={product.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product.title}</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
 {product.rating.count}
             
              </td>
              <td>              {product.price}$</td>
              <th>
              <Link  key={product} to={`/${product.id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
              </th>
            </tr>

  )}
          </tbody>
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

export default ProductList;
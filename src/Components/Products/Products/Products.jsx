import React, { useEffect, useState } from 'react';
import UseProducts from '../../../Hooks/UseProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Products = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product._id);
    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

    const [products,setProducts]=UseProducts()
    return (
        <div className=' mb-20 mx-20 grid lg:grid-cols-3 sm:grid-cols-1 gap-10'>
            {
products.map(product=>
            
            <div className="card  glass">
  <figure><img className='h-24' src={product.image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{product.title}</h2>
    <p>How to park your car at your garage?</p>
    <h1 className='text-xl'>{product.price}$</h1>
    <div className="card-actions justify-center">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
    <div className="card-actions justify-end pt-5 ">
<div className='flex flex-row'>
<Link  to={"/productdetail"} className='pt-3 ' href="">View More <FontAwesomeIcon icon={faArrowRight}/></Link>
<button onClick={(e) => addToCart(product)}><label htmlFor="my-drawer-4" className="drawer-button mx-8 btn btn-primary ">Add to Cart<FontAwesomeIcon icon={faCartShopping} size="xl" /></label></button>
</div>
    </div>
  </div>
</div>
)
}
        </div>
    );
};

export default Products;
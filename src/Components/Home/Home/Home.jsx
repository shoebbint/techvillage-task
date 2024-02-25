import React from 'react';
import img1 from '../../../images/banner.jpg'

import Products from '../../Products/Products/Products';
const Home = () => {
    return (
        <div>
                        <div className="hero min-h-screen " style={{ backgroundImage: `url(${img1})`}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <h1 className="mb-5 text-5xl font-bold">Flash Sale Upto 50% off</h1>
      <p className="mb-5">New Online Store</p>
      <button className="btn btn-primary">Shop Now</button>
    </div>
  </div>
</div>
<h1 className='text-2xl my-10'>Products</h1>
<Products></Products>
        </div>
    );
};

export default Home;
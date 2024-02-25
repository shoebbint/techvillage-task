import React from 'react';
import WeeklySales from '../WeeklySales/WeeklySales';

import BestSoldProduct from '../BestSoldProduct/BestSoldProduct';
import Sales from '../Sales/Sales';




const Charts = () => {
    return (
        <div className='grid grid-rows-2 text-left '>
            <div className='p-5 border'>
              <h1>Total sales and revenue</h1>
                <Sales></Sales>
            </div>
            <div className='justify-center items-center grid md:grid-cols-2   border '>
                <div className='p-5'>
                <h1>Weekly Sales</h1>
                    <WeeklySales></WeeklySales>
                </div>
                <div className=''>
                <h1 className=''>Best Selling Products</h1>
                    <BestSoldProduct></BestSoldProduct>
                </div>
            </div>

        </div>
    );
};

export default Charts;
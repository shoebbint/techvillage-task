import React, { useEffect, useState } from 'react';
import axios from 'axios';
const UseOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get('https://shoebbint.github.io/fakedata/orders.json')
            .then(response => {
                // Handle the successful response
                console.log(response.data);
                setOrders(response.data);
            })
            .catch(error => {
                // Handle the error
                console.error(error);
            });
    }, []); // Empty dependency array to execute the effect only once

    return [orders, setOrders];
};

export default UseOrders;
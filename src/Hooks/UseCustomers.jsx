import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('https://shoebbint.github.io/fakedata/Customer.json')
      .then(response => {
        // Handle the successful response
        console.log(response.data);
        setCustomers(response.data);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  }, []); // Empty dependency array to execute the effect only once

  return [customers, setCustomers];
};

export default UseCustomers;

import  { useEffect, useState } from 'react';
import axios from 'axios';
const UseProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      axios.get('https://shoebbint.github.io/fakedata/products.json')
        .then(response => {
          // Handle the successful response
          console.log(response.data);
          setProducts(response.data);
        })
        .catch(error => {
          // Handle the error
          console.error(error);
        });
    }, []); 

    return [products, setProducts];
};

export default UseProducts;
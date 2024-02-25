import React, { useRef, useState } from 'react';
import UseCustomers from '../../../../Hooks/UseCustomers';

const AddCustomer = () => {
    const [customers, setCustomers] = UseCustomers([]);


    const categoryIdRef = useRef('');
    const orderRef = useRef('');
    const customerRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');
    const imgRef = useRef('');
    const addressRef = useRef('');
    const handleAddcustomer = (event) => {
        event.preventDefault();
        const order = orderRef.current.value;
        const name = customerRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const img = imgRef.current.value;
        const address = addressRef.current.value;
        const id = customers?.length+1;
        const customer = {id, name, email, phone, order, img, address };
        console.log(customer);
        const newCustomer=JSON.stringify(customer);
   localStorage.setItem("newCustomer",newCustomer);


        event.target.reset();
    };

    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container  ">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add a Customer</h1>
                    </div>
                    <form onSubmit={handleAddcustomer} >
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="customername" className="leading-7 text-sm text-gray-600">customer Name</label>
                                        <input ref={customerRef} type="text" id="customername" name="customername" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                        <input ref={emailRef} type="email" id="customeremail" name="customeremail" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="phonenumber" className="leading-7 text-sm text-gray-600">Phone number</label>
                                        <input ref={phoneRef} type="tel" id="phonenumber" name="phonenumber" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="orders" className="leading-7 text-sm text-gray-600">Total orders</label>
                                        <input ref={orderRef} type="number" id="orders" name="orders" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="customerimg" className="leading-7 text-sm text-gray-600">Customer Image</label>
                                        <input ref={imgRef} type="file" id="customerimg" name="customerimg" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Customer Address</label>
                                        <textarea ref={addressRef} id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddCustomer;
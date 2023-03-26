import React, { useEffect, useState } from 'react';
import Product from '../singelProduct/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    // console.log(products);
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>

            <div className="order-data-container">
                <h3>Order Summery</h3>
            </div>
        </div>
    );
};

export default Shop;
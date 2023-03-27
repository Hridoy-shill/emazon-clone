import React, { useEffect, useState } from 'react';
import Product from '../SingelProduct/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([])
    const [itemsQuantity, setItemsQuantity] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const addToCard = (product) =>{
        let newItemQuantity = [...itemsQuantity, product]
        setItemsQuantity(newItemQuantity);
    }
    // console.log(products);
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} addToCard={addToCard}></Product>)
                }
            </div>

            <div className="order-data-container">
                <h3 className='order-section-title'>Order Summery</h3>
                <h4>Total Items: {itemsQuantity.length}</h4>
            </div>
        </div>
    );
};

export default Shop;
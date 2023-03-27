import React, { useEffect, useState } from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';
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

            <OrderDetails cart={itemsQuantity}></OrderDetails>
        </div>
    );
};

export default Shop;
import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/Fakedb';
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

    useEffect(()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart);
    }, [])

    const addToCard = (product) =>{
        // console.log(product);
        let newItemQuantity = [...itemsQuantity, product]
        setItemsQuantity(newItemQuantity);
        addToDb(product.id);
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
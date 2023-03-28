import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { addToDb } from '../../utilities/Fakedb';

const Product = (props) => {
    // console.log(props.product);
    const { name, img, price, quantity, ratings, seller, ratingsCount, shipping, stock} = props.product;
    const addToCard = props.addToCard
    
    return (
        <div className='card-container'>
            <div className='card'>
                <img className='card-img' src={img} alt="" />
                <div>
                    <h3>{name}</h3>
                    <h4>Price: {price}$</h4>
                </div>
                <div className='seller-detials'>
                    <p>seller: {seller}</p>
                    <p>ratting: {ratings}</p>
                </div>
            </div>
            <button className='card-btn' onClick={()=>addToCard(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>

        </div>
    );
};

export default Product;
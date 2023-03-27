import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './OrderDetails.css'

const OrderDetails = (props) => {
    const { cart } = props
    console.log(cart);
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price; 
        shipping = shipping + product.shipping
    }
    const tax = total * 5 /100;
    const totalCost = total + shipping + tax;
    return (
        <div>
            <div className="order-data-container">
                <h3 className='order-section-title'>Order Details</h3>
                <p className='shopping-details'>Total Items: {cart.length}</p>
                <p className='shopping-details'>Total Price: ${total}</p>
                <p className='shopping-details'>Total Shipping Charge: ${shipping}</p>
                <p className='shopping-details'>Tax: ${tax}</p>
                <p className='total-cost'>Grand Total: ${totalCost}</p>

                <div className='cart-btn-div'>
                    <button className='clear-btn'>Clear Cart <FontAwesomeIcon icon={faTrash}/></button>
                    <button className='Review-btn'>Review Order <FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
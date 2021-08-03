import React, { createContext } from 'react';
import { products } from './../products';
import './cart.css';
import Contextdata from './Contextdata';

export const CartContext = createContext();

const Cart = () => {

    return (
        <React.Fragment>
            <CartContext.Provider value={products}>
                <Contextdata />
            </CartContext.Provider>
        </React.Fragment>
    )
}
export default Cart;
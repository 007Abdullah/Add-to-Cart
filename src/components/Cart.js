import React, { createContext, useReducer } from 'react';
import { products } from './../products';
import './cart.css';
import Contextdata from './Contextdata';
import { reducer } from './reducer';

export const CartContext = createContext();

const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
};


const Cart = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const removeItem = (id) => {
        console.log('Id recive', id);
        return dispatch({
            type: 'REMOVE_ITEM',
            payload: id,
        });
    }
    return (
        <React.Fragment>
            <CartContext.Provider value={{ ...state, removeItem }}>
                <Contextdata />
            </CartContext.Provider>
        </React.Fragment>
    )
}
export default Cart;
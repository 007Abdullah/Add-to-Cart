import React, { useContext } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import Item from './Items';
import { CartContext } from './Cart';

const Contextdata = () => {
    const { item, clearCart, totalItem } = useContext(CartContext);


    if (item.length === 0) {
        return (
            <React.Fragment>
                <header>
                    <div style={{ width: '80%', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid black', margin: '0 auto', position: 'relative' }}>
                        <div className="header">
                            <img src="./images/backarrow.png" alt="back" />
                            <h3 style={{ marginTop: '35px' }}>Continue Shopping</h3>
                        </div>
                        <div className="second-main">
                            <img src="./images/backet.png" alt="backet" style={{ width: '80px' }} />
                            <p className="paraStyle">0</p>
                        </div>
                    </div>
                </header>
                <section className="main-cart-section">
                    <div style={{ width: '100%', marginBottom: '30px' }}>
                        <h1>Shopping Cart</h1>
                        <br />
                        <p>You Have <span><b>0</b></span> Items In Shopping Cart</p>
                    </div>
                </section>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <header>
                <div style={{ width: '80%', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid black', margin: '0 auto', position: 'relative' }}>
                    <div className="header">
                        <img src="./images/backarrow.png" alt="back" />
                        <h3 style={{ marginTop: '35px' }}>Continue Shopping</h3>
                    </div>
                    <div className="second-main">
                        <img src="./images/backet.png" alt="backet" style={{ width: '80px' }} />
                        <p className="paraStyle">7</p>
                    </div>
                </div>
            </header>
            <section className="main-cart-section">
                <div style={{ width: '100%', marginBottom: '30px' }}>
                    <h1>Shopping Cart</h1>
                    <br />
                    <p>You Have <span><b>{totalItem}</b></span> Items In Shopping Cart</p>
                </div>
                <div className="cart-Item">
                    <div className="center-scroll-part">
                        <Scrollbars>
                            {item.map((eachItem, index) => {
                                return <Item key={eachItem.id} {...eachItem} />
                            })}
                        </Scrollbars>
                    </div>
                </div>
                <div style={{ width: '80%', margin: '0 auto', textAlign: 'end' }}>
                    <h3>Cart Total : <span>2200$</span></h3>
                    <button style={{ margin: '10px', padding: '10px', backgroundColor: 'gray', color: 'black', borderRadius: '10px' }}>Checkout</button>
                    <button style={{ margin: '10px', padding: '10px', backgroundColor: 'red', color: 'black', borderRadius: '10px' }} onClick={clearCart}>CLEAR CART</button>

                </div>
            </section>
        </React.Fragment>
    )
}

export default Contextdata

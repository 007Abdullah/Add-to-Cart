import React from 'react';
import './cart.css';

const Cart = () => {
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
                    <p>You Have <span><b>4</b></span> Items In Shopping Cart</p>
                </div>
                <div className="cart-Item">
                    <div className="center-scroll-part">
                        {/* <Scrollbars>
                            {Object.keys(getproduct).map((eacthItem) => {
                                const product = getproduct[eacthItem]
                                return <CartItem product={product} />
                            })}
                        </Scrollbars>    */}
                    </div>
                </div>
                <div style={{ width: '80%', margin: '0 auto', textAlign: 'end' }}>
                    <h3>Cart Total : <span>2200$</span></h3>
                    <button style={{ margin: '10px', padding: '10px', backgroundColor: 'lightblue', color: 'white', borderRadius: '10px' }}>Checkout</button>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Cart;
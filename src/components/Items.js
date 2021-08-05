import React, { useContext } from 'react';
import { CartContext } from './Cart';


const Items = ({ id, title, description, price, img, quantity }) => {
    console.log(' ITEM id :', title);
    const { removeItem, increment, decrement } = useContext(CartContext)
    return (
        <React.Fragment>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
                <div style={{ width: '20%' }}>
                    <img src={img} alt={title} style={{ width: '100px' }} />
                </div>
                <div style={{ width: '20%' }}>
                    <div style={{ margin: '20px' }}>
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                </div>
                <div style={{ width: '20%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '25px' }}>
                        <img src="./images/minus.png" alt="minus" onClick={() => decrement(id)} />
                        <input type="text" placeholder={quantity} style={{ width: '20px', textAlign: 'center' }} />
                        <img src="./images/plus.png" alt="plus" onClick={() => increment(id)} />
                    </div>
                </div>
                <div style={{ width: '20%' }}>
                    <h1 style={{ textAlign: 'center', marginTop: '23px' }}>{price}</h1>
                </div>
                <div style={{ width: '20%', textAlign: 'center' }}>
                    <img src="./images/close.png" alt="close" style={{ marginTop: '20px' }} onClick={() => removeItem(id)} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Items;
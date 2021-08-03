import React from 'react';

const Items = ({ id, title, description, price, img, amount }) => {
    console.log(' ITEM id :', title);
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
                        <img src="./images/minus.png" alt="minus" />
                        <input type="text" placeholder="2" style={{ width: '20px', textAlign: 'center' }} />
                        <img src="./images/plus.png" alt="plus" />
                    </div>
                </div>
                <div style={{ width: '20%' }}>
                    <h1 style={{ textAlign: 'center', marginTop: '23px' }}>{price}</h1>
                </div>
                <div style={{ width: '20%', textAlign: 'center' }}>
                    <img src="./images/close.png" alt="close" style={{ marginTop: '20px' }} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Items;

export const reducer = (state, action) => {
    if (action.type === 'REMOVE_ITEM') {
        console.log('Action Perform ho rha ahan', state)
        return {
            ...state,
            item: state.item.filter((cuentElm) => {
                return cuentElm.id !== action.payload
            }),
        };
    }
    if (action.type === 'Clear_Cart') {
        return {
            ...state,
            item: []
        }
    }
    if (action.type === 'INCREMENT') {
        let whichClickCart = state.item.map((eachItem, index) => {
            if (eachItem.id === action.payload) {
                return {
                    ...eachItem,
                    quantity: eachItem.quantity + 1
                }
            }
            return eachItem;
        })
        return { ...state, item: whichClickCart };
    }
    if (action.type === 'DECREMENT') {
        let whichClickDegre = state.item.map((eactItems, index) => {
            if (eactItems.id === action.payload) {
                return {
                    ...eactItems,
                    quantity: eactItems.quantity - 1
                }
            }
            return eactItems;
        }).filter((eachItem) => {
            return eachItem.quantity !== 0;
        })
        return { ...state, item: whichClickDegre }
    }

    if (action.type === 'GET_TOTAL') {
        let { totalItem } = state.item.reduce((accum, curVal) => {
            let { quantity } = curVal;
            accum.totalItem += quantity;
            return accum;
        }, { totalItem: 0, });
        return { ...state, totalItem }
    }

    return state;
}


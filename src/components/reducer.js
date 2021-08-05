
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
    if(action.type === 'Clear_Cart'){
        return {
            ...state,
            item:[]
        }
    }
    return state;
}


const initialState = {};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_PRODUCT": {
            return {
                ...state,
                [action.product.id]: {
                    ...action.product,
                    quantity: state[action.product.id] && state[action.product.id].quantity ? state[action.product.id].quantity + 1 : 1,
                },
            };
        }
        case "REMOVE_ITEM": {
            const newCart = { ...state };
            delete newCart[action.product.id];
            return newCart;
        }
        case "CLEAR_CART": {
            return initialState;
        }
        default:
            return state;
    }
}

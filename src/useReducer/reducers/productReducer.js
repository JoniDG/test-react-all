import { types } from "./types"

export const initialProductState = {
    products: [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ],
    cart: [],
    activeProduct: {},
}

export const productReducer = (state, action) => {
    switch (action.type) {
        case types.productShow:
            return {
                ...state,
                activeProduct: state.products.find(product => product.id === action.payload)
            }
        case types.productAddToCart: {
            const newProduct = action.payload;
            const productInCart = state.cart.find(product => product.id === newProduct.id);
            return productInCart ?
                {
                    ...state,
                    cart: state.cart.map(product => product.id === newProduct.id ? { ...product, quantity: product.quantity + 1 } : product)
                }
                : {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }]
                }
        }
        case types.productRemoveFromCart:
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload)
            }
        case types.productRemoveOneFromCart: {
            const productDelete = state.cart.find(product => product.id === action.payload);

            return productDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map(product => product.id === action.payload ? { ...product, quantity: product.quantity - 1 } : product)
                }
                : {
                    ...state,
                    cart: state.cart.filter(product => product.id !== action.payload)
                }
        }
        default:
            return state;
    }
}

import React, { useReducer } from 'react'
import { initialProductState, productReducer } from './reducers/productReducer'
import { types } from './reducers/types';

export const ProductApp = () => {
    const [productState, productDispatch] = useReducer(productReducer, initialProductState)
    const { products, cart, activeProduct } = productState;
    //const [first, setfirst] = useState(second)
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price}
                        <button onClick={() => productDispatch({
                            type: types.productShow,
                            payload: product.id
                        })}>
                            Show
                        </button>
                        <button onClick={() => productDispatch({
                            type: types.productAddToCart,
                            payload: product
                        })}>
                            Add to cart
                        </button>
                    </li>
                ))}
            </ul>


            <h3>Cart</h3>
            <ul>
                {cart &&
                    cart?.map(cartItem => (
                        <li key={cartItem?.id}>
                            {cartItem.name} - {cartItem.price} - {cartItem.quantity}
                            <button onClick={() => productDispatch({
                                type: types.productRemoveFromCart,
                                payload: cartItem.id
                            })}>
                                Remove all
                            </button>
                            <button onClick={() => productDispatch({
                                type: types.productRemoveOneFromCart,
                                payload: cartItem.id
                            })}>
                                Remove 1
                            </button>
                        </li>
                    ))
                }
            </ul>

            <h3>Active Product</h3>
            <p>{activeProduct?.name}</p>
        </div>
    )
}

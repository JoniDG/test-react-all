import React, { useState } from 'react'

const initialCart = [
    {id: 1, title: "Product #1", description: "Soy el producto 1"},
    {id: 2, title: "Product #2", description: "Soy el producto 2"},
];

export const CartProducts = () => {
    const [cart, setCart] = useState(initialCart);

    const updateProduct = (editProduct) => {
        const changedCart = cart.map(product => (
            product.id === editProduct.id
            ? editProduct
            : product
        ))
        setCart(changedCart);
    } 
    const deleteProduct = (id) => {
        const changedCart = cart.filter(product => product.id !== id);
        setCart(changedCart);
    } 
    const addProduct = (newProduct) => {
        newProduct.id = Date.now();
        const changedCart = [
            newProduct,
            ...cart,
        ]
        setCart(changedCart);
    }
    return (
        <div>
            <br></br>
            <br></br>
            <button onClick={()=>addProduct({title: "Nuevo Titulo", description: "Nueva Descripcion"})}>
                Add Product
            </button>
            {
                cart.map((product)=>{
                    return(
                        <div key={product.id}>
                            <h3>ID:{product.id} {product.title}</h3>
                            <p>{product.description}</p>
                            <button onClick={()=> deleteProduct(product.id)}>Delete</button>
                            <button onClick={()=> updateProduct({id: product.id, title: "Soy el Titulo Actualizado", description: "Soy la descripcion Actualizada"})}>Update</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

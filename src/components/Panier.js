import React, { useState, useEffect } from 'react';

const Panier = (props) => {

    const [listProducts, setListProducts] = useState([{
        name: "Apple mouse",
        price: 50,
        endurance: "5 years",
        quantity: 1
    }, {
        name: "Apple Keyboard",
        price: 30,
        endurance: "4 years",
        quantity: 1
    }, {
        name: "Apple MacBook",
        price: 1400,
        endurance: "10 years",
        quantity: 1
    }])

    const incrementQuantity = (productIndex) => {
        let newProducts = [...listProducts]
        newProducts[productIndex].quantity++
        setListProducts(newProducts)
    }

    const decrementQuantity = (productIndex) => {
        let newProducts = [...listProducts]
        if (newProducts[productIndex].quantity > 1) {
            newProducts[productIndex].quantity-- // on accède au "productIndex"-ième élément de la liste newProducts et on décrémente sa quantité
            setListProducts(newProducts)
        }
    }

    const reinitialateNumberOne = () => {
        let newProducts = [...listProducts]
        for (let i = 0; i < newProducts.length; i++) {
            newProducts[i].quantity = 1;
        }
        setListProducts(newProducts)
    }

    const emptyItemList = () => {
        setListProducts([])
    }

    const removeLastItem = () => {
        let newProducts = [...listProducts]
        newProducts.pop()
        setListProducts(newProducts)
    }

    const deleteProduct = (productIndex) => {
        let newProducts = [...listProducts]
        if (productIndex > -1) {
            newProducts.splice(productIndex, 1);
        }
        setListProducts(newProducts)
    }


    const resetProducts = () => {
        setListProducts([{
            name: "Apple mouse",
            price: 50,
            endurance: "5 years",
            quantity: 1
        }, {
            name: "Apple Keyboard",
            price: 30,
            endurance: "4 years",
            quantity: 1
        }, {
            name: "Apple MacBook",
            price: 1400,
            endurance: "10 years",
            quantity: 1
        }])
    }

    return (

        <div style={{ marginTop: "100px" }}>

            <button onClick={() => reinitialateNumberOne()}>Reset to one</button>
            <button onClick={() => emptyItemList()}>Empty list</button>
            <button onClick={() => removeLastItem()}>Remove last</button>
            <button onClick={() => resetProducts()}>Previous list</button>


            {listProducts.map((product, index) => (

                <div key={index} >
                    <h4>Name: {product.name}</h4>
                    <h4>Unit price: {product.price}€</h4>
                    <h4>Endurance: {product.endurance}</h4>
                    <h4>Quantity: {product.quantity}</h4>
                    <h4>Total price: {product.price * product.quantity}€</h4>
                    <button onClick={() => incrementQuantity(index)}>+</button>
                    <button onClick={() => decrementQuantity(index)}>-</button>
                    <button onClick={() => deleteProduct(index)}>Delete</button>
                    <hr></hr>
                </div>

            )

            )}
        </div>

    )
}

export default Panier
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Cart = () => {

    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()

    const handleRemove = (item) => {
        dispatch({ type: "DELITEM", payload: item })
    }

    const handleAdd = (item) => {
        dispatch({ type: "ADDITEM", payload: item })
    }

    const handleSub = (item) => {
        dispatch({ type: "SUBITEM", payload: item })
    }

    const handleClear = () => {
        dispatch({ type: "CLEAR" })
    }

    const total = () => {
        let price = 0
        state.forEach((item) => {
            price += item.price * item.qty
        })
        return price
    }

    const totalQty = () => {
        let qty = 0
        state.forEach((item) => {
            qty += item.qty
        })
        return qty
    }


    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }

    const cartItems = (cartItem) => {
        return (
            <>
                <div className="col-md-4">
                    <h4 className="text-uppercase text-black-50">Cart ({totalQty()})</h4>

                </div>



                <div className="px-4 my-5 bg-light rounded-3 py-5">


                    <div className="container py-4">
                        <div className="row justify-content-center">



                            {cartItem.map((item) => {
                                return (
                                    <div className="col-md-4">
                                        <div className="card mb-4" key={item.id}>
                                            <img src={item.image} className="card-img-top" alt={item.title} height="250px" width="400px" />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text lead fw-bold">${item.price}</p>
                                                <button className="btn btn-outline-dark me-4" onClick={() => handleAdd(item)}> + </button>
                                                <button className="btn btn-outline-dark me-4" onClick={() => handleSub(item)}> - </button>
                                                <button className="btn btn-outline-dark me-4" onClick={() => handleRemove(item)}> Remove </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </>)
    }


    return (
        <>
            {state.length !== 0 ? cartItems(state) : emptyCart()}
        </>
    )

}


export default Cart

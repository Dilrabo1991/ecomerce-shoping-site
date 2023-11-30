import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
const ProductId = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch({ type: "ADDITEM", payload: product })
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct()
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container my-5">
                <div className='row py-4'>
                    {
                        loading ? <Loading /> : <div className="col-md-12 mb-5 d-flex justify-content-space-between align-items-center"
                            key={product.id}>
                            <div className="col-md-5 d-flex justify-content-center align-items-center">

                                <img src={product.image} alt={product.title} height="400px" width="400px" />
                            </div>
                            <div className="col-md-6">
                                <h4 className="text-uppercase text-black-50">{product.category}</h4>
                                <h2 className="text-uppercase text-black-50 display-5">{product.title}</h2>
                                <p className="lead fw-bolder">
                                    Rating : {product.rating && product.rating.rate}
                                    <i className="fa fa-star"></i>
                                </p>
                                <p className="lead">{product.description}</p>
                                <p className="lead fw-bolder display-6 my-4"> Price ${product.price}</p>
                                <NavLink to='/cart' className="btn btn-outline-dark me-2" onClick={() => addProduct(product)}>Add to Cart</NavLink>
                                <NavLink className="btn btn-dark me-2">Go to Cart</NavLink>
                            </div>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default ProductId

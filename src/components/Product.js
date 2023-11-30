import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
const Product = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentDidMount = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch('https://fakestoreapi.com/products')
            if (componentDidMount) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                console.log(filter);
            }
            return () => {
                componentDidMount = false;
            }
        }
        getProducts()
    }, [])

    return (
        <div className='container my-5 mx-5' >
            <div className='row'>
                <div className="col-md-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">
                        Latest Products </h1>
                    <hr />
                </div>

            </div>
            <div className="buttons d-flex justify-content-center mb-5 pb-5 ">
                <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data.filter((item) => item.category === "men's clothing"))}>Men`s Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data.filter((item) => item.category === "women's clothing"))}>Wumen`s Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data.filter((item) => item.category === "jewelery"))}>Juwelery</button>
                <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data.filter((item) => item.category === "electronics"))}>Electronics</button>
            </div>
            <div className="row d-flex justify-content-center ">
                {
                    loading ? <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>

                    </div> : filter.map((product) => {
                        return (
                            <>
                                <div className="col-md-3 mb-4">
                                    <div className="card h-100 text-center p-4" key={product.id}>
                                        <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                            <p className="card-text lead fw-bold">${product.price}</p>
                                            <NavLink to={`/product/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product

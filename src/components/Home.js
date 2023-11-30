import Navbar from "./Navbar"
import Product from "./Product"


const Home = () => {
    return (
        <div classNameName='hero' >
            <div className="card bg-dark text-white border-0">
                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img" alt="..." height={"550px"} />
                <div className="card-img-overlay ">
                    <div className='container '>

                        <h5 className="card-title display-4 fw-bold mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>


                </div>
            </div>
            <Product />
        </div>
    )
}

export default Home

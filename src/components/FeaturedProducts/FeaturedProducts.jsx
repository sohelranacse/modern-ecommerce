// import { CardTravel, PlusOne } from '@material-ui/icons'
import React from 'react'
import './FeaturedProducts.scss'
import {products} from '../../Products'
import SingleProduct from '../SingleProduct/SingleProduct'
import Title from '../Title/Title'

const FeaturedProducts = () => {
    return (
        <section className="products_section">
            <div className="container">
                {/* <h1 className="text-center my-3 title">Featured Products</h1> */}
                <Title title={"Featured Products"}/>
                <div className="row">
                {
                    products.filter(e=>e.type==="featured")?.map((product, i) => {
                        return (
                            <div key={i} className="col-lg-3 col-md-4 col-6">
                                <SingleProduct product={product}/>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts

import React from 'react'
import Title from '../Title/Title'
import './Categories.scss'
import { categories } from '../../Categories'

const Categories = () => {
    return (
        <section className="category_section">
            <div className="container">
                {/* <div className="title">FEATURED CATEGORIES</div> */}
                <Title title={"TOP CATEGORIES"} className="mb-3"/>
                <div className="row" style={{height:"400px"}}>
                    <div className="col-md-6" style={{padding:"10px"}}>
                        <div className="category">
                            <div className="background_image" style={{ background: categories[0].image}}>
                            <div className="info">
                                <p>{categories[0].name}</p>
                                <span>{categories[0].products} Products</span>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row h-100">
                            {
                                categories.slice(1,5).map((item, i) => {
                                    return (
                                        <div key={i} className="col-6 col-md-6 p-2">
                                            <div className="category">
                                                <div className="background_image" style={{background:item.image}}>
                                                <div className="info">
                                                    <p>{item.name}</p>
                                                    <span>{item.products} Products</span>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories

import React, { useState } from 'react'
import { Slider } from '@material-ui/core'
import { UilFilter, UilAngleDown } from '@iconscout/react-unicons'
import './Shop.scss'
import {products} from '../../Products'
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import { Pagination } from '@mui/material';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";

const Shop = () => {
    const [value, setValue] = React.useState([0, 8110]);
    const [activeFilter, setActiveFilter] = React.useState(false);

    const searchCategory = useParams()

    const handleChange = (event, newValue) => {
      setValue(newValue);
      console.log(newValue);
    };

    const [page, setPage] = useState(1)
    const totalPages = Math.ceil(products.length / 9)
    
    const handlePagination = (event, value) => {
        setPage(value)
        window.scrollTo({
            top: 0,
            behaviour:'auto',
        })
    }

    return (
        <section className="shop_page container">
            <Helmet>
                <title>Shop Page</title>
            </Helmet>
            <div className="row">
                <h1 className="shop_title">{searchCategory.name?searchCategory.name.toLocaleUpperCase() : 'SHOP' } </h1>
                <hr />

                <div>
                <div className="show_filter_mobile" onClick={()=>setActiveFilter(!activeFilter)}>
                    <UilFilter />
                    <p>Filter</p>
                    <UilAngleDown />
                </div>
                </div>

                <div className="col-md-3">
                    <div className={activeFilter?"product_filter active":"product_filter"}>
                        <div className="filter_by_price">
                            <div className="filter_title">
                                FILTER BY PRICE
                            </div>

                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={8110}
                                className="price_range"
                            />

                            <div className="price_range_label">
                                Price: <span>$0-$8,110</span>
                            </div>
                        </div>

                        <hr />
                        
                        <div className="filter_by_category">
                            <div className="filter_title">
                                FILTER BY CATEGORY
                            </div>
                            <ul>
                                <li><Link to="/shop/watch">Watch</Link><span>({products.filter(e=>e.category.toLocaleLowerCase()==='watch')?.length})</span></li>
                                <li><Link to="/shop/mobile">Mobile</Link><span>({products.filter(e=>e.category.toLocaleLowerCase()==='mobile')?.length})</span></li>
                                <li><Link to="/shop/leptop">Leptop</Link><span>({products.filter(e=>e.category.toLocaleLowerCase()==='leptop')?.length})</span></li>
                                <li><Link to="/shop/headphone">Headphone</Link><span>({products.filter(e=>e.category.toLocaleLowerCase()==='headphone')?.length})</span></li>
                                <li><Link to="/shop/camera">Camera</Link><span>({products.filter(e=>e.category.toLocaleLowerCase()==='camera')?.length})</span></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="col-md-9 row">
                {
                    !searchCategory.name?(
                        products.slice((page-1)*9 , 9*page)?.map((product, i) => {
                            return (
                                <div key={i} className="col-md-4 col-6">
                                    <SingleProduct product={product}/>
                                </div>
                            )
                        })
                    ):(
                        products.filter(e=>e.category.toLocaleLowerCase()===searchCategory.name.toLocaleLowerCase())?.map((product, i) => {
                            return (
                                <div key={i} className="col-md-4 col-6">
                                    <SingleProduct product={product}/>
                                </div>
                            )
                        })
                    )
                    }
                    {
                    searchCategory.name?(
                        <></>
                    ):(
                        <div className="pagination my-4">
                            <Pagination color="primary" page={page} onChange={handlePagination} count={totalPages} shape="rounded" />
                        </div>
                    )
                    }
                
                </div>
            </div>
        </section>
    )
}

export default Shop

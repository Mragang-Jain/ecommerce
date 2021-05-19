import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addtocart} from '../actions/action'
import {Link } from 'react-router-dom'
import './product.css'

const Productcom = () => {
    const Renderlist = useSelector((state) => state.allProducts.products);
     const dispatch = useDispatch()
    const Handleclick = (item) =>{
      console.log("err", item)
      dispatch(addtocart(item))
     
    }
    return (
        <div className='card-list'>
         { Renderlist && Renderlist.map((item) =>{
              const {id, title , price  , image , category } = item
             return (
                <div className='card-container' key={id}>
               <h3>{category.toUpperCase()}</h3>
               <Link to={`/product/${id}`}>
               <img className='pic' src = {image} alt={title} />
               </Link>
               <h4 style={{padding:"5px" , margin:"5px"}}>{title}</h4>
               <h1>{'\u20B9'}{price}</h1>
               <button onClick={()=>Handleclick(item)} className='butt'><b> Add To Cart </b></button>
               </div>
             )
         })}
       </div>
    )
}

export default Productcom

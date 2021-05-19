import React ,{useEffect , useState} from 'react'
import {useParams} from 'react-router-dom' 
import axios from 'axios'
import { addtocart} from '../actions/action'
import {useDispatch } from 'react-redux'
import './productdetail.css'


const Productdetails = () => {
  const [product , setProduct] = useState('')
    const  { productId }  = useParams();
    // console.log("CHXVA", productId)
    const dispatch = useDispatch()
    const Handleclick = (item) =>{
      console.log("err", item)
      dispatch(addtocart(item))
     
    }
    // const fetchProductDetail = async (id) => {
    //     console.log("IXAI",id)
    //     const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    //       .catch((err) => {
    //         console.log("Err: ", err);
    //       });
    //     dispatch(selectedProduct(response.data));
    //   };

    const fetchapi = async () =>{
      await axios.get(`https://fakestoreapi.com/products/${productId}`)
          .catch((err) => {
            console.log("Err: ", err);
          }).then((data)=>{ setProduct(data.data)}) 
    }

    useEffect(() => {
      fetchapi()
      })
    console.log("product",product )
    return (
        <div className='product'>
           <h1>{(product?.category)?product.category.toUpperCase():''}</h1>
          <div style={{width:"80%" , paddingTop:"40px" }}>
         <div className='immage' >
         <img className='pic' src={product?.image} alt={product?.title}/>
         </div>
         <div className='deatil' >
         <h3 style={{padding:"30px"}}>{product?.title}</h3>
         <h4>{product?.description}</h4>
         <h1>{'\u20B9'}{product?.price}</h1>
         <button onClick={()=>Handleclick(product)} style={{backgroundColor:"#D82E2F", border: "2px solid", padding:"10px" , margin:"10px" , width:"120px"}}>Add To Cart</button>
         </div>
         </div>
        </div>
    )
}

export default Productdetails

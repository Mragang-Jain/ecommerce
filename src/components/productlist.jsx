import React , {useEffect} from 'react'
import axios from 'axios'
import {useDispatch  } from 'react-redux'
import {setProducts} from '../actions/action'
import Productcom from './productcom'

const Productlist = () => {
    const dispatch = useDispatch()
    const fetchdata = async () =>{
       const list = await axios.get("https://fakestoreapi.com/products").catch(err =>{
           console.log(err)
       })
       dispatch(setProducts(list.data))
    }

    useEffect(()=>{
        fetchdata()

    })

    return (
        <div style={{padding:"20px", margin:"30px"}}>
        <Productcom />
        </div>
    )
}

export default Productlist

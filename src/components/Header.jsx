import React from 'react'
import {useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import './header.css'
import {logout} from '../utils'

function Header()
{
    const history = useHistory();
    console.log("Histort", history )

    const routeChange = ()  =>{
        let path = `/cartdetail`
        history.push(path)
    }
    const cartlist = useSelector((state) => state.addtocart);
    
    const Handlesignout = () =>{
        logout()
        history.replace('/')
        window.location.reload()

    }
    console.log("cartlist",cartlist)
    return(
        // <div class="sticky-top">...</div>
        <div className="sticky-top">
              <button style={{marginLeft:"1000px", backgroundColor:"#22CB5C" , cursor:"pointer"}} onClick={Handlesignout}>Signout</button>
             <div className="add-to-cart" >
                <img onClick={routeChange} alt="cartimg" src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
                <span className="cart-count">{cartlist.length}</span>
            </div>
        </div>
    )
}

export default Header
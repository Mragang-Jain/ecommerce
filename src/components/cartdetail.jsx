import React, {useState , useEffect} from 'react'
import { useSelector} from 'react-redux'

const Cartdetails = () => {
    const [List , setList] = useState(true)
    const cartdetail = useSelector((state) => state.addtocart);
    console.log("cartdetail", cartdetail)
    const Emptycard = () =>{
        return (
            <h1>Item Not found In Cart</h1>
        )
    }
    // const totlsum = () =>{
    //    
    //     cartdetail.map((item) =>{
    //         sum = sum + item.price

    //     })
    // }
    let sum = 0
    
    useEffect(()=>{
     if(cartdetail.length){
         setList(false)
     }
    }, [cartdetail])
    const Total = ( val) =>{
        return(
            <div className="container">
            <div className="row" style={{width:"90%", paddingTop:"10px"}}>
            <div className="col-sm-4" style={{position:"relative"}}>
                <h1 style={{backgroundColor:"#00D84A"}}>Total</h1>
                </div>
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4">
                    <h1 style={{backgroundColor:"#38CC77"}}>{val.toFixed(2)}</h1>
                </div>
             </div>
           </div>
        )
    }
    return (
        <div>
            <div style={{marginTop:"100px"}}>
            {List &&  Emptycard() }
            </div>
            {cartdetail &&  cartdetail.map(item=>{
                sum = sum +item.price
               return(
                   <div>
                     <div className="container">
                        <div className="row" style={{width:"90%", padding:"10px"}}>
                           <div className="col-sm-4"><img  style={{width:"150px" , height:"120px"}}  className='cart-img' src = {item.image} alt={item.title} /></div>
                           <div className="col-sm-4" style={{paddingTop:"5px"}}>
                               <h6>{item.title}</h6>    
                            </div>
                          <div className="col-sm-4" style={{paddingTop:"5px"}}>
                               <h1 style={{backgroundColor:"red"}}>{item.price}</h1>
                           </div>
                        </div>
                       </div>
                   </div>
               )
            })}
            {cartdetail && Total(sum)}
        </div>
    )
}

export default Cartdetails

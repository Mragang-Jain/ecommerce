import {combineReducers} from 'redux'
import  { productReducer, selectedProductReducer , addtocart  }  from './reducer'


const reducer = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    addtocart:addtocart
})

export default reducer


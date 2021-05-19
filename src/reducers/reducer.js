
const initialstate = {
    products:[],
    cart:[],
    loading:false
}

export const productReducer = ( state = initialstate , action) =>{
       switch (action.type) {
           case "SET_PRODUCTS":
                 return{
                     ...state,
                     products:action.payload
                 }
            default:
                return state;
               
       }

}

export const selectedProductReducer = ( state = initialstate , action ) =>{
      switch (action.type) {
          case "SELECTED_PRODUCT":
              return {
                  ...state,
                  data : action.payload
              }
          case "REMOVE_SELECTED_PRODUCT":
              return {
              }
          default:
              return state
      }

}

export const addtocart = (state = [] , action ) =>{
    switch (action.type) {
     case "ADD_TO_CART":
        return [
            ...state,
            {...action.payload}
        ]
     default:
              return state

    }
}
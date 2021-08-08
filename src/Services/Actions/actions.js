import { Add_to_cart } from "../Constants/Constants"
import {remove_from_cart} from "../Constants/Constants"


const Add_to_Cart = (data) => {
    return{type:{Add_to_cart},
    data: data}    
     
}

const Remove_From_Cart = (data) => {
    return {
        type: remove_from_cart,
        data:data
    }
}
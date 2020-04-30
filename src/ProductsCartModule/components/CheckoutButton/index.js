import React from "react"
import {observable} from "mobx"
import { observer } from "mobx-react"


@observer
class CheckoutButton extends React.Component{
    
    clearCart = () => {
        const { clearCart } = this.props
        clearCart();
    }
    
    
    
    render(){
        const {noOfProductsInCart} = this.props
        
        const disable = noOfProductsInCart ? false : true
        
        return(
            <button onClick={this.clearCart} disabled={disable}>CheckoutButton</button>
            )
    }
}



export default CheckoutButton;
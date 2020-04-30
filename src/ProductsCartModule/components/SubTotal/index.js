import React from "react"
import {observable} from "mobx"
import { observer } from "mobx-react"

@observer
class SubTotal extends React.Component{
    
    
    
    render(){
        const { totalCartAmount } = this.props
       
        return(
            <div>Subtotal {totalCartAmount}</div>
            )
    }
}


export default SubTotal;


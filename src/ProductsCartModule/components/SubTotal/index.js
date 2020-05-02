import React from "react"
import {observable} from "mobx"
import { observer } from "mobx-react"

@observer
class SubTotal extends React.Component{
    
    
    
    render(){
        const { totalCartAmount } = this.props
       
        return(
            <div className="flex flex-row w-full my-2 font-semibold justify-between ">
                <div>Subtotal</div>
                <div>{totalCartAmount}</div>
            </div>
            )
    }
}


export default SubTotal;


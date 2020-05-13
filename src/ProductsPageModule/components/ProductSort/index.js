import tw from "tailwind.macro"
import React from "react"
import {observer} from "mobx-react"


@observer
class ProductSort extends React.Component{
    
    render(){
        
        const { onChangeSortBy } = this.props
        return (
                <select onChange={onChangeSortBy}>
                    <option>Select</option>
                    <option value="ASCENDING">Lowest to Highest</option>
                    <option value="DESCENDING">Highest to Lowest</option>
                </select>
            )
    }
}


export default ProductSort;
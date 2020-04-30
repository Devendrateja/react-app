import tw from "tailwind.macro"
import React from "react"
import {observer} from "mobx-react"


@observer
class ProductSort extends React.Component{
    
    onChangeSortBy = (event) => {
        const { onChangeSortBy } = this.props
        const sortingType = event.target.value
        onChangeSortBy(sortingType)
    }
    
    render(){
        
        const { products,onChangeSortBy } = this.props
        return (
                <select onChange={this.onChangeSortBy}>
                    <option>Select</option>
                    <option value="ASCENDING">Lowest to Highest</option>
                    <option value="DESCENDING">Highest to Lowest</option>
                </select>
            )
    }
}


export default ProductSort;
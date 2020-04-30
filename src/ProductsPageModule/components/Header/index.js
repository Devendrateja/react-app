import tw from "tailwind.macro"
import React from "react"
import ProductSort from "../ProductSort"
import {observer} from "mobx-react"


@observer
class Header extends React.Component{
        
    render(){
        const { totalNumberOfProductsDisplayed, onChangeSortBy , products} = this.props
       return(
            <div className="flex flex-row w-full justify-between p-1 m-1 border px-4">
                <div>{totalNumberOfProductsDisplayed} product(s) found</div>
                <div>
                    <span className="px-1">Sort price by:</span>
                    <ProductSort onChangeSortBy={onChangeSortBy} products={products}/>
                </div>
            </div>
            )
        
    }
}



export default Header;
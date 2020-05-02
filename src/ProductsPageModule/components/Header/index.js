import tw from "tailwind.macro"
import React from "react"
import {observer} from "mobx-react"
import ProductSort from "../ProductSort"
import {HeaderEl } from "./styledComponents.js"


@observer
class Header extends React.Component{
        
    render(){
        const { totalNumberOfProductsDisplayed, onChangeSortBy , products} = this.props
       return(
            <HeaderEl>
                <div>{totalNumberOfProductsDisplayed} product(s) found</div>
                <div>
                    <span className="px-1">Sort price by:</span>
                    <ProductSort onChangeSortBy={onChangeSortBy} products={products}/>
                </div>
            </HeaderEl>
            )
        
    }
}



export default Header;
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import React from "react"
import {withRouter} from "react-router-dom"
import {observer,inject} from "mobx-react"
import { observable } from "mobx"
import {clearUserSession,setAccessToken,getAccessToken} from "../../AuthenticationModule/utils/StorageUtils"
import { CartRouter } from "../../ProductsCartModule/routes/CartRoute"
import ProductCart from "../../ProductsCartModule/components/index.js"

import NoDataView from "../../components/common/NoDataView"
import LoadingWrapperWithFailure from "../../components/common/LoadingWrapperWithFailure"

import { E_COMMERCE_PRODUCTS_PAGE_PATH } from "../constants/RouteConstants"

import Header from "./Header"
import ProductList from "./ProductList/index"
import SizeFilter from "./SizeFilter"
import { CartNavigator,CartContainer,Body,SizeFilterEl , SignOutButton,SignOutEl} from "./styledComponents.js"
import {FiShoppingCart} from "react-icons/fi" 



@observer
class ProductsPage extends React.Component{
    
    componentDidMount(){
        this.props.getProductList()
    }
    
    render(){
     
        const { signOut, redirectTo,sizes ,onSelectSize, createProduct, products, onChangeSortBy, getProductListAPIStatus, getProductListAPIError,
        getProductList, cartProductList, onRemoveCartItem,  getProductDetailsById, totalCartAmount, clearCart, noOfProductsInCart ,
            renderSuccessUI
        } = this.props
        const totalNumberOfProductsDisplayed = products.length
       
        const access_token = getAccessToken()
        if(access_token){
        return (
            <Body>
                <CartContainer>
                <CartRouter cartProductList={cartProductList}
                        products={products}
                        onRemoveCartItem={onRemoveCartItem}
                        getProductDetailsById={getProductDetailsById}
                        totalCartAmount={totalCartAmount}
                        clearCart={clearCart}
                        noOfProductsInCart={noOfProductsInCart}
                />
                </CartContainer>
              
                <SignOutEl>
                  <SignOutButton data-testid="sign-out-button"  onClick={signOut}>Sign out</SignOutButton>
                </SignOutEl>
               
                <div className="flex">
                    <SizeFilterEl>
                        <SizeFilter sizes={sizes} onSelectSize={onSelectSize} />
                    </SizeFilterEl>
                 
                    <div className="flex flex-col my-4 w-3/4 border">
                        <Header onChangeSortBy={onChangeSortBy} totalNumberOfProductsDisplayed={totalNumberOfProductsDisplayed} />
                          <LoadingWrapperWithFailure  
                            apiError={getProductListAPIError}
                            apiStatus={getProductListAPIStatus} 
                            renderSuccessUI={renderSuccessUI}
                            onRetryClick={getProductList}
                        />
                    </div>
                    
                </div>
            </Body>
          )
        }
        
        return redirectTo();
        
       
  } 
}


export default ProductsPage;
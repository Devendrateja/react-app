import tw from "tailwind.macro"
import styled from "@emotion/styled"
import React from "react"
import {withRouter} from "react-router-dom"
import {observer,inject} from "mobx-react"
import { observable } from "mobx"
import {clearUserSession,setAccessToken,getAccessToken} from "../../AuthenticationModule/utils/StorageUtils"

import ProductCart from "../../ProductsCartModule/components/index.js"

import NoDataView from "../../components/common/NoDataView"
import LoadingWrapperWithFailure from "../../components/common/LoadingWrapperWithFailure"


import Header from "./Header"
import ProductList from "./ProductList/index"
import SizeFilter from "./SizeFilter"
import { CartNavigator,CartContainer } from "./styledComponents.js"
import {FiShoppingCart} from "react-icons/fi" 



@inject('productStore', 'cartStore')
@observer
class ProductsPage extends React.Component{
  //@observable cartList
    
    componentDidMount(){
        this.props.productStore.getProductList()
    }
    
    
    renderSuccessUI = observer(() => {
        const { products, createProduct } = this.props.productStore
        const { onClickAddToCart } = this.props.cartStore
        
        if(products.length === 0){
            return <NoDataView />
        }
        
        return <ProductList onClickAddToCart={onClickAddToCart } products={products} createProduct={createProduct}/>
    })
    
    
    
    signOut = () => {
        clearUserSession()
        const {history} = this.props
        history.push('/sign-in')
    }

    
    
    
   render(){
        const {createProduct,products,onSelectSize,onChangeSortBy,getProductListAPIStatus,getProductListAPIError,getProductList} = this.props.productStore   
        const { cartProductList, onRemoveCartItem, getProductDetailsById,totalCartAmount, clearCart,noOfProductsInCart } = this.props.cartStore
        const totalNumberOfProductsDisplayed = products.length
  //      this.cartList = cartProductList
       

       
        const access_token = getAccessToken()
        if(access_token){
        return (
            <div className="flex flex-col border w-screen relative">
               
                <CartContainer>
                    <ProductCart cartProductList={cartProductList}
                        products={products}
                        onRemoveCartItem={onRemoveCartItem}
                        getProductDetailsById={getProductDetailsById}
                        totalCartAmount={totalCartAmount}
                        clearCart={clearCart}
                        noOfProductsInCart={noOfProductsInCart}
                    />
                </CartContainer>
              
                <div className="flex  border">
                   <button data-testid="sign-out-button"  onClick={this.signOut} className="p-1 m-4 border border-black border-solid">Sign out</button>
                </div>
               
                <div className="flex">
                    <div className="border p-1 m-4 w-1/4">
                        <SizeFilter onSelectSize={onSelectSize} />
                    </div>
                 
                    <div className="flex flex-col my-4 w-3/4 border">
                        <Header onChangeSortBy={onChangeSortBy} totalNumberOfProductsDisplayed={totalNumberOfProductsDisplayed} />
                          <LoadingWrapperWithFailure  
                            apiError={getProductListAPIError}
                            apiStatus={getProductListAPIStatus} 
                            renderSuccessUI={this.renderSuccessUI}
                            onRetryClick={getProductList}
                        />
                    </div>
                    
                </div>
            </div>
           )
        }
        else{
            const {history} = this.props
            const signinPage = history.push('/sign-in')
            return (
                    <div>{signinPage}</div>
                )
         }
       
   } 
}


export default ProductsPage;
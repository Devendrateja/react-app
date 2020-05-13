import React from "react"
import {observer,inject} from "mobx-react"
import { Redirect } from "react-router-dom"
import { observable } from "mobx"
import {withRouter} from "react-router-dom"
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {clearUserSession,setAccessToken,getAccessToken} from "../../../AuthenticationModule/utils/StorageUtils"
import NoDataView from "../../../components/common/NoDataView"
import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperWithFailure"
import ProductList from "../../components/ProductList/index"
import { AddProductToastMessage } from "../../components/ToastMessages"
import ProductsPage from "../../components"


@inject("productStore", "cartStore")
@observer
class ProductsPageRoute extends React.Component{
    @observable sizes = [
        {
            size:'XS',
            isClicked:false
        }, 
        {
            size:'S',
            isClicked:false
        },
        {
            size:'M',
            isClicked:false
        }, 
        {
            size:'L',
            isClicked:false
        }, 
        {
            size:'XL',
            isClicked:false
        }, 
        {
            size:'XXL',
            isClicked:false
        }]
    
    
    toastMessage = () =>{
        return  AddProductToastMessage()
    }
    
        
    onClickAddToCartButton = (product) => {
        const { onClickAddToCart} = this.props.cartStore
        toast.warn(this.toastMessage())
        onClickAddToCart(product);
    }
    
        
        
    onSelectSize = (selectedSize) => {
        const {onSelectSize} = this.props.productStore
        this.sizes.find(eachSize => {
            if(eachSize.size === selectedSize){
                eachSize.isClicked = !eachSize.isClicked
            }
        })
        onSelectSize(selectedSize);
    }
    
    onChangeSortBy = (event) => {
        const { onChangeSortBy } = this.props.productStore
        const sortingType = event.target.value
        onChangeSortBy(sortingType)
    }
    
    
        
    renderSuccessUI = observer(() => {
        const { products, createProduct } = this.props.productStore
        const { onClickAddToCart } = this.props.cartStore
        
        if(products.length === 0){
            return <NoDataView />
        }
        
        return <ProductList onClickAddToCart={onClickAddToCart } products={products} createProduct={createProduct} onClickAddToCartButton={this.onClickAddToCartButton}/>
    })

        
    signOut = () => {
        clearUserSession()
        this.redirectToSignInPage()
    }


    redirectToSignInPage = () => {
        const { history } = this.props
        const signinPage = history.push('/ecommerce-store/sign-in/')
        return (
            <div>{signinPage}</div>
            )
    }
    
    
    
    render(){
        const {createProduct,products,getProductListAPIStatus,getProductListAPIError,getProductList} = this.props.productStore   
        const { cartProductList, onRemoveCartItem, getProductDetailsById,totalCartAmount, clearCart,noOfProductsInCart,onClickAddToCart  } = this.props.cartStore
        return(
            <ProductsPage signOut={this.signOut} redirectTo={this.redirectToSignInPage} sizes={this.sizes} onSelectSize={this.onSelectSize} products={products} 
            onChangeSortBy={this.onChangeSortBy} createProduct={createProduct} onClickAddToCart={onClickAddToCart}
            getProductListAPIStatus={getProductListAPIStatus} getProductListAPIError={getProductListAPIError}
            getProductList={getProductList} cartProductList={cartProductList} onRemoveCartItem={onRemoveCartItem}
            getProductDetailsById={getProductDetailsById} totalCartAmount={totalCartAmount} clearCart={clearCart} 
            noOfProductsInCart={noOfProductsInCart}
            renderSuccessUI={this.renderSuccessUI}
            />
            )
    }
}





export default ProductsPageRoute;
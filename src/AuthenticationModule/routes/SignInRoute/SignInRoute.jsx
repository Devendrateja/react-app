import React from "react"
import { observable, action } from "mobx"
import { observer, inject } from "mobx-react"
import { API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'
import { Redirect } from "react-router-dom"

import SignInPage from "../../components"
import { getAccessToken } from "../../utils/StorageUtils"
import { E_COMMERCE_PRODUCTS_PAGE_PATH } from "../../../ProductsPageModule/constants/RouteConstants"


@inject('authStore')
@observer
class SignInRoute extends React.Component{
    @observable username = ''
    @observable password = ''
    @observable errorMessage = ''
    
    
    
    onChangeUsername = (event) => {
        this.username = event.target.value
    }
    
    
    
    onChangePassword = (event) => {
        this.password = event.target.value
    }
    
    
    onEnterKeyPress = (event) => {
        event.preventDefault();
        this.onClickSubmit();
    }
    
    
    
    onSignInSuccess = () => {
        const {history} = this.props
        history.push(E_COMMERCE_PRODUCTS_PAGE_PATH)
    }
    
    
    onSignInFilure = () => {
        const {getUserSignInAPIError: apiError} = this.props.authStore
        
        if(apiError !== null && apiError !== undefined){
            this.errorMessage = apiError
        }
        
    } 
    
    
    onClickSubmit = (event) => {
        const { userSignIn } = this.props.authStore;
        //console.log('clicked')
        event.preventDefault();
        
        if(this.username === '' || this.username === undefined){
            this.errorMessage = "Please enter username"
            return;
        }
        else if(this.password === '' || this.password === undefined){
            this.errorMessage = "Please enter password";
            return;
        }
        else{
            this.errorMessage = "";
            userSignIn(
                {
                    username:this.username,
                    password:this.password
                }, this.onSignInSuccess, this.onSignInFilure)
        }
        
        
        
    
    }
    
    
    renderProductsPage = () => {
        const { history } = this.props
        
        return <Redirect to={E_COMMERCE_PRODUCTS_PAGE_PATH}/>
    }
    
    
    
    render(){
        
        const { getUserSignInAPIStatus } = this.props.authStore
        
        if(getAccessToken()){
            return this.renderProductsPage()
        }
        
        
        return (
            <SignInPage username={this.username}  password={this.password} 
                        errorMessage = {this.errorMessage}
                        onChangeUsername={this.onChangeUsername}
                        onChangePassword={this.onChangePassword} 
                        onClickSubmit = {this.onClickSubmit}
                        onEnterKeyPress={this.onEnterKeyPress}
                        getUserSignInAPIStatus={getUserSignInAPIStatus}
                        />
            )
    }
    
} 




export default SignInRoute
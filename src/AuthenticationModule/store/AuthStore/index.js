import {observable, action, computed} from "mobx"
import {API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED} from "@ib/api-constants"
import {bindPromiseWithOnSuccess} from "@ib/mobx-promise"
import {create } from "apisauce"
import {networkCallWithApisauce} from "../../utils/APIUtils"
import {apiMethods} from "../../constants/APIConstants"

import {setAccessToken, clearUserSession} from "../../utils/StorageUtils.js"

class AuthStore {
    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError
    authAPIService
    
    constructor(authService){
        this.init(authService)
    }
    
    
    @action.bound
    init(authService){
        this.getUserSignInAPIStatus = API_INITIAL
        this.getUserSignInAPIError = null
        this.authAPIService = authService
    }
    
    
    @action.bound
    userSignIn(){
        const promise = this.authAPIService.signInAPI()
        bindPromiseWithOnSuccess(promise)
        .to(this.setUserSignInAPIStatus, this.setUserSignInAPIResponse)
        .catch(this.setUserSignInAPIError)
    }
    
    
    @action.bound
    setUserSignInAPIResponse(response){
        const access_token = response[0].access_token
        setAccessToken(access_token)
    }
    
    
    @action.bound
    setUserSignInAPIError(error){
     //   console.log('error', error)
        this.getUserSignInAPIError = error
    }
    
    
    
    @action.bound
    setUserSignInAPIStatus(status){
     //   console.log('status', status)
        this.getUserSignInAPIStatus = status
    }
    
    
    
    @action.bound
    userSignOut(){
        clearUserSession()
    }
}


export default AuthStore
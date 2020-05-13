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
        this.authAPIService = authService
        this.init()
    }
    
    
    @action.bound
    init(){
        this.getUserSignInAPIStatus = API_INITIAL
        this.getUserSignInAPIError = null
    }
    
    
    @action.bound
    userSignIn(request , onSuccess, onFailure){
        const promise = this.authAPIService.signInAPI(request)
        return bindPromiseWithOnSuccess(promise)
        .to(this.setUserSignInAPIStatus, response => {
            this.setUserSignInAPIResponse(response);
            onSuccess();
        })
        .catch(error => {
            this.setUserSignInAPIError(error)
            onFailure();
            })
    }
    
    
    @action.bound
    setUserSignInAPIResponse(response){
        const access_token = response[0].access_token
        setAccessToken(access_token)
    }
    
    
    @action.bound
    setUserSignInAPIError(error){
        this.getUserSignInAPIError = error
    }
    
    
    
    @action.bound
    setUserSignInAPIStatus(status){
       this.getUserSignInAPIStatus = status
    }
    
    
    
    @action.bound
    userSignOut(){
        clearUserSession()
        this.init()
    }
}


export default AuthStore
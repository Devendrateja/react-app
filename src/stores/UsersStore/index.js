/*global fetch*/

import { observable,action } from 'mobx'
import { 
    API_INITIAL,
    API_FETCHING,
    API_SUCCESS,
    API_FAILED
    } from "@ib/api-constants"

import {create } from "apisauce"
import {networkCallWithApisauce} from "../../utils/APIUtils"
import {apiMethods} from "../../constants/APIConstants"
import {bindPromiseWithOnSuccess } from "@ib/mobx-promise"

import Userservice from "../../services/UserService/index.api.js"


class UsersStore {
    @observable getUsersApiStatus
    @observable getUsersApiError
    @observable users
    userService
    
    
    constructor(userService){
        this.userService = userService
        this.init()
    }
    
    @action.bound
    init(){
        this.getUsersApiStatus = API_INITIAL
        this.getUsersApiError = null
        this.users = []
    }
    
    
    @action.bound
    setUserAPIResponse(usersResponse){
     this.users =  usersResponse.map((user)=> user.name)  
    }
    
    @action.bound
    setUserAPIError(error){
        this.getUsersApiError = error
    //    console.log(error)
    }
    
    
    @action.bound
    getUsersAPI(){

        // const api = create ({
        //     baseURL:'https://jsonplaceholder.typicode.com/'
        // })
           
           const usersPromise = this.userService.getUsersAPI()
                             
         //const usersPromise = networkCallWithApisauce(api,'users/', {} ,apiMethods.get)
        
        return bindPromiseWithOnSuccess(usersPromise)
        .to(this.setUserAPIStatus,this.setUserAPIResponse)
        .catch(this.setUserAPIError)
    }
    
    @action.bound
    setUserAPIStatus(apiStatus){
        this.getUsersApiStatus = apiStatus
    }
    
    @action.bound
    clearStore(){
        this.init()
    }
}

//const userService = new Userservice()



//const userStore = new UserStore(userService)

export default UsersStore
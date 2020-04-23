import React from "react"

import {observer, inject} from "mobx-react"

import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure"

import stores from "../../stores"

import NoDataView from "../common/NoDataView"

const usersStore = stores.usersStore


@inject ('usersStore')
@observer
class UsersPage extends React.Component{
    
    
    componentDidMount(){
        this.doNetworkCalls()
    }
    
    doNetworkCalls = () => {
        this.getUserStore().getUsersAPI()
    }
    
    getUserStore = ()  => {
        return this.props.usersStore
    }
    
    
    
    renderUserList = () => {
        const { users } = usersStore
        if(users.length === 0){
            
            return <NoDataView />
        } 
        return users.map(userName => <div>{userName}</div>)
    }
    
    
    render(){
        const { getUsersApiStatus,getUsersApiError } = usersStore
        return(
            <LoadingWrapperWithFailure 
            apiStatus = {getUsersApiStatus}
            apiError = {getUsersApiError}
            onRetryClick = {this.doNetworkCalls}
            renderSuccessUI = {this.renderUserList}/>
            )
    }
    
}


export default UsersPage;
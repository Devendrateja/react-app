import {observer,inject} from "mobx-react"
import React from "react"



@inject("auxStore")
@observer
class UserLoginPage extends React.Component{
    
    onHandleLoginButton = () => {
        const {onHandleUserLoggingDetails} = this.props.auxStore
        
        onHandleUserLoggingDetails();
    }
    
    
    render(){
        return (
            <div><div>Please Login to your app</div>
            <button onClick={this.onHandleLoginButton}>Login</button>
            </div>
            )
    }
}


export default UserLoginPage;
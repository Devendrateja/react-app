import React from "react"
import SignInForm from './SignInForm'


class SignInPage extends React.Component{
    
    
    
    render(){
        const { username, password, onChangeUsername,onEnterKeyPress, onChangePassword, onClickSubmit,errorMessage,getUserSignInAPIStatus} = this.props
        return(
            <SignInForm username={username}  password={password}  
                        onChangeUsername={onChangeUsername}
                        onChangePassword={onChangePassword} 
                        onClickSubmit = {onClickSubmit}
                        errorMessage = {errorMessage}
                        onEnterKeyPress={onEnterKeyPress}
                        getUserSignInAPIStatus={getUserSignInAPIStatus}
                        />
            )
    }
}



export default SignInPage ;
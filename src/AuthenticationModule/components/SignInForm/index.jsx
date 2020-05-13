import tw from "tailwind.macro"
import React from "react"
import {observable} from 'mobx'
import {observer,inject} from "mobx-react"
import {withRouter,Redirect} from "react-router-dom"
import {getAccessToken,setAccessToken} from "../../utils/StorageUtils"

import { API_INITIAL,API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'

import { Button } from "./styledComponents.js" 


@observer
class SignInForm extends React.Component{
    userNameRef = React.createRef()
    
    componentDidMount(){
        this.userNameRef.current.focus();
    }
    
    
    render(){
        const { username, password,onChangeUsername, onChangePassword, onClickSubmit, onEnterKeyPress,getUserSignInAPIStatus,errorMessage} = this.props
        
        let buttonValue = (getUserSignInAPIStatus === API_FETCHING) ? "Loading..." : "Sign in"
        
        
        
        return(
            <div  className="flex flex-col justify-center items-center w-screen h-screen">
                    <form onSubmit={onClickSubmit} className="flex flex-col p-8 text-l border border-solid">
                        <p className="font-semibold m-1">Sign in</p>
                        <input className="m-2 p-1 border border-solid" ref={this.userNameRef}  type='text' placeholder="Username" value={username} onChange={onChangeUsername}/>
                        <input className="m-2 p-1 border border-solid" type="password" placeholder="Password" value={password} onChange={onChangePassword}/>
                        <Button data-testid="sign-in-button" onClick={onClickSubmit} disabled={buttonValue==="Sign in"?false:true}>{buttonValue}</Button>
                        {
                            errorMessage !== '' && errorMessage !== undefined ?(<span className="text-red-600">{errorMessage}</span>) : null
                        }
                    </form>
            </div>
            )
    }
}



export default SignInForm;

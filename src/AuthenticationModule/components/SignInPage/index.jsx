import tw from "tailwind.macro"
import React from "react"
import {observable} from 'mobx'
import {observer,inject} from "mobx-react"
import {withRouter,Redirect} from "react-router-dom"
import {getAccessToken,setAccessToken} from "../../utils/StorageUtils"

@inject('authStore')
@observer
class SignInPage extends React.Component{
    @observable userName = ''
    @observable password = ''
    @observable errorMessage = ''
    
    
    onChangeUserName = (event) => {
        this.errorMessage = ''
        this.userName = event.target.value
    }
    
    onChangePassword = (event) => {
        this.errorMessage = ''
        this.password = event.target.value
    }
    
    redirectTo = () => {
        const { history } = this.props
        history.push('/products-page')
    }
    
    
    onClickSubmit = (event) => {
        event.preventDefault()
        const {history} = this.props

        if(this.userName && this.password){
            this.props.authStore.userSignIn()
            setTimeout(this.redirectTo,3000)
        }
        else if(this.userName){
            this.errorMessage='Please enter password'
        }
        else if(this.password){
            this.errorMessage='Please enter username'
        }
        else{
            this.errorMessage='Please enter username and password'
        }
    }
    
    
    
    render(){
        
        return(
            <div  className="flex flex-col justify-center items-center w-screen h-screen">
                    <form onSubmit={this.onClickSubmit} className="flex flex-col p-8 text-l border border-solid">
                        <p className="font-semibold m-1">Sign in</p>
                        <input onChange={this.onChangeUserName} className="m-2 p-1 border border-solid" type='text' placeholder="Username" value={this.userName}/>
                        <input onChange={this.onChangePassword} className="m-2 p-1 border border-solid" type="password" placeholder="Password" value={this.password}/>
                        <input className="m-2 p-2 text-white border border-solid bg-black" data-testid="sign-in-button" type="submit" value="Sign in" />
                        <span className="text-red-600">{this.errorMessage}</span>
                    </form>
                    
            </div>
            )
    }
}

export default SignInPage;
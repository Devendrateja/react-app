import React from "react";
import './formComponents.css';


class Greetings extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            userInputText : '',
            displayName : ''
        }
    }
    
    handleUserInput = (e) => {
        this.setState({userInputText : e.target.value});
    }
    
    handleSubmit = (e) => {
     e.preventDefault();
     const name = this.state.userInputText;
     this.setState({displayName : `Hi ${name} ! have a nice Day .`, userInputText:''})
    }
    
    displayMessage = () => {
        return <div>{this.state.displayName}</div>
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit} className="form">
            <input className="greetings-input" onChange={this.handleUserInput} placeholder="Enter the name" value={this.state.userInputText}/>
            <input className="choice-button" type="submit" value="Submit"/>
            {this.displayMessage()}
            </form>
            </div>
            )
    }
    
}
    

export {Greetings};
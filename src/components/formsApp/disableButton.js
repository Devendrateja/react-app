import React from "react"


class DisableOrEnable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isDisableButtonChecked : false,
            showMessage : ''
        }
    }
    
    handleChange = (e) => {
        const checked = e.target.checked
        
        const message = checked ? "im disabled" : ""
        
        this.setState({isDisableButtonChecked : checked,
            showMessage : message
        });
        
        
    }
    handleSubmit = (e) => {
        
        this.setState({showMessage : 'Hi, im enabled'});
        
    }
    displayMessage = () => {
        return <div>{this.state.showMessage}</div>
    }
    
    render(){
        const buttonChecked = this.state.isDisableButtonChecked
        return (
            <div className="disable-button">
            <input onChange={this.handleChange} type="checkbox"/><label>Disable</label><input onClick={this.handleSubmit} className="choice-button" type="button" value="click me" disabled={buttonChecked}/>
            {this.displayMessage()}
            </div>
            )
    }
}

export {DisableOrEnable};
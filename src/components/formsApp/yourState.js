import React from "react";


class YourState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedState:'',
            submittedState : ''
        }
}
    
    handleChangeState = (e) => {
        
        const updatedState = e.target.value
        
        this.setState({selectedState : updatedState})
    }
    
    handleSubmit = (e) => {
        
        this.setState({ submittedState : `I am from ${this.state.selectedState} state` })
    }
    
    displayMessage = () => {
     return <div>{this.state.submittedState}</div>
    }
    
    statesList = () => {

        return this.props.stateList.map(eachState => {
            return <option key={eachState} id={eachState}>{eachState}</option>
        })
    }
    
    render(){
        return (
            <div className="form">
            <select className="select-options" onChange={this.handleChangeState}>
            <option>select your state</option>
            {this.statesList()}
            </select>
            <input className="choice-button" onClick={this.handleSubmit}  type="button" value="make your choice"/>
            {this.displayMessage()}
            </div>
        
        )
    }
}


export {YourState};




// * Methods
//         - handleChangeState
//         - handleSubmit
//         - displayMessage
//     * State variables
//         selectedState
//         submittedState
//     * Props
//         - stateList
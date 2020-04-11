import React from "react"
import tw  from "tailwind.macro";

import {observable,action,computed} from "mobx"
import {observer} from "mobx-react"


@observer
class AddEvent extends React.Component{
    @observable eventName = ''
    @observable eventLocation = ''
    
    @action.bound
    onAddEvent(){
        const {onAddEvent} = this.props
        const eventName = this.eventName
        const eventLocation = this.eventLocation
        
        onAddEvent(eventName,eventLocation);
        this.eventName = ''
        this.eventLocation = ''
        
    }
    
    
    @action.bound
    onChangeEventName(event){
        this.eventName = event.target.value
    }
    
    
    @action.bound
    onChangeLocation(event){
        this.eventLocation = event.target.value
    }
    
    
    render(){
        return (
        
            <div className="flex flex-row justify-around items-center border-solid border-indigo-900 border w-10/12">
                <form className="flex flex-col p-4" onSubmit={() => event.preventDefault()}>
                    <input className="border-solid border border-green-300 m-1" value={this.eventName} onChange={this.onChangeEventName} placeholder="Event Name"/>
                    <input className="border-solid border border-green-300 m-1" value={this.eventLocation} onChange={this.onChangeLocation} placeholder="Event Location"/>
                </form>
                <button className="border-solid border border-green-300 p-2" onClick={this.onAddEvent}>Add Event</button>
            </div>
        
            )
    }
}


export default AddEvent;
import React from "react"
import tw  from "tailwind.macro";
import {observable,action,computed} from "mobx"
import {observer} from "mobx-react"

import EventModel from "../../stores/models/EventModel"


type EventProps = {
    onAddEvent : Function
    event : EventModel
    onDeleteEvent : Function
    
}


@observer
class Event extends React.Component<EventProps>{
    @observable isEditEvent;
    @observable eventName;
    @observable eventLocation ;
    
    constructor(props){
        super(props);
        this.isEditEvent = false;
        this.eventName = '';
        this.eventLocation = '';
    }
    
    
    @action.bound
    onUpdateEvent(){
         const {event} = this.props
         const eventName = this.eventName
         const eventLocation = this.eventLocation
         event.onUpdateEventDetails(eventName,eventLocation)
         this.isEditEvent = false
    }
        
    @action.bound
    onChangeEventName(event){
        this.eventName = event.target.value
    }
    
    
    @action.bound
    onChangeLocation(event){
        this.eventLocation = event.target.value
    }
    
    @action.bound
    onDeleteEvent(){
        const {onDeleteEvent,event} = this.props
        onDeleteEvent(event);
    }
    
    onHandlesubmit = (event) => {
        event.preventDefault()
    }

    
    
    
    render(){
        const {event} = this.props
        return(
            <div>
            { !this.isEditEvent &&
                <div className="flex flex-row justify-center">
                    <div>
                        <span>Event Name: {event.eventName}</span>
                        <span>Event Location: {event.eventLocation}</span>
                    </div>
                    <div>
                        <button onClick={()=>this.isEditEvent = true}>Edit</button>
                        <button onClick={this.onDeleteEvent}>Delete</button>
                    </div>
                </div>
            }
            
            {
                this.isEditEvent && 
                <div>
                    <form onSubmit={this.onHandlesubmit}>
                        <input value={this.eventName} onChange={this.onChangeEventName} placeholder="Event Name"/>
                        <input value={this.eventLocation} onChange={this.onChangeLocation} placeholder="Event Location"/>
                    </form>
                    <button onClick={this.onUpdateEvent}>Update Event</button>
                </div>
            }
            
            </div>
            
            )
    }
}



export default Event;
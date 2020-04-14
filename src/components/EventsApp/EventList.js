import React from "react"
import tw  from "tailwind.macro";
import Event from "./Event"
import EventModel from "../../stores/models/EventModel"


class EventList extends React.Component{
    
    render(){
        const {onAddEvent, events, onDeleteEvent, noOfEvents} = this.props
        
        return(
            <div className=" flex flex-col justify-start items-center border-solid border-indigo-900 border w-10/12 mt-4">
                <div className="p-4">Number of events: {noOfEvents}</div>
                {
                    events.map(eachEvent => {
                        return <Event key={eachEvent.id} onAddEvent={onAddEvent} event={eachEvent} onDeleteEvent={onDeleteEvent}/>
                    })
                }
            </div>
            )
    }
}

export default EventList;
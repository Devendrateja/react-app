import React from "react"
import Event from "./Event.js"
import tw  from "tailwind.macro";

class EventList extends React.Component{
    
    render(){
        const {onAddEvent, events, onDeleteEvent, noOfEvents} = this.props
        console.log('events',events,noOfEvents)
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
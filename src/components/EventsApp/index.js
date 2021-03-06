import tw  from "tailwind.macro";
import React from "react"
import {observable,action,computed} from "mobx"
import {observer} from "mobx-react"

import eventStore from "../../stores/EventStore/EventStore"

import AddEvent from "./AddEvent"
import EventList from "./EventList"




@observer
class Event extends React.Component{
    
    render(){
        const {onAddEvent,events,onDeleteEvent,noOfEvents} = eventStore
        return(
            <div className="flex flex-col justify-start items-center border-solid border-indigo-900 border w-screen p-8">
                <AddEvent onAddEvent={onAddEvent} />
                <EventList onAddEvent={onAddEvent} events={events} onDeleteEvent={onDeleteEvent} noOfEvents={noOfEvents}/>
            </div>
        )
    }
}


export default Event;
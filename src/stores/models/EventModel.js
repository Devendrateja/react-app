import {observer} from "mobx-react"
import {observable} from "mobx"


class Event {
    @observable eventName
    @observable eventLocation
    constructor(eventName,eventLocation){
        this.id = Math.random();
        this.eventName = eventName;
        this.eventLocation = eventLocation;
    }
    
    onUpdateEventDetails = (eventName,eventLocation) => {
        this.eventName = eventName;
        this.eventLocation = eventLocation;
    }
}


export default Event;
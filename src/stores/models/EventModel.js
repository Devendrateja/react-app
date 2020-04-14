import {observable} from "mobx"


class EventModel {
    id
    @observable eventName
    @observable eventLocation
    
    constructor(eventName,eventLocation){
        this.id = Math.random().toString();
        this.eventName = eventName;
        this.eventLocation = eventLocation;
    }
    
    onUpdateEventDetails(eventName,eventLocation){
        this.eventName = eventName;
        this.eventLocation = eventLocation;
    }
}

export default EventModel;
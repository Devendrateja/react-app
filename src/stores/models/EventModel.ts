import {observable} from "mobx"


class EventModel {
    id : string
    @observable eventName: string
    @observable eventLocation:string
    
    constructor(eventName,eventLocation){
        this.id = Math.random().toString();
        this.eventName = eventName;
        this.eventLocation = eventLocation;
    }
    
    onUpdateEventDetails(eventName:string,eventLocation:string){
        this.eventName = eventName;
        this.eventLocation = eventLocation;
    }
}


export default EventModel;
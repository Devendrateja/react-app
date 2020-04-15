import {observable,action,computed} from "mobx"

import EventModel from "../models/EventModel"


class EventStore {
    @observable events = [];
    
    @action.bound
    onAddEvent(eventName,eventLocation){
        const newEvent  = new EventModel(eventName,eventLocation)
        this.events.push(newEvent)
    }
    
    
    @action.bound
    onDeleteEvent(event){
        this.events = this.events.filter(eachEvent =>  {
            return eachEvent.id !== event.id
        })
    }
    
    
    @computed
    get noOfEvents(){
        let count = 0;
        this.events.forEach(event => {
            count += 1;
        })
        return count ;
    }
}

const eventStore = new EventStore()

export default eventStore;
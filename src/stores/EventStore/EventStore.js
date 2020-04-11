import {observer} from "mobx-react"
import {observable,action,computed} from "mobx"
import Event from "../models/EventModel.js"



class EventStore {
    @observable events = [];
    
    @action.bound
    onAddEvent(eventName,eventLocation){
        const newEvent = new Event(eventName,eventLocation)
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
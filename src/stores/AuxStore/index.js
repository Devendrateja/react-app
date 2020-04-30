import {observable} from "mobx"

class AuxStore {
    @observable isUserloggedIn = false
    
    
    onHandleUserLoggingDetails = () => {
        
        this.isUserloggedIn = !this.isUserloggedIn
        console.log('auxStore',this.isUserloggedIn )
    }
    
}

export default AuxStore
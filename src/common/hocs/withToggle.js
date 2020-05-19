import React from "react"
import { observable } from "mobx"
import { observer } from "mobx-react"


const WithToggle = WrappedComponent => {
        @observer
        class Component extends React.Component{
            @observable toggleStatus = false
            
            onToggle = () => {
                console.log(this.toggleStatus)
                this.toggleStatus = !this.toggleStatus
            }
            
            render(){
                return(
                    <WrappedComponent  toggleStatus={this.toggleStatus} onToggle={this.onToggle} />
                    )
            }
        }
        
        
        return Component
    
}

export default WithToggle;
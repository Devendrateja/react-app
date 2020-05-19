import React from "react"
import { observable } from "mobx"
import { observer } from "mobx-react"


const WithScreenSizeDetectors = WrappedComponent => {
    
    @observer
    class ResizeComponent extends React.Component{
        @observable size = ""
        
        updateSize = () => {
            if(window.innerWidth < 576){
                this.size = "mobile"
            }
            else if(window.innerWidth >= 576 && window.innerWidth < 992) {
                this.size = "tablet"
            }
            else if(window.innerWidth>=992){
                this.size = "desktop"
            }
        }
        
        
        render(){
            return(<WrappedComponent  size={this.size} updateSize={this.updateSize}/>)
        }
    }
    return ResizeComponent
}

export default WithScreenSizeDetectors;
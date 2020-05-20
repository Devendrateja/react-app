import React from "react"
import { observer } from "mobx-react"
import { observable } from "mobx"

import { MouseCoordinatesContainer,MouseCoordinatesHeading } from "./styledComponents"

@observer
class MouseCoordinates extends React.Component{
    @observable coordinates;
    
    constructor(props){
        super(props);
        this.coordinates = {
            x: 0,
            y: 0
        }
    }
    
    
    handleMouseMove = (event) => {
        console.log(event.clientX, event.clientY)
        this.coordinates = { 
            x: event.clientX,
            y: event.clientY
        }
    }
    
    render(){
        return (
            <MouseCoordinatesContainer>
                <MouseCoordinatesHeading>Display Mouse coordinates</MouseCoordinatesHeading>
                <p onMouseMove={this.handleMouseMove}> the mouse position is ({this.coordinates.x}, {this.coordinates.y})</p>
            </MouseCoordinatesContainer>
        )
    }
    
    
}
export default MouseCoordinates;
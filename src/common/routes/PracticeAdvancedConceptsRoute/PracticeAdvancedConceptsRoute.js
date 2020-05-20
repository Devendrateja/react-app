import React, { Component } from "react"
import { observer } from "mobx-react"
import { observable } from "mobx"

import ViewEditToggle from "../../components/ViewEditToggle"
import CollapseExpand from "../../components/CollapseExpand"
import DeviceTypeText from "../../components/DeviceTypeText"
import MouseCoordinates from "../../components/mouseCoordinates"
import DisplayMouseCoordinates from "../../components/DisplayMouseCoordinates"
import { Header, Container } from "./styledComponents"

@observer
class PracticeAdvancedConceptsRoute extends React.Component{
    
    MouseCoordinatesFn = () => {
        return <MouseCoordinates />
    }
    
    render(){
        console.log("Render")
        return(
            <Container>
                <Header>HOC's Usage</Header>
                <ViewEditToggle />
                <CollapseExpand />
                <DeviceTypeText />
                <Header>RenderProps Usage</Header>
                <DisplayMouseCoordinates MouseCoordinates={this.MouseCoordinatesFn} />
                
            </Container>
            )
    }
}


export default PracticeAdvancedConceptsRoute;
import React, { Component } from "react"
import { observer } from "mobx-react"
import { observable } from "mobx"

import ViewEditToggle from "../../components/ViewEditToggle"
import CollapseExpand from "../../components/CollapseExpand"
import DeviceTypeText from "../../components/DeviceTypeText"

import { Header, Container } from "./styledComponents"

@observer
class PracticeAdvancedConceptsRoute extends React.Component{
    render(){
        console.log("Render")
        return(
            <Container>
                <Header>HOC's Usage</Header>
                <ViewEditToggle />
                <CollapseExpand />
                <DeviceTypeText />
            </Container>
            )
    }
}


export default PracticeAdvancedConceptsRoute;
import React, { Component } from "react"
import { observer } from "mobx-react"
import { observable } from "mobx"
import WithScreenSizeDetectors from "../hocs/withScreenSizeDetectors"

import { DeviceTypeContainer, DeviceTypeTextHeading } from "./styledComponents"

class DeviceTypeText extends React.Component {
    
    updateSize = () => {
        const { updateSize } = this.props
        updateSize()
    }
    
    componentDidMount(){
        window.addEventListener("resize", this.updateSize)
    }
    
    render(){
        const { size } = this.props
        return (
            <DeviceTypeContainer>
                <DeviceTypeTextHeading>DeviceTypeText</DeviceTypeTextHeading>
                <span>Device Type : {size}</span>
            </DeviceTypeContainer>
            )
    }
}


export default WithScreenSizeDetectors(DeviceTypeText);
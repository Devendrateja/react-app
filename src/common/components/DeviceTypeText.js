import React, { Component } from "react"
import { observer } from "mobx-react"
import { observable } from "mobx"
import WithScreenSizeDetectors from "../hocs/withScreenSizeDetectors"

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
            <div>
                <h2>DeviceTypeText</h2>
                <span>Device Type : {size}</span>
            </div>
            )
    }
}


export default WithScreenSizeDetectors(DeviceTypeText);
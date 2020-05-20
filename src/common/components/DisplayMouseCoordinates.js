import React  from "react"
import { observer } from "mobx-react"
import { observable } from "mobx"


class DisplayMouseCoordinates extends React.Component{
    render(){
        const { MouseCoordinates } = this.props
        return(
            MouseCoordinates()
            )
    }
}


export default DisplayMouseCoordinates;
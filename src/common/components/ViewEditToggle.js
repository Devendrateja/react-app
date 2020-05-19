import React, { Component } from "react"
import { observer } from "mobx-react"
import { observable } from "mobx"
import WithToggle from "../hocs/withToggle"
import { EditorContainer,Input,EditButton,Span } from "./styledComponents"

@observer
class ViewEditToggle extends React.Component {
    @observable editValue = "Click on the edit button to start editing"
    
    updateText = (event) => {
        this.editValue = event.target.value
    }
    
    render(){
        const {toggleStatus,onToggle} = this.props
        return(
            <EditorContainer>
                <h2>ViewEditToggle</h2>
                {
                    !toggleStatus ? <Span>{this.editValue}</Span>  : <Input onChange={this.updateText} type="text" toggleStatus={toggleStatus}  value={this.editValue} />  
                }
                
                <EditButton onClick={onToggle}>{toggleStatus ? "cancel" : "Edit"}</EditButton>
            </EditorContainer>
            )
    }
}

export default WithToggle(ViewEditToggle);
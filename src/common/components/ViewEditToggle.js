import React, { Component } from "react"
import { observer } from "mobx-react"
import { observable } from "mobx"
import tw from "tailwind.macro"
import styled from "@emotion/styled"

import WithToggle from "../hocs/withToggle"
import { EditorContainer,EditorContainerHeading,Input,EditButton,Span } from "./styledComponents"

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
                <EditorContainerHeading>ViewEditToggle</EditorContainerHeading>
                <div className="flex justify-center items-center" >
                    {
                        !toggleStatus ? <Span >{this.editValue}</Span>  : <Input onChange={this.updateText} type="text" toggleStatus={toggleStatus}  value={this.editValue} />  
                    }
                    
                    <EditButton onClick={onToggle}>{toggleStatus ? "cancel" : "Edit"}</EditButton>
                </div>
            </EditorContainer>
            )
    }
}

export default WithToggle(ViewEditToggle);
import tw from "tailwind.macro"
import styled from "@emotion/styled"


import React, { Component } from "react"
import { observer } from "mobx-react"
import { observable } from "mobx"
import WithToggle from "../hocs/withToggle"

import { CollapseExpandContainer,Input,CollapseButton,Span } from "./styledComponents"

@observer
class CollapseExpand extends React.Component{
    
    render(){
        
        const {toggleStatus, onToggle} = this.props;
        return(
            <CollapseExpandContainer>
                <h2>ViewEditToggle</h2>
                <div className="flex items-start justify-center">
                    <span className="m-4"> Sample shoping List:</span>
                    <span className="flex flex-col justify-start items-center">
                        <CollapseButton onClick={onToggle}>{toggleStatus ? "Collapse" : "Expand" }</CollapseButton>
                        {
                          toggleStatus ?    <div><div>Eggs</div>
                            <div>Bread</div></div> : ""
                        }
                    </span>
                </div>
            </CollapseExpandContainer>
            )
    }
}


export default WithToggle(CollapseExpand);
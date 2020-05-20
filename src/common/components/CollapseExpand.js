import tw from "tailwind.macro"
import styled from "@emotion/styled"


import React, { Component } from "react"
import { observer } from "mobx-react"
import { observable } from "mobx"
import WithToggle from "../hocs/withToggle"

import { CollapseExpandContainer,CollapseExpandHeading,ShoppingListContainer,ShoppingListText,ShoppingListcart,Input,CollapseButton,Span } from "./styledComponents"

@observer
class CollapseExpand extends React.Component{
    
    render(){
        
        const {toggleStatus, onToggle} = this.props;
        return(
            <CollapseExpandContainer>
                <CollapseExpandHeading>ColapseExpand</CollapseExpandHeading>
                <ShoppingListContainer>
                    <ShoppingListText> Sample shoping List:</ShoppingListText>
                    <ShoppingListcart>
                        <CollapseButton onClick={onToggle}>{toggleStatus ? "Collapse" : "Expand" }</CollapseButton>
                        {
                          toggleStatus ?    <ShoppingListcart><div>Eggs</div>
                            <div>Bread</div></ShoppingListcart> : ""
                        }
                    </ShoppingListcart>
                </ShoppingListContainer>
            </CollapseExpandContainer>
            )
    }
}


export default WithToggle(CollapseExpand);
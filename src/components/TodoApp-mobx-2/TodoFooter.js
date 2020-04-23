import styled from '@emotion/styled'
// import styled from 'styled-components';
import React from "react"


class TodoFooter extends React.Component{
    

    onChangeSelectedFilter = (filterType) => {
        const {onChangeSelectedFilter} = this.props
        onChangeSelectedFilter(filterType);
        
    }
    
    onClearCompleted=()=>{
        const {onClearCompleted} = this.props
        onClearCompleted();
    }
    
    render(){
        const Span = styled.span`
            :hover {
                border:solid pink 1px;
            }
        `
        
        const {activeTodosCount} = this.props
        return(
            <div className="flex flex-row justify-between p-4 w-9/12">
            <span>{activeTodosCount} items left</span>
            <div>
            <Span onClick={()=>this.onChangeSelectedFilter('All')} className="p-1 m-1">All</Span>
            <Span onClick={()=>this.onChangeSelectedFilter('Active')} className="p-1 m-1">Active</Span>
            <Span onClick={()=>this.onChangeSelectedFilter('Completed')} className="p-1 m-1">Completed</Span>
            </div>
            <span onClick={this.onClearCompleted}>Clear Completed</span>
            </div>
            )
    }
}

export default TodoFooter;
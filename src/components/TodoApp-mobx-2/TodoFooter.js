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
        const {activeTodosCount} = this.props
        return(
            <div>
            <span>{activeTodosCount}items left</span>
            <div>
            <span onClick={()=>this.onChangeSelectedFilter('All')}>All</span>
            <span onClick={()=>this.onChangeSelectedFilter('Active')}>Active</span>
            <span onClick={()=>this.onChangeSelectedFilter('Completed')}>Completed</span>
            </div>
            <span onClick={this.onClearCompleted}>Clear Completed</span>
            </div>
            )
    }
}

export default TodoFooter;
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
            <div className="flex flex-row w-full justify-between items-center h-16 p-1">
            <span>{activeTodosCount}items left</span>
            <div>
            <span onClick={()=>this.onChangeSelectedFilter('All')} className="p-1 m-1">All</span>
            <span onClick={()=>this.onChangeSelectedFilter('Active')} className="p-1 m-1">Active</span>
            <span onClick={()=>this.onChangeSelectedFilter('Completed')} className="p-1 m-1">Completed</span>
            </div>
            <span onClick={this.onClearCompleted}>Clear Completed</span>
            </div>
            )
    }
}

export default TodoFooter;
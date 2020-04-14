import React from "react"

import Todo from "./Todo"

class TodoList extends React.Component{
    
    render(){
        const {todos, onRemoveTodo} = this.props
        return(
            <div>
            {
                todos.map(eachTodo => {
                    return (
                        <Todo key={eachTodo.id} todo={eachTodo} onRemoveTodo={onRemoveTodo} />
                    )
                })
            }
            </div>
            )
    }
    
}


export default TodoList;
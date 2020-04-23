import React from "react"
import {observer} from 'mobx-react';
import Todo from "./Todo"

@observer
class TodoList extends React.Component{

    
    render(){
        const {getTodosAPI, todos, onRemoveTodo, getTodoListAPIError, getTodoListAPIStatus} = this.props
            return(
                <div className="flex flex-col w-full">
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
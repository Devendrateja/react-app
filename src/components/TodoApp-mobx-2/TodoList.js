import React from "react"
import {observer} from 'mobx-react';
import { FaTruckLoading } from "react-icons/fa";

import Todo from "./Todo"

@observer
class TodoList extends React.Component{
    
    isFetched = false
    
    componentDidMount(){
        const {fetchTodos} = this.props
        this.isFetched = true
        let fetchedData = fetchTodos()
        
    }
    
    
    render(){
        const {todos, onRemoveTodo} = this.props
        if(this.isFetched){
            return(
                <div className="flex flex-col justify-center items-center  w-full">
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
        else if(todos.length === 0 && this.isFetched){
            return(
                <div>No Data Found !</div>
                )
        }
        else{
            return(
                <div className="pt-10">
                    <FaTruckLoading />
                </div>
            )
        }
    }
}


export default TodoList;
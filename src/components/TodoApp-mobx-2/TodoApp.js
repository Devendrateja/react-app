import React from "react"
import AddTodo from "./AddTodo.js"
import TodoList from "./TodoList.js"
import TodoFooter from "./TodoFooter.js"


import Todo from "../../stores/models/Todo.js"
import todoStores from "../../stores/TodoStores/TodoStores.js"

import {observable,action,reaction} from 'mobx';
import {observer} from 'mobx-react';


@observer
class TodoApp extends React.Component{
    
    addTodoReaction = reaction (
            () => todoStores.activeTodosCount,
            (count) => {
                if(count === 0){
                alert('Congratulations')
                }
            }
        )
    render(){
          const {todos,onAddTodo, selectedFilter, onRemoveTodo, onChangeSelectedFilter, onClearCompleted, filterTodos, activeTodosCount } = todoStores
          const filteredTodos = filterTodos
        return (
        <div>
           <AddTodo onAddTodo={onAddTodo} onRemoveTodo={onRemoveTodo}/> 
            <TodoList todos={filteredTodos}  onRemoveTodo={onRemoveTodo} />
                {
                    todos.length>0 && <TodoFooter activeTodosCount={activeTodosCount} selectedFilter={selectedFilter}  onChangeSelectedFilter={onChangeSelectedFilter}  onClearCompleted={onClearCompleted} />
                }
           </div>

            
            )
    }
}



export default TodoApp;
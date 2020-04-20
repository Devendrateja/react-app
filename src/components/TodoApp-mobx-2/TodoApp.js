import React from "react"

import {observable,action,reaction} from 'mobx';
import {observer} from 'mobx-react';

//import Todo from "../../stores/models/Todo"
import todoStores from "../../stores/TodoStores/TodoStores"

import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import TodoFooter from "./TodoFooter"


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
        
        
    handleRetry = () => {
        const {onAddTodo} = todoStores
        onAddTodo();
    }
        
        
    render(){
          const {fetchTodos,todos,onAddTodo, selectedFilter, onRemoveTodo, onChangeSelectedFilter, onClearCompleted, filterTodos, activeTodosCount } = todoStores
          const filteredTodos = filterTodos
          console.log('app lo length',todos.length)
          if(window.navigator.onLine){
            return (
            <div className="flex flex-col justify-start items-center w-screen">
                <div className="flex flex-col justify-start items-center  pt-10 w-6/12">
                   <AddTodo onAddTodo={onAddTodo} onRemoveTodo={onRemoveTodo}/> 
                    <TodoList todos={filteredTodos} fetchTodos={fetchTodos} onRemoveTodo={onRemoveTodo} />
                        {
                            todos.length>0 && <TodoFooter activeTodosCount={activeTodosCount} selectedFilter={selectedFilter}  onChangeSelectedFilter={onChangeSelectedFilter}  onClearCompleted={onClearCompleted} />
                        }
                   </div>
               </div>
                )
          }
          else if(!window.navigator.onLine){
              return(
                  <div className="flex justify-center items-center flex-col w-screen h-screen font-medium text-xl">
                      <div className="m-2">Network Error</div>
                      <button className="flex p-3 px-6 border border-blue-400 rounded-sm border-solid  m-2 font-semibold bg-blue-500 text-white" onClick={this.handleRetry}>Retry</button>
                  </div>
                  )
          }
    }
}



export default TodoApp;
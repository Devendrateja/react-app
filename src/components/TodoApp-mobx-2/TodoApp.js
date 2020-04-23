import React from "react"

import {observable,action,reaction} from 'mobx';
import {observer, inject} from 'mobx-react';

import NoDataView from "../common/NoDataView"
import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure"

import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import TodoFooter from "./TodoFooter"

@inject('todoStore')
@observer
class TodoApp extends React.Component{
    
    componentDidMount(){
        const {getTodosAPI} = this.props.todoStore
        getTodosAPI()
    }
    
    
    addTodoReaction = reaction (
            () => this.props.activeTodosCount,
            (count) => {
                if(count === 0){
                alert('Congratulations')
                }
            }
        )
        
    
    
    renderSuccessUI = observer(() => {
        const {onRemoveTodo,filterTodos,todos,getTodoListAPIError,getTodoListAPIStatus,APIErrorStatus,getTodosAPI } = this.props.todoStore
        const filteredTodos = filterTodos
        
        if(todos.length === 0){
         return <NoDataView />   
        }
        
        
        return (
                <div className="flex flex-row justify-center items-center w-9/12">
                    <TodoList todos={filteredTodos}
                    onRemoveTodo={onRemoveTodo} APIErrorStatus={APIErrorStatus} 
                    getTodoListAPIStatus={getTodoListAPIStatus} getTodosAPI={getTodosAPI} 
                    getTodoListAPIError={getTodoListAPIError} 
                    />
                </div>)       
                
    })


    render(){
          const {todos,onAddTodo,getTodosAPI, getTodoListAPIStatus, getTodoListAPIError, selectedFilter, onRemoveTodo, onChangeSelectedFilter, onClearCompleted, filterTodos, activeTodosCount } = this.props.todoStore
          
          return(
        
                <div className="flex flex-col justify-center items-center w-screen">
                    <div className="flex flex-col justify-center items-center w-9/12 p-4 border border-red-200">
                        <div className="text-6xl font-thin font-sans text-red-300">todos</div>
                        <AddTodo onAddTodo={onAddTodo} onRemoveTodo={onRemoveTodo}/>
                        <LoadingWrapperWithFailure  
                            apiError={getTodoListAPIError}
                            apiStatus={getTodoListAPIStatus} 
                            renderSuccessUI={this.renderSuccessUI}
                            onRetryClick={getTodosAPI}
                        />
                        {
                            todos.length>0 && <TodoFooter activeTodosCount={activeTodosCount} selectedFilter={selectedFilter}  onChangeSelectedFilter={onChangeSelectedFilter}  onClearCompleted={onClearCompleted} />
                        }
                            
                    </div>  
                </div>
            )
    }
}



export default TodoApp;
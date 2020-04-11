import tw  from "tailwind.macro";

import React from "react"
import TodoList from "./TodoList.js"
import TodoFooter from "./TodoFooter.js"

import {observable,action} from 'mobx';
import {observer} from 'mobx-react';

@observer
class Addtodo extends React.Component{
  
    @observable todoTitle ;
   constructor(props){
       super(props);
         this.todoTitle =''
   }
    
    
    
    @action.bound
    onAddTodo(event){
        event.preventDefault();
        const addTodo = this.props.onAddTodo
        const todo = this.todoTitle
        
        addTodo(todo,false)
        
        this.todoTitle = ''
    }
    
    @action.bound
    onChangeInput(event){
        
        this.todoTitle = event.target.value
    }
    
    
    render(){
     
        return (
            
            <form onSubmit={this.onAddTodo}>
                <input className='border-solid border-gray-400' value={this.todoTitle} onChange={this.onChangeInput} />
            </form>
            
            )
    }
}


export default Addtodo;
import tw  from "tailwind.macro";

import React from "react"
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';


import TodoList from "./TodoList"
import TodoFooter from "./TodoFooter"



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
        if(todo !== ''){
            addTodo(todo,false)
        }
        else{
            alert('dude! your task should not be an empty one ')
        }
        this.todoTitle = ''
    }
    
    @action.bound
    onChangeInput(event){
        this.todoTitle = event.target.value
    }
    
    
    render(){
        return (
            <form onSubmit={this.onAddTodo} className="flex flex-col text-2xl mt-4 w-9/12 shadow-lg border border-solid border-red-400">
                <input className="p-2" placeholder="what needs to be done" value={this.todoTitle} onChange={this.onChangeInput} />
            </form>
            
            )
    }
}


export default Addtodo;
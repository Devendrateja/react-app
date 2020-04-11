/** @jsx jsx */
import { jsx,css } from '@emotion/core'


import tw  from "tailwind.macro";

import React from "react"
import todoAppStore from "./TodoAppStore.js"
import {observer} from "mobx-react"

@observer
class TodosList extends React.Component{
    
    todos = () => {
        const strike = css({
            textDecoration :'line-through'
        })
        const nonStrike = css({
            textDecoration :'none'
        })
        
        let filteredTodo  = [];
        let count = 0;
        switch(todoAppStore.todoStat){
            
            case('All'):
                filteredTodo = [...todoAppStore.todos];
                break;
            
            case('Active'):
                filteredTodo = todoAppStore.todos.filter(eachTodo => {
                    return eachTodo.isChecked === false
                })
                break;
                
            case('Completed'):
                filteredTodo = todoAppStore.todos.filter(eachTodo => {
                    return eachTodo.isChecked === true
                })
                break;
            
            default:
                filteredTodo = [...todoAppStore.todos];
        }
        if(todoAppStore.todoStat === ('All' || undefined)){
        filteredTodo.filter(eachTodo =>{
                    if(eachTodo.isChecked === false){
                        count +=1
                    }
                })
                todoAppStore.itemsLeft(count);
        }
    
        return filteredTodo.map(eachTodo => {

            const style = eachTodo.isChecked === true ? strike : nonStrike
            
            return (
                <form key={eachTodo.id} onSubmit={()=>event.preventDefault()}>
                    <input name={eachTodo.id} type="checkbox" defaultChecked={eachTodo.isChecked} onClick={todoAppStore.handleCheckbox}/>
                    <input css={style} className="pl-4"  defaultValue={eachTodo.todo} disabled={eachTodo.isChecked}/>
                    <input name={eachTodo.id} onClick={todoAppStore.removeTodo} type="button" defaultValue="x" />
                </form>
                )
                
        })
    }
    
    
    
    render(){
        console.log('is verified todosList', todoAppStore.todos)
        return (
            <div>
                {this.todos()}
            </div>
            )
    }
}

export default TodosList;
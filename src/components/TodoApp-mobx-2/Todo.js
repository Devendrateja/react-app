import React from "react"
import {observer} from "mobx-react"

@observer
class Todo extends React.Component{
    
    
    onCompleteTodo = (event) => {
      const {todo} = this.props
      const checked = event.target.checked
      todo.onCompleteTodo(checked)
    }
    
    
    onRemoveTodo = () => {
        const {todo, onRemoveTodo } = this.props
        onRemoveTodo(todo)
    }
    
    
    onUpdateTodoTitle = (event) => {
      const {todo} = this.props  
      todo.onUpdateTodoTitle(event.target.value)
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault()
    }
    
    
    render(){
        const {todo} = this.props
        console.log('todo render')
        return(
            <form key={todo.id} onSubmit={this.handleOnSubmit} className="flex flex-row justify-center items-center w-full text-2xl">
                <input className="p-3 m-1 rounded-full" name={todo.id} type="checkbox" defaultChecked={todo.isCompleted}  onChange={this.onCompleteTodo}/>
                <input className="flex-grow m-1" onChange={this.onUpdateTodoTitle} defaultValue={todo.title} disabled={todo.isCompleted}/>
                <input className="font-bold text-RED p-3 m-1 rounded-full" name={todo.id} onClick={this.onRemoveTodo} type="button" defaultValue="x"/>
            </form>
            )
    }
}



export default Todo;
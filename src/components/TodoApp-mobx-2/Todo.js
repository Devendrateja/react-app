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
        let textDecor = todo.isCompleted ? 'line-through' : ''
        return(
            <form key={todo.id} onSubmit={this.handleOnSubmit} className="flex flex-row p-1 text-2xl justify-center border-b border-red-200 items-center w-full">
                <input className="m-1 rounded-full p-3 border font-thin border-red-200" name={todo.id} type="checkbox" defaultChecked={todo.isCompleted}  onChange={this.onCompleteTodo}/>
                <input className={`m-1 flex-grow rounded-none p-1 ${textDecor}`} onChange={this.onUpdateTodoTitle} defaultValue={todo.title} disabled={todo.isCompleted}/>
                <input className="m-1 border border-red-200 text-red-300 rounded-full text-lg px-2 py-0 font-thin " name={todo.id} onClick={this.onRemoveTodo} type="button" defaultValue="x"/>
            </form>
            )
    }
}



export default Todo;
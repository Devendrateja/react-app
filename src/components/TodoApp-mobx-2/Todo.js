import React from "react"
import {observer} from "mobx-react"

@observer
class Todo extends React.Component{
    
    
    onCompleteTodo = (event) => {
      const {todo} = this.props
      const checked = event.target.checked
      console.log('model',todo.onCompleteTodo)
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
        
        return(
            <form key={todo.id} onSubmit={this.handleOnSubmit}>
                <input name={todo.id} type="checkbox" defaultChecked={todo.isCompleted}  onChange={this.onCompleteTodo}/>
                <input onChange={this.onUpdateTodoTitle} defaultValue={todo.title} disabled={todo.isCompleted}/>
                <input name={todo.id} onClick={this.onRemoveTodo} type="button" defaultValue="x"/>
            </form>
            )
    }
}



export default Todo;



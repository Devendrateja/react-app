import React from "react"
import todoAppStore from "./TodoAppStore.js"
import {observer} from "mobx-react"


@observer
class TodoInput extends React.Component{
    
    render(){
        
        return(
            <form onSubmit={todoAppStore.handleOnSubmit}>
                <input onChange={todoAppStore.handleOnChangeUserInput} placeholder="What to do" value={todoAppStore.userInput} />
            </form>
            )
    }
}


export default TodoInput;
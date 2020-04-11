import React from "react"
import TodoInput from "./TodoInput.js"
import TodosList from "./TodosList.js"
import todoAppStore from "./TodoAppStore.js"
import {observer} from "mobx-react"


@observer
class Todos extends React.Component{
    
    render(){
        
        return(
            <div>
                <TodoInput/>
                <TodosList/>
            </div>
            )
    }
}


export default Todos;
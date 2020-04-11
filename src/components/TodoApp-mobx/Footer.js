import tw  from "tailwind.macro";


import React from "react"
import {FooterEl} from "./TodoStyles.js"
import todoAppStore from "./TodoAppStore.js"
import {observer} from "mobx-react"
import {Span} from "./TodoStyles.js"

@observer
class Footer extends React.Component{
    
    render(){
        return (
            <FooterEl>
                <div>
                    {todoAppStore.todosCount} left
                </div>
                <div className="flex flex-row">
                    <Span onClick={()=>todoAppStore.handleTodoStatus('All')}>All</Span>
                    <Span onClick={()=>todoAppStore.handleTodoStatus('Active')}>Active</Span>
                    <Span onClick={()=>todoAppStore.handleTodoStatus('Completed')}>Completed</Span>
                </div>
                <div>
                    <Span onClick={todoAppStore.handleClearCompleted}>Clear Completed</Span>
                </div>
            </FooterEl>
            )
    }
}



export default Footer;
/** @jsx jsx */
import { jsx,css } from '@emotion/core'


import React from "react"
import Header from "./Header.js"
import Todos from "./Todos.js"
import Footer from "./Footer.js"
import {TodoContainer} from "./TodoStyles.js"
import todoAppStore from "./TodoAppStore.js"
import {observer} from "mobx-react"


@observer
class TodoApp extends React.Component{
    
    render(){
        
        const Container = css({
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            height:'80vh',
            width:'100vw'
            
        })
        
        return(
            <div css={Container}>
                <Header/>
                
                <Todos />
                
                {
                    todoAppStore.todos.length>0 && <Footer/>
                }
            </div>
            )
    }
}

export default TodoApp;


// userInput={userInput} 
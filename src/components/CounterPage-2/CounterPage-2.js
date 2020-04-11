/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import tw  from "tailwind.macro";
import styled from '@emotion/styled';


import React from "react";
import counterStore from "./counterStore.js";
// import {observable , computed} from "mobx"
import { observer } from "mobx-react";

@observer
class Counter extends React.Component{

    increment = () => {
        counterStore.increment();
    }
    
    decrement = () => {
        counterStore.decrement();
    }
    
    render(){
        console.log('log',counterStore.count);
        return(
            <div className="flex flex-row justify-center items-center h-screen w-screen">
            <button onClick={this.increment}>+</button>  
            <div className="w-40 text-center bg-gray-400"> {counterStore.count} </div>
            <button onClick={this.decrement}>-</button> 
            </div>
            );
    }
    
}


export default Counter ;
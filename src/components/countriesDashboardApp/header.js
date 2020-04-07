/** @jsx jsx */
import React from "react";
//import "./countriesDashBoardApp.css";
import { IoIosMoon } from "react-icons/io";

import { jsx, css } from '@emotion/core';


class Header extends React.Component{
    render(){
        const {selectedTheme}  = this.props;
        const {onChangeTheme} = this.props;
        
        const light = css({
            backgroundColor: '#fff',
            color: 'black'
        })
        
        const dark = ({
            backgroundColor: '#2b3945',
            color: 'whitesmoke'
        })
        
        const color = (selectedTheme === "Light mode") ? light : dark
        
        return (
            <div className='flex justify-between p-8 items-center text-2xl' css={color}>
        
            <h1>Where in the world ?</h1>
            <div className='flex items-center' onClick={onChangeTheme}><IoIosMoon/>&nbsp;{this.props.selectedTheme}</div>
        
            </div>
            )
    }
}


export default (Header);
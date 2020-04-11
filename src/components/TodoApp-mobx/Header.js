/** @jsx jsx */
import { jsx,css } from '@emotion/core'

import React from "react"


class Header extends React.Component{
    
    render(){
        
        const Header = css({
            fontFamily: 'Helvetica neue',
            fontSize: '100px',
            fontWeight: '100',
            color: 'pink'
        })
        
    return (
        <div css={Header}>
            todos
        </div>
        )    
    }
    
}



export default Header;
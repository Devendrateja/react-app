/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import tw  from "tailwind.macro";
import styled from '@emotion/styled';

import React from "react"
import Score from './Score.js'
import TopScore from './TopScore.js'
import Theme from './Theme.js'
import {NavbarComponent} from "./style.js"



class Navbar extends React.Component{
    
    render(){
        
        const { score,topScore } = this.props
        
        return(
            //<div className="flex flex-row p-6 justify-between items-center bg-green-300">
            <NavbarComponent>
                <div className="font-bold text-xl">
                    Emoji Game
                </div>
                <div className="flex flex-row ">
                <Score score={score}/>
                <TopScore topScore={topScore}/>
                <Theme/>
                </div>
            </NavbarComponent>
            // </div>
            )
    }
}


export default Navbar;
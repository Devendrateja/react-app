/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import tw  from "tailwind.macro";
import styled from '@emotion/styled';

import React from "react"
import {Help} from "./style.js"

class HowToPlay extends React.Component{
    
    render(){
        return (
            // <div className="p-4 bg-purple-300">
            <Help>
                <p className="text-2xl font-semibold">
                    How to play ?
                </p>
                <p className="text-xl pl-4">
                    Get points by clicking on an image but don't click on any image more than once!
                </p>
            </Help>
            // </div>
            )
    }
}


export default HowToPlay;
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from "react"
import {observer} from 'mobx-react'

import themeStore from "../../stores/ThemeStore"

import {SearchCountry} from "./searchByText"
import {SelectRegion} from "./selectRegion"



@observer
class CountriesFilterBar extends React.Component{
    
    render (props){
        const {selectedTheme} = this.props;
        const {onChangeSearchText} = this.props;
        const {regionOptions} = this.props;
        const {onChangeSelectRegion} = this.props;
        console.log('filterbar',selectedTheme)
        const light = css({
            backgroundColor: '#fff',
            color: 'black'
        })
        
        const dark = ({
            backgroundColor: '#2b3945',
            color: 'whitesmoke'
        })
        
       const color = (themeStore.selectedTheme === "Light mode" ) ? light : dark
        
        return (
            <div className="flex items-center justify-between p-8" css={color}>
            <SearchCountry
            selectedTheme={selectedTheme}
            onChangeSearchText={onChangeSearchText}
            />
            
            <SelectRegion 
            selectedTheme={selectedTheme} 
            regionOptions={regionOptions} 
            onChangeSelectRegion={onChangeSelectRegion}
            />
            </div>
            )
    }
}



export {CountriesFilterBar};
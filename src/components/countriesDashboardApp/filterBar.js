/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from "react"
import {SearchCountry} from "./searchByText.js"
import {SelectRegion} from "./selectRegion.js"

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
        
        const color = (selectedTheme === "Light mode") ? light : dark
        
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
/** @jsx jsx */
import React from "react"
import CountryCard from "./countryCard.js"
import tw  from "tailwind.macro";
import styled from '@emotion/styled';
import { jsx,css } from '@emotion/core'
import themeStore from "../../stores/ThemeStore"
import {observer} from 'mobx-react'

@observer
class Countries extends React.Component{
    
    render (){
        const {selectedTheme} = this.props;
        const {countriesList} = this.props;
        console.log('countries',selectedTheme)
        
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
            <div className="flex flex-wrap h-screen" css={color}>
            {
                countriesList.map(eachCountry => {
                    return <CountryCard key={eachCountry.alpha3Code} country={eachCountry}/>
                })
            }
            </div>
            )
    }
}



export {Countries};
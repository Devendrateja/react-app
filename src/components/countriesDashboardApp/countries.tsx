import React from "react"
import {observer} from 'mobx-react'

/** @jsx jsx */
import { jsx,css } from '@emotion/core'
import tw  from "tailwind.macro";
//import styled from '@emotion/styled';

import themeStore from "../../stores/ThemeStore"

import CountryCard from "./countryCard"

type CountriesProps = {
    
    countriesList :Function;
}

@observer
class Countries extends React.Component <CountriesProps> {
    
    render (){
        
        const {countriesList} = this.props;
        
        
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
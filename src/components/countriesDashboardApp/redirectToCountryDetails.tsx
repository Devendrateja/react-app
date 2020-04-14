/*global fetch*/
/** @jsx jsx */

import React from 'react'
import {observer} from 'mobx-react'

import {withRouter} from 'react-router-dom'
import { jsx,css } from '@emotion/core'
import { IoIosArrowRoundBack } from "react-icons/io";

import themeStore from "../../stores/ThemeStore"


//import "./countriesDashBoardApp.css"
@observer
class CountryDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            country : null
        }
    }
    
    componentDidMount(){
        this.getCountries();
    }
    
    async getCountries(){
        const data = await fetch('https://restcountries.eu/rest/v2/all');
        const countriesData = await data.json();

        let selectedCountry = countriesData.find((eachCountry)=> {
             return eachCountry.alpha3Code === this.props.match.params.countryCode;
        });
        this.setState({country : selectedCountry});
    }
    
    
    onClickGoBack = () => {
        const {history} = this.props;
        history.push('/countriesDashboardApp');
    }
    
    createListOfBorders = (borders) => {
        return  borders.map(eachBorder => {
        return <span onClick={this.redirectToSelectedBorderCountry} key={eachBorder} id={eachBorder} className="p-2 border-black border-solid border m-2">{eachBorder}</span>;
        });
    }
    
    createListOfTLD = (tlds) => {
        return tlds.map(eachTLD => {
        return <span key={eachTLD}>{eachTLD}</span>
        })
    }
    createListOfCurrenciesAndLanguages=(item)=>{
        let list = item.map(eachitem => {
        return eachitem.name
        })
        return list.join(',')
    }
    
    redirectToSelectedBorderCountry = (event) => {
        const id = event.target.id
        this.props.history.push(`/redirectToCountryDetails/${id}`)
        this.getCountries()
    }
    
    
    render(){
        const {selectedTheme} = this.props;
  
        let country = this.state.country;
        console.log('navigartionpage',selectedTheme)
        
        const light = css({
            backgroundColor: '#fff',
            color: 'black'
        })
        
        const dark = css({
            backgroundColor: '#2b3945',
            color: 'whitesmoke'
        })
        
        const color = (themeStore.selectedTheme === "Light mode" ) ? light : dark

       if(country !== null){
           
        return (
            <div className="flex flex-col h-screen w-full" css={color}>
            <div className="pl-8 w-full p-8">
                <button  onClick={this.onClickGoBack} className="flex  items-center p-2 border-black border-solid border">
                    <IoIosArrowRoundBack className="search-icon"/>Back
                </button>
            </div>
     
            <div className="flex flex-row w-full">
     
            <img className="w-2/5" src={country.flag} alt='flag'/>
            
            <div className="flex flex-col justify-center ml-8 w-3/5">
     
            <div className="font-semibold">{country.name}</div>
      
            <div className="flex flex-row justify-between">
      
            <div className="flex flex-col">
            <span className="mt-2"><b>Native Name : </b>{country.nativeName}</span>
            <span className="mt-2"><b>Popultion: </b>{country.population}</span>
            <span className="mt-2"><b>Region: </b>{country.region}</span>
            </div>
      
           <div className="flex flex-col">
            <span className="mt-2"><b>Top Level Domain: </b>{this.createListOfTLD(country.topLevelDomain)}</span>            
            <span className="mt-2"><b>Currencies :</b>{this.createListOfCurrenciesAndLanguages(country.currencies)}</span>            
            <span className="mt-2"><b>Languages: </b>{this.createListOfCurrenciesAndLanguages(country.languages)}</span>
            </div>
            </div>
      
            <div className="flex flex-col">
            <span className="mt-2"><b>Sub Region: </b>{country.subregion}</span>
            <span className="mt-2"><b>Capital: </b>{country.capital}</span>
            <span className="mt-2"><b>Borders: </b><div className="flex flex-row flex-wrap">{this.createListOfBorders(country.borders)}</div></span>
            </div>
            </div>
            </div>
            </div>
         )
     }
     
     else{
         return <div><h1>Loading...</h1></div>
     }
    }
}

export default  withRouter(CountryDetails);

/* global*/
import React from "react"
import {withRouter} from 'react-router-dom'
//import "./countriesDashBoardApp.css"



class CountryCard extends React.Component{
    
    onClickCountryCard = (country) => {
        this.props.history.push(`/redirectToCountryDetails/${country.alpha3Code}`)
    }
    
    render(){
        const {country} = this.props;
        const {key} = this.props
        
        return (
            <div className="flex flex-col w-1/5 m-5" id={country.name} key={key} onClick={()=>this.onClickCountryCard(country)}>
                     <img className="w-full" src={country.flag} alt={`${country.name} flag`}/>
                     <div><b>{country.name}</b></div>
                     <span>Population : {country.population}</span>
                     <span>Region : {country.region}</span>
                     <span>Capital : {country.capital}</span>
            </div>
            )
        }
        
}



export default withRouter(CountryCard);
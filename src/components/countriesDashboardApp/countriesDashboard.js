/*global fetch*/
import React from "react"

import {CountriesFilterBar} from "./filterBar"
import {Countries} from "./countries";
//import "./countriesDashBoardApp.css"

class CountriesDashhBoardApp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            countries : [],
            searchText : '',
            selectedRegion : null,
        }
    }
    
    componentDidMount(){
        this.getCountries();
    }
    
    async getCountries(){
        const data = await fetch('https://restcountries.eu/rest/v2/all')
        const countriesData = await data.json()

        this.setState({countries : countriesData})
    }

    getRegionOptions = () => {
        
        const regions = this.state.countries.map(eachCountry => {
            return eachCountry.region
        })
        let regionOptions = ['All']
        let count = 0
        regions.forEach(region => {
            count = 0;
            regionOptions.forEach(place => {
                return (place === region) ? count+=1 : count
            })
            if(count === 0){
                regionOptions.push(region)
            }
        })
        
        return regionOptions
    }
    
     onChangeSearchText = (e) =>  { 
          this.setState({searchText : e.target.value});
     }
    
    updateCountryList=()=>{
        let list ;
        let searchText = this.state.searchText
        
        searchText=searchText.toLowerCase()
        
        list = this.state.countries.filter(eachCountry => {
            
            let countryName = eachCountry.name.toLowerCase();
            let region = this.state.selectedRegion
            
            region = (region==='No Region') ? '' : region
            
            if(countryName.includes(searchText) === true && (region === 'All' || region === null)){
                return true
            }
            else if(countryName.includes(searchText) === true){
                 return eachCountry.region === region
            }
            return ''
        })
        return list
    }
    
    onChangeSelectRegion = (event) => {
    
        const region = event.target.value
        this.setState({selectedRegion : region})
    }
    
    render(){
        
        return(
        <div className="country-dashboard-app">
        <CountriesFilterBar
        selectedTheme={this.props.selectedTheme}
        regionOptions={this.getRegionOptions} 
        onChangeSearchText = {this.onChangeSearchText}
        onChangeSelectRegion={this.onChangeSelectRegion} 
        />
        
        <Countries 
        selectedTheme={this.props.selectedTheme}
        countriesList={this.updateCountryList()}
        />
        </div>
        )
    }
}

export default (CountriesDashhBoardApp);
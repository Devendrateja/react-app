import React from "react";

function CityList(){
    const listOfCities = ["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"];
    return listOfCities;
}

        
class VisitedCities extends React.Component{
    constructor(props){
        super(props);
        
        const list = this.props.cities.map((city,index) => ({id:index,city:city,checked:false }));
        
        this.state = {
            visitedCities : '',
            selectedCities: [],
            cityOptions : list
        }
    }
    
    handleCheckboxClick = (e) => {
        const cityId = e.target.id
        const prevState = [...this.state.cityOptions];
        const selectedCitiesList = []
        prevState[cityId].checked = e.target.checked;
        
        this.setState({cityOptions : prevState});
        
        
        this.state.cityOptions.forEach(obj => {
            if(obj.checked === true){
                selectedCitiesList.push(obj.city)
            }
        })
        
        this.setState({selectedCities:selectedCitiesList})

    }
    
    handleSubmit = (e) => {
        
        const cityText = this.state.selectedCities.join(',')
        this.setState({visitedCities : `I have visited these cities ${cityText}`});
        
    }
    
    displayVisitedCitiesMessage = () => {
         return <div>{this.state.visitedCities}</div>
    }
    
    renderCityOptions = () => {
        let uid=this.state.cityOptions.length
        return this.state.cityOptions.map(obj => {
            return (
                <div key={obj.city} ><input id={obj.id} onChange={this.handleCheckboxClick} type="checkbox" value={obj.city}/><label>{obj.city}</label></div>
            )
        })
    }
    
    render() {
        return (
            <div className="form">
            <div>Which of the following cities you have visited ?</div>
            <div>{this.renderCityOptions()}</div>
            <input className="choice-button"  onClick={this.handleSubmit} type="button" value="make your choice"/>
            {this.displayVisitedCitiesMessage()}
            </div>
            )
    }
}



export {VisitedCities,CityList}
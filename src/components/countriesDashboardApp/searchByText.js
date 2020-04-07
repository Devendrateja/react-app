import React from "react"
import { IoIosSearch } from "react-icons/io";

class SearchCountry extends React.Component{
    
    onHandleSubmit = (event) => {
        event.preventDefault();
    }
    
    
    
    render (){
        const {selectedTheme} = this.props;
        const {onChangeSearchText} = this.props
        return (
            <form onSubmit={this.onHandleSubmit} className="flex items-center">
            <IoIosSearch className="search-icon"/><input className={`search-country-name ${selectedTheme}`} onChange={onChangeSearchText} type="text" placeholder='search country name'/>
            </form>
            )
    }
}



export {SearchCountry}
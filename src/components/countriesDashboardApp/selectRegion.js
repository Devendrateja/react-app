import React from "react"

class SelectRegion extends React.Component{
    
    regionsList = () =>{
        
        const {regionOptions} = this.props
        const options = regionOptions()
        const optionElements = options.map(eachRegion => {
            eachRegion = (eachRegion==='') ? 'No Region' : eachRegion
            return <option key={eachRegion}>{eachRegion}</option>
        })
        return optionElements;
    }
    
    
    render(){
        const {onChangeSelectRegion} = this.props;
        const {selectedTheme} = this.props;
        return (
            <select onChange={onChangeSelectRegion} className={selectedTheme}>
            {this.regionsList()}
            </select>
            )
    }
}

export {SelectRegion};
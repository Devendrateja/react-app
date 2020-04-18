import tw  from "tailwind.macro";

import React from "react"

class Header extends React.Component{
    
    updateTheme = () => {
        const {updateTheme } = this.props
        updateTheme()
    }
    
    render(){
        
        const {level,topLevel, selectedTheme, updateTheme} = this.props
        
        let theme = ( selectedTheme === 'Light mode' ) ? 'Light' : 'Dark'
        
        return (
            <div className="flex flex-col w-full justify-center items-center p-3 ">
                <div className="flex items-center justify-center p-3 w-full ">Top Level : {topLevel}</div>
                <div className="flex  w-full flex-row justify-between  items-center p-3 ">
                    <div>Level : {level}</div>
                    <button className="border-solid border-blue-800 border rounded-md p-2" onClick={this.updateTheme}>Mode: {theme}</button>
                </div>
            </div>
            )
    }
    
}


export default Header;
import React from "react"

class Header extends React.Component{
    
    constructor(props){
        super(props);
        
    }
    
    
    render(){
        return (
            <div>
                <div>Top Level : {0}</div>
                <div>
                    <div>Level : {0}</div>
                    <div>Mode : {'Light'}</div>
                </div>
            </div>
            )
    }
    
}


export default Header;
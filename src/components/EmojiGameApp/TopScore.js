import React from "react"

class TopScore extends React.Component{
    
    
    render(){
        
        const {topScore} = this.props
        
        
        return(
            <div className="p-2">
                Top score:{topScore}
            </div>
            )
    }
}

export default TopScore;
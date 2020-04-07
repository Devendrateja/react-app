import React from "react"

class Score extends React.Component{
    
    render(){
        const { score } = this.props
        
        return(
            <div className="p-2">
                Score : {score}
            </div>
            )
    }
}

export default Score;
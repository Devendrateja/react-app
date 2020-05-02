// export const Add = (a,b)=>{
//     return a+b;
// }

import React from "react"


class HelloMessage extends React.Component{
    render(){
        return (
            <span>{`Hello ${this.props.message}`}</span>
            )
    }
}


export {HelloMessage};
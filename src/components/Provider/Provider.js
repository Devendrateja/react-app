import React, { Component } from 'react'

class ProviderExample extends Component {
  constructor(props){
    super(props);
    this.state = {size: 4}
  }
  render(){
    let rows = [];
    for (var i = 0; i < this.state.size; i++){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < this.state.size; idx++){
        let cellID = `cell${i}-${idx}`
        cell.push(<td style={{backgroundColor:'grey', padding:'30px' ,border:'solid white 10px'}}  key={cellID} id={cellID}></td>)
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 board">
            <table id="simple-board">
               <tbody>
                 {rows}
               </tbody>
             </table>
          </div>
        </div>
      </div>
    )
  }
}
{/*
// import React from "react"
// import {observable} from "mobx"
// import {Provider,inject,observer} from "mobx-react"


// @inject("temp","type")
// class C extends React.Component{
//     render(){
//         const { temp,name,type } = this.props
//         console.log('c',temp,type,name)
//         return <h1>{temp}</h1>
//     }
// }


// @inject("temp")
// @observer
// class B extends React.Component{
//     @observable name = ''
    
//     onChange=(event)=>{
//         this.name = event.target.value
//     }
    
//     render(){
//         const { temp } = this.props
//         console.log('b',temp)
//         return (
//             <div>
//                 <input value={this.name} onChange={this.onChange}/>
//                 <C name={this.name}/>    
//             </div>
//             )
//     }
// }


// class ProviderExample extends React.Component{
//     render(){
//         const temperature = 120+'c';
//         const type = 'celcius'
//         return (
//         <Provider temp={temperature} type={type}>
//             <B/>    
//         </Provider>
//         )
//     }
// }*/}

export default ProviderExample;
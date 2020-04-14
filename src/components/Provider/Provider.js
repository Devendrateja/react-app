import React from "react"

class ProviderExample extends React.Component{
    render(){
        return (
            <h1> Practice </h1>
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
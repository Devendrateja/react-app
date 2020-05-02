import React, { Component } from 'react'
import "./provider.css"
import {observable } from "mobx"
import {observer} from "mobx-react"


import tw from "tailwind.macro"
import styled from "@emotion/styled"



@observer
class ProviderExample extends Component {
  @observable list = []
  
  renderList = () => {
      let img = "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"
      
      
      
      //let obj = <img className="w-20 h-20" src={img} />
      
      this.list.push(img)
      
  }
  
  // mappingList = () => {
  //     return 
  // }
  
  
 render(){
   const Container = styled.div`${tw`flex flex-col h-screen w-screen bg-blue-900`}`
   const ImageList = styled.div`${tw`flex flex-col justify-center items-center overflow-y-auto bg-red-700 `} height:60%; width:80%; `
   const Head = styled.div`${tw`flex justify-center items-center w-full bg-blue-300`} height:20%;`
   const Footer = styled.div`${tw`flex justify-center items-center w-full bg-blue-100`}height:20%;`
   return(
     
     <Container>
        <Head>
          <button onClick={this.renderList}>add image</button>   
        </Head>
        <ImageList>
        {
          this.list.map(image => {
          return <div><img  className="w-32 border-black p-4 m-2 h-32" src={image} key={image} /> </div>
      })
        }
        </ImageList>
        <Footer>
              footer
        </Footer>
     </Container>
     
     )
 }
  
}

// className={`${this.backgroundcolor}`}>
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
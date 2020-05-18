import React, { Component } from 'react'
import "./provider.css"
import {observable, action , autorun,computed} from "mobx"
import {inject, Provider, observer} from "mobx-react"
import { render } from "react-dom";

import tw from "tailwind.macro"
import styled from "@emotion/styled"



// @observer
// class Counter extends Component {
//   @observable count = 0;
//   @observable doubleTheCount = 10;
//   @observable tripleTheCount = 20;

//   @action.bound
//   async updateCounts() {
//     let promise = new Promise((resolve, reject) => {
//       resolve("Success");
//     });
//     await promise;
//   // alert("1")
//     this.updateCountsSynchronously();
//   }
  
  
  
  
//   @action
//   updateCountsSynchronously=()=>{
//     this.count = this.count + 1;
//     this.doubleTheCount = this.doubleTheCount * 2;
//     this.tripleTheCount = this.tripleTheCount * 3;
//   };

//   render() {
//     console.log("render Counter");
//     return (
//       <div>
//         <p>Count: {this.count}</p>
//         <p>Double Count: {this.doubleTheCount}</p>
//         <p>Triple Count: {this.tripleTheCount}</p>
//         <button onClick={this.updateCounts}>Update counts</button>
//       </div>
//     );
//   }
// }




// export default Counter












// class Product{
//     @observable price = 0;
//     @observable profit = 0;
    
    
//     @action.bound
//     setPriceAndProfit(price, profit){
//         this.price = price
//         this.profit = profit
//     }
    
    
//     dispose = autorun(() => {
//         console.log("Autorun called");
//         console.log("total", this.price + this.profit)
//     });
// }


// const product = new Product();
// product.setPriceAndProfit(1,2);
// product.setPriceAndProfit(1,2);
// product.setPriceAndProfit(1,2);
// product.dispose()


// export default product;










// class Title extends Component {
//   render() {
//     console.log("title")
//     const { title } = this.props;
//     return <p>Title: {title}</p>;
//   }
// }

// @inject("appStore")
// //@observer
// class Message extends Component {
//   onChangeTitle = () => {
//     const { onChangeTitle } = this.props.appStore;
//     onChangeTitle("iam good");
//   };
//   render() {
//       const {
//           title
//       } = this.props
//       console.log("Message")   
//     return (
//       <div>
//         <Title  title={title}/>
//         <button onClick={this.onChangeTitle}>Change title</button>
//       </div>
//     );
//   }
// }

// @observer
// class App extends Component {
//   render() {
//       console.log('App')
//     return (
//       <Provider appStore={appStore}>
//         <Message title={appStore.message.title}/>
//       </Provider>
//     );
//   }
// }

// class AppStore {
//   @observable message = {
//     title: "Hello",
//   };

//   @action.bound
//   onChangeTitle(title) {
//     this.message.title = title;
//   }
// }

// const appStore = new AppStore();


// export default App;


















// @observer
// class Counter extends Component {
//   @observable count = 44;
//   @observable isCountChanged = false;

//   @action
//   onChangeCount = () => {
//       //console.log(this.count)
//       //this.isCountChanged = true;
//     this.count = this.count * 13;
//     this.count = this.count * 12;
//     this.count = this.count * 10;
//     this.count = this.count * 11;
//     this.count = this.count * 11;
//   }
  
//   @computed get counter(){
//     console.log("computed");
//     return this.count;
//   }
  
//   disoser = autorun(()=>{
//     console.log(this.count)
//   })
  

//   render() {
//     console.log("render Counter");
//     return (
//       <div>
//         <p>Count: {this.counter}</p>
//         <button onClick={this.onChangeCount}>Change count</button>
//         <p>{this.isCountChanged ? "Count Changed" : ""}</p>
//       </div>
//     );
//   }
// }
// export default Counter;
































//@observer
//class ProviderExample extends Component {
//   @observable list = []
  
//   renderList = () => {
//       let img = "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"
      
      
      
//       //let obj = <img className="w-20 h-20" src={img} />
      
//       this.list.push(img)
      
//   }
  
//   // mappingList = () => {
//   //     return 
//   // }
  
 
//   const Container = styled.div`${tw`flex flex-col h-screen w-screen bg-blue-900`}`
//   const ImageList = styled.div`${tw`flex flex-col justify-center items-center overflow-y-auto bg-red-700 `} height:60%; width:80%; `
//   const Head = styled.div`${tw`flex justify-center items-center w-full bg-blue-300`} height:20%;`
//   const Footer = styled.div`${tw`flex justify-center items-center w-full bg-blue-100`}height:20%;`
//   return(
     
//     <Container>
//         <Head>
//           <button onClick={this.renderList}>add image</button>   
//         </Head>
//         <ImageList>
//         {
//           this.list.map(image => {
//           return <div><img  className="w-32 border-black p-4 m-2 h-32" src={image} key={image} /> </div>
//       })
//         }
//         </ImageList>
//         <Footer>
//               footer
//         </Footer>
//     </Container>
     
//     )
// }
  
//}

// // className={`${this.backgroundcolor}`}>
// {/*
// // import React from "react"
// // import {observable} from "mobx"
// // import {Provider,inject,observer} from "mobx-react"


// // @inject("temp","type")
// // class C extends React.Component{
// //     render(){
// //         const { temp,name,type } = this.props
// //         console.log('c',temp,type,name)
// //         return <h1>{temp}</h1>
// //     }
// // }


// // @inject("temp")
// // @observer
// // class B extends React.Component{
// //     @observable name = ''
    
// //     onChange=(event)=>{
// //         this.name = event.target.value
// //     }
    
// //     render(){
// //         const { temp } = this.props
// //         console.log('b',temp)
// //         return (
// //             <div>
// //                 <input value={this.name} onChange={this.onChange}/>
// //                 <C name={this.name}/>    
// //             </div>
// //             )
// //     }
// // }


// // class ProviderExample extends React.Component{
// //     render(){
// //         const temperature = 120+'c';
// //         const type = 'celcius'
// //         return (
// //         <Provider temp={temperature} type={type}>
// //             <B/>    
// //         </Provider>
// //         )
// //     }
// // }*/}

//export default ProviderExample;import React from "react";

// class ThemeStore {
//   @observable selectedTheme = "dark";

//   onChange() {
//     console.log("onChange selectedTheme");
//     if (this.selectedTheme === "dark") {
//       this.selectedTheme = "light";
//     } else {
//       this.selectedTheme = "dark";
//     }
//   }
// }

// const themeStore = new ThemeStore();

// @observer
// class ProviderExample extends React.Component {
//   onChange = () => {
//     //const { onChange } = this.props.themeStore;
//     console.log(this)
//     this.props.themeStore.onChange();
    
//   }

//   render() {
//     const { selectedTheme } = this.props.themeStore;
//     console.log("SelectedTheme:", selectedTheme);

//     return <button onClick={this.onChange}>Change theme</button>;
//   }
// }


// export default ProviderExample;




function ListItem(props) {
  console.log("new item");
  return <li>{props.value}</li>;
}

class ProviderExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numbers: [12, 34, 56, 23, 23, 23] };
  }
  renderListItems = () => {
    const { numbers } = this.state;
    return numbers.map((number, index) => (
      <ListItem key={index} value={number} />
    ));
  };

  addNumberToList = () => {
    const { numbers } = this.state;
    const newNumbers = numbers.slice();
    newNumbers.push(numbers.length * 2);
    
    this.setState({
      numbers: newNumbers,
    });
  };

  render() {
    return (
      <div>
        <ul>{this.renderListItems()}</ul>
        <button onClick={this.addNumberToList}>Add number</button>
      </div>
    );
  }
}


export default ProviderExample;


import React from "react"


// class DessertsList extends React.Component{
//     render(){
//         
//         return typesOfDesserts;
//     }
    
// }

function DessertsList(){
    const typesOfDesserts = ["Vanilla", "Butterscotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"];
    return typesOfDesserts;
}



// class Counter extends React.Component{
//     state = {
//         parentCounter: 0
//     }
    
//     onParentCounterIncrement = () => {
//         this.setState({parentCounter: this.state.parentCounter + 1})
//     };
    
  //  onIncrement = () => {
        
        // this.setState({ count : this.state.count + 1})
        // console.log("log1", this.state.count)
        // this.setState({ count : this.state.count + 2})
        // console.log("log2", this.state.count)
        // this.setState({ count : this.state.count + 3})
        // console.log("log3", this.state.count)
        // let sam =1;
        // this.setState(prevState => ({
        //   count : prevState.count + 1 
        // }));
        // console.log(this.state.count);
        // this.setState(prevState => ({
        //   count : prevState.count + 1 
        // }))
        // this.setState(prevState => ({
        //   count : prevState.count + 1 
        // }))
        
        
//    };
    // render(){
    //     console.log('parentCounter render called');
    //     return (
    //         <ChildCounter 
    //         onParentCounterIncrement = {this.onParentCounterIncrement}
    //         parentCounter = {this.state.parentCounter}
    //         />
    //         )
        // return (
        //     <div>
        //     <button onClick={this.onIncrement}>increment</button>
        //     {this.state.count}
        //     </div>
        //     )
//     }
// }


// class ChildCounter extends React.Component{
//     state = {
//         childCounter1 : 0,
//         childCounter2 : 0
//     }
    
//     onIncrement = () => {
//         this.props.onParentCounterIncrement();
//         this.setState({childCounter1: this.state.childCounter1 + 1})
        
//     }
//     render () {
//         console.log('child');
//         console.log(this.state.childCounter1);
//         console.log(this.props.parentCounter);
//         return (
//             <button onClick={this.onIncrement}>Click</button>
//             )
//     }
// }




//export {Counter}


class FavouriteDessert extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedDessert : '',
            favouriteDessert : ''
        }
    }
    
    handleUserInput = (e) => {
        this.setState({selectedDessert: e.target.value});
    }
    
    handleSubmit = (e) => {
        const fav = this.state.selectedDessert;
        this.setState({favouriteDessert: `My favourite dessert is ${fav}`});
    }
    
    displayMessage = () => {
        return <div>{this.state.favouriteDessert}</div>
    }
    
    renderDessertOptions = () => {
        
        return this.props.typesOfDesserts.map(dessert => {
            return (
                <label key={dessert}>
                <input onChange={this.handleUserInput} type="radio" name="radioButton"  value={dessert}/>
                {dessert}</label>
                )
        })
    }
    
    render(){
    return (
        <div className="form">
        <div>What is your favourite dessert ?</div>
        <div className="desserts-list">{this.renderDessertOptions()}</div>
        <input className="choice-button" onClick={this.handleSubmit} type="button" value="Make your choice"/>
        {this.displayMessage()}
        </div>
        )    
    }
}



export {FavouriteDessert,DessertsList}
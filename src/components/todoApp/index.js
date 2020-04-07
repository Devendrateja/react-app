import React from 'react';
import './index.css';

let copiedTodosFromProps ;
let id = 0;

class TodoList extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {select:"All",value : []}
    }

    whenUserClicksCheckbox = (event) => {
          this.setState(state => ({
              value : this.props.todosList
          }))
          
    let isChecked = event.target.checked;
    
    let checkboxId = event.target.id;

    if (isChecked){
        
        
        copiedTodosFromProps.filter(item => {
            if(item.id == checkboxId){
                item.checked = isChecked;
            }
            console.log(item)
            return item
        })
        
        
        //copiedTodosFromProps[checkboxId]["checked"] = isChecked;
        // copiedTodosFromProps.forEach(id => {
        //     console.log(id,id.checked)
        //     if(id.id == checkboxId){
        //         id.checked = isChecked
                
        //     }
        // })
    
      
     //   console.log(copiedTodosFromProps)
        
        //  this.setState(state => {
        //          this.props.todosList[checkboxId]["checked"] = isChecked;
        //   })
     }
    // else{
    //     copiedTodosFromProps.forEach(id => {
    //         if(id.id == checkboxId){
    //             id.checked = isChecked
    //         }
    //     })
        //copiedTodosFromProps[checkboxId]["checked"] = isChecked;
        // this.setState(state => {
        //         this.props.todosList[checkboxId]["checked"] = isChecked;
        //     })
    //}

    this.setState(state => ({
              values: this.props.todosList
          }))
    }
    
    
    
    addEachTodoToTheApp = (chooseOne) => {
        
        const All = this.props.todosList.filter(element => {
            return element
        })
        
        const Active = this.props.todosList.filter(element => {
            return element.checked === false
        })
        
        const Completed = this.props.todosList.filter(element => {
            return element.checked === true
        })
        
        
        if (chooseOne === "Active"){
            copiedTodosFromProps = Active;
        }
        else if (chooseOne === "Completed"){
            copiedTodosFromProps = Completed;
        }
        else if (chooseOne === "Clear Completed"){
            {this.props.update(Active)};
        }
        else{
            copiedTodosFromProps = All
        }
        
        return (
            copiedTodosFromProps.map((eachTodo,index) => {
          //      console.log("in render", eachTodo)
                return (
                    <div key={eachTodo.id} className="each-todo-element">
                    <input onClick={this.whenUserClicksCheckbox} id={eachTodo.id} className="checkbox"  type="checkbox" />
                    <input  defaultValue={eachTodo.todo} disabled={this.props.todosList[index]["checked"]}></input>
                    <div key={eachTodo.id} onClick={this.removeATodo} id={eachTodo.id}>✖</div>
                    </div>)
            })
            )
    }
            
    
    removeATodo = (event) => {
        const target = Number(event.target.id)
        const remainingTodos = this.props.todosList.filter( item => {
          return target !== item.id
        })
        {this.props.update(remainingTodos)};
    }
   

    footer = () => {
        let numOfelements = 0;
        
        if(this.props.todosList.length){
            this.props.todosList.forEach(item => {
                if( !item.checked ){
                numOfelements += 1;
                }
            })
            return `${numOfelements} items left`;
        }
    }
    
    filterComponent=(opt)=>{
        
        this.setState(state => ({
            select:opt
        }))
        console.log(this.state.select)
    }
    
    
    
    
    render(props){
       return (
           <div>
           <div className="list-of-todos">{this.addEachTodoToTheApp(this.state.select)}</div>
           <div className="footer">
           <div className="items-left">{this.footer()}</div>
           <div className="footer-element-all" onClick={() =>this.filterComponent("All")}>All</div>
           <div className="footer-element-active" onClick={() => this.filterComponent("Active")}>Active</div>
           <div className="footer-element-completed" onClick={() => this.filterComponent("Completed")}>Completed</div>
           <div className="footer-element-clear-completed" onClick={() => this.filterComponent("Clear Completed")}>Clear Completed</div>
           </div>
           </div>
           )
    }
 }



class Todo extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            values:[]
        }
    }
    
    whenUserClicksEnterKey = (event) => {
        
        if(event.keyCode == 13){
            
        const newTodo =  {id:id,
        todo:event.target.value,
        checked : false
        };
        
        const arrayOfValues = this.state.values.slice(0);
        
        arrayOfValues.push(newTodo);
            this.setState(state => ({
                values : arrayOfValues
            }));
            event.target.value = ''
            id+=1;   
        }
    }
    
    
    displayTodosList = (props) => {
        
        return (
            <div>
            <TodoList todosList={this.state.values} update={this.updateTodosList} />
            </div>
            )
    }
    
    
    updateTodosList = (remaining) => {
      this.setState(state => ({
          values : remaining
      }))
    }
    
    

    input = () => {
        return (
            <div>
            <input  className="todo-input" onKeyDown={this.whenUserClicksEnterKey} placeholder="what to do next"></input>
            </div>
            )
    }
    
    
    render(props){
        return (
            <div className="todo-app">
            <div className="todo-header">todos</div>
            <div className="input-and-list-element">
            <div className="todo-input-element"><div className="circle">○</div>{this.input()}</div>
            <div>{this.displayTodosList()}</div>
            </div>
            </div>
            )
    }
}

export {Todo}



{/*
let number_items = 0;

let itemsArray = [];


// if (sessionStorage.getItems('items')) {
//     itemsArray = sessionStorage.getItems('items');
// }
// else {
//     itemsArray = [];
// }



// let retrievableData = sessionStorage.setItems('items', itemsArray);





let input = document.getElementById("take-input");
let todoList = document.getElementById("listOfTodos");

const all = document.getElementById("footerAll");
const active = document.getElementById("footerActive");
const completed = document.getElementById("footerCompleted");

const clearCompleted = document.getElementById("footerClearCompleted");

const footer = document.getElementById("statusFooter");

const itemsLeft = document.getElementById("itemsLeft");

const markAllTodosAsChecked = document.getElementById("selectAll");
let allCheckBoxes = document.getElementsByClassName("check-box");


function addYourTodo(newTodo) {
    const todoDataTag = `<div class="classic-div">
            <input type="checkbox" class="check-box" />
            <input type="text" class="content-bar" value = "${newTodo}" />
            <button class="remove">x</button>
          </div>`;
    todoList.insertAdjacentHTML('beforeend', todoDataTag);
}


input.addEventListener("keypress", function(keyPressed) {

    if (keyPressed.which === 13) {

        let newTodo = this.value;

        if (newTodo) {
            addYourTodo(newTodo);
            itemsArray.push(input.value);
            localStorage.setItems('items', itemsArray);
            //console.log(itemsArray);

            number_items += 1;
            itemsLeft.innerHTML = `${number_items} items left`;
            footer.style.display = "flex";
            this.value = "";
        }
        else {
            alert("please give the input dude!")
        }
    }
});


document.addEventListener('click', function(event) {

    if (event.target.className === "check-box") {

        if (event.target.checked === true) {
            event.target.style.background = "rgb(43,131,60)";
            number_items -= 1;
            event.target.nextElementSibling.style.textDecoration = "line-through";
            event.target.nextElementSibling.disabled = true;
            event.target.nextElementSibling.nextElementSibling.style.color = "rgb(217,217,217)";
        }
        else {
            event.target.style.background = "white";
            number_items += 1;
            event.target.nextElementSibling.style.textDecoration = "none";
            event.target.nextElementSibling.disabled = false;
            event.target.nextElementSibling.style.color = "rgb(77,77,77)";
            event.target.nextElementSibling.nextElementSibling.style.color = "rgb(77,77,77)";
        }
        itemsLeft.innerHTML = `${number_items} items left`;
    }

    if (event.target.className === "remove" && confirm("dude! Are you sure ?")) {

        if (event.target.previousElementSibling.previousElementSibling.checked == false) {
            number_items -= 1;
            itemsLeft.innerHTML = `${number_items} items left`;
        }
        event.target.parentNode.remove();

        if (allCheckBoxes.length == 0) {
            footer.style.display = "none";
        }
    }

    all.onclick = (event) => {
        all.style.border = "solid 1px rgba(175,47,47,0.2)";
        active.style.border = "none";
        completed.style.border = "none";
        [...allCheckBoxes].forEach(item => {
            item.parentElement.style.display = "flex";
        });
    };

    active.onclick = (event) => {
        active.style.border = "solid 1px rgba(175,47,47,0.2)";
        all.style.border = "none";
        completed.style.border = "none";
        [...allCheckBoxes].forEach(item => {
            if (item.checked == true) {
                item.parentElement.style.display = "none";
            }
            else {
                item.parentElement.style.display = "flex";
            }
        });
    }
    completed.onclick = () => {
        all.style.border = "none";
        active.style.border = "none";
        completed.style.border = "solid 1px rgba(175,47,47,0.2)";
        [...allCheckBoxes].forEach(item => {
            if (item.checked == true) {
                item.parentElement.style.display = "flex";
            }
            else {
                item.parentElement.style.display = "none";
            }
        })
    }
    clearCompleted.onclick = () => {
        [...allCheckBoxes].forEach(item => {
            if (item.checked == true) {
                item.parentElement.remove();
            }
        });
        if (number_items == 0) {
            footer.style.display = "none";
        }
    };

    // markAllTodosAsChecked.onclick = () => {
    //     if (allChecked == 0) {
    //         [...allCheckBoxes].forEach(item => {
    //             item.checked = true;
    //             item.style.background = "rgb(43,131,60)";
    //             item.nextElementSibling.style.textDecoration = "line-through";
    //             item.nextElementSibling.disabled = true;
    //             item.nextElementSibling.nextElementSibling.style.color = "rgb(217,217,217)";
    //             number_items -= 1;
    //         })
    //         allChecked = 1;
    //         itemsLeft.innerHTML = `${number_items} items left`;
    //     }
    //     else {
    //         [...allCheckBoxes].forEach(item => {
    //             item.checked = false;
    //             item.style.background = "white";
    //             item.nextElementSibling.style.textDecoration = "none";
    //             item.nextElementSibling.disabled = false;
    //             item.nextElementSibling.nextElementSibling.style.color = "rgb(77,77,77)";
    //             number_items += 1
    //         })
    //         allChecked = 0;
    //         itemsLeft.innerHTML = `${number_items} items left`;
    //     }
    // }
});
*/}
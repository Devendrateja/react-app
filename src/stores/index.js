import CounterStore from './CounterStore'
import UserService from "../services/UserService/index.api.js"
import UsersStore from "./UsersStore"
import TodoStore from "./TodoStore"
import TodoService from "../services/TodoService/index.api.js"




const userService = new UserService()
const usersStore = new UsersStore(userService)



const todoService = new TodoService()
const todoStore = new TodoStore(todoService)



const counterStore = new CounterStore()

export default {
  counterStore,
  usersStore,
  todoStore
}

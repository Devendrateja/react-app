import CounterStore from './CounterStore'
import UserService from "../services/UserService/index.api.js"
import UsersStore from "./UsersStore"
import AuxStore from "./AuxStore"
import TodoStore from "./TodoStore"
import TodoService from "../services/TodoService/index.api.js"
import AuthStore from "../AuthenticationModule/store/AuthStore"
import AuthService from "../AuthenticationModule/services/AuthService/index.api.js"
import ProductService from "../ProductsPageModule/services/ProductService/index.api.js"
import ProductStore from "../ProductsPageModule/store/ProductStore"
import CartStore from "../ProductsCartModule/store/CartStore"

const userService = new UserService()
const usersStore = new UsersStore(userService)



const todoService = new TodoService()
const todoStore = new TodoStore(todoService)


const auxStore = new AuxStore()

const authService = new AuthService()
const authStore = new AuthStore(authService)


const productService = new ProductService()
const productStore = new ProductStore(productService)



const cartStore = new CartStore(productStore)


const counterStore = new CounterStore()

export default {
  counterStore,
  usersStore,
  todoStore,
  auxStore,
  authStore,
  productStore,
  cartStore
 
}

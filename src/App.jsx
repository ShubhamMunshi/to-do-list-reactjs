import { useState,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppName from './AppName'
import AddTodo from './AddTodo'
import Todo1 from './Todo1'
import Todo2 from './Todo2'
import './App.css'
import TodoItems from './TodoItems'
import Welcomemessage from './Welcomemessage'
import TodoItemsContextProvider, { TodoItemsContext } from './store/todo-item-store'

//  this method gets cureent state of todoItems variable and action


function App() {
  const [style, setStyle] = useState({
     
  })
  const initialTodoItems=[
//     {
//      name:"Buy Milk",
//      dueDate: "4/10/2023"
//   },
//   {
//     name:"Go To College",
//     dueDate: "10/10/2023"
//  }
];
    //  here we set one state variable with name todoItems
  // const[todoItems,setTodoItems] =useState(initialTodoItems)
  
 

  return (
  <>
  <TodoItemsContextProvider>
  <div className="container">
    <AppName/> 
    <Welcomemessage/>
    <AddTodo/>
    <div className='items'>
     <TodoItems/>
  </div>
  </div>
  </TodoItemsContextProvider> 
  </>
  )
}

export default App

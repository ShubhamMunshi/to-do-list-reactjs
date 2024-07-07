import React, { useContext } from 'react'
import { TodoItemsContext } from './store/todo-item-store'

export default function Welcomemessage() { 
  const {todoItems}= useContext(TodoItemsContext)
  return (
   todoItems.length ===0 &&<center><h3> Please Add items</h3></center>
  ) 
}

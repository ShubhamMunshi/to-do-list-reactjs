import React, { useContext } from 'react'
import styles from "./TodoItems.module.css"
import TodoItem from './ToDoItem'
import { TodoItemsContext } from './store/todo-item-store'
export default function TodoItems() {

  //  to use context api we have to import it in the required file within useContext();
  const {todoItems} =useContext(TodoItemsContext);


  
  return (
    <>
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem   todoDate={item.dueDate} todoName={item.name}></TodoItem>
))}
    </div>
    </>
  )
}

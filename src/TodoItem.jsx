import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from './store/todo-item-store';

export default function TodoItem({todoDate, todoName}) {
  const {deleteItem}= useContext(TodoItemsContext)
  return (
    <>
     {/* <div className="container">  */}
      <div className="row">
        <div className="col-4" key={todoName}>{todoName}</div>
        <div className="col-4" key={todoDate}>{todoDate}</div>
        <div className="col-4">
          <button type="button" className="btn btn-danger kg-button"
          onClick={()=>deleteItem(todoName)}
          >
            <MdDelete/>
          </button>
        </div>
      </div>
    {/* </div> */}
    </>
  )
}

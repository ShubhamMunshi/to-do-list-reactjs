import React, { useContext, useRef, useState } from 'react'
import { IoAdd } from "react-icons/io5";
import { TodoItemsContext } from './store/todo-item-store';
 
export default function AddTodo() {

  const {addNewItem}= useContext(TodoItemsContext)
  


  //  here we declared two useRef hook variables  
  const todoNameElement=useRef();
  const dueDateElement= useRef();

  // here we declare two state varibles 
  // const[todoName,setTodoName]=useState("");
  // const[todoDate,setTodoDate]=useState("");

  // const noOfInput= useRef(0)
  // also two onChange function one for name and another for date
  // in that onChage function we use SetTodoName/setTodoDate to get the value input from user 
  // const handleNameChange=(event)=>{
  //  setTodoName(event.target.value)
  //  noOfInput.current +=1;
  // }
  // const handleDateChange=(event)=>{
  // setTodoDate(event.target.value)
  // console.log(`number of changes are ${noOfInput.current}`)
  // }
  // we set below function for onClick on button 
  // also use Set () method to null the input after value addition 
  const onButtonClick=(event)=>{
       
     // here we pass state as props to the App.js's function
    // setTodoName("");
    // setTodoDate("");
    // console.log(event)

    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const todoDate= dueDateElement.current.value;
    addNewItem(todoName,todoDate);

    }
  return (
    <>
    <form className="row">
    <div className="col-4">
      {/* ref is use to give useRef as attribute */}
      <input type="text" name="" id=""  placeholder='Enter todo here' ref={todoNameElement}
      //  value={todoName} onChange={handleNameChange}
       />
      </div>
    <div className="col-4">
      <input type="date" name="" id="" ref={dueDateElement}  
      // onChange={handleDateChange} value={todoDate} 
      />
      </div>
    <div className="col-4">
      <button type="button" className="btn btn-success"
    onClick={onButtonClick}
    >
      <IoAdd/>
      </button>
    </div>
  </form>
  <br />
  </>
  )
}

import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext=createContext(

    {todoItems:[],addNewItem:()=>{},deleteItem:()=>{}}

 );

 const todoItemsReducer=(currentTodoItems,action)=>{
    let newTodoItems=currentTodoItems;
    if (action.type === "NEW_ITEM") {
        newTodoItems=[...currentTodoItems,
      {name:action.payload.itemName, dueDate:action.payload.itemDate}
      ]
      
      
    }
    else if(action.type === "DELETE_ITEM"){
       newTodoItems=currentTodoItems.filter(item => item.name != action.payload.itemName);
    }
    return newTodoItems;
  }

 const TodoItemsContextProvider=({children})=>{
         //  use of useReducer hook 
  const[todoItems,dispatchTodoItems]=useReducer(todoItemsReducer,[])

  const addNewItem=(itemName, itemDate)=>{

    //  below we made one action object 
     const newItemAction={
        type:"NEW_ITEM",
        payload:{
           itemName,
           itemDate
        }
     };
     dispatchTodoItems(newItemAction);
    
  }

  const deleteItem=(todoName)=>{
    const deleteItemAction={
      type:"DELETE_ITEM",
      payload:{
        itemName:todoName
      }
    }
    dispatchTodoItems(deleteItemAction)  
  }

  return   <TodoItemsContext.Provider
   value={{todoItems,addNewItem,deleteItem}}
   > 
   {/* we pass all the values to the childern components */}
   {children}
   </TodoItemsContext.Provider>

  
    }

    export default TodoItemsContextProvider;
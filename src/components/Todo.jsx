import React, { useState } from 'react';
import styles from "./todo.module.css"
import { TodoInput } from './TodoInput';



export const Todo = ({todo, onDeleteItem,onUpdateTodo}) => {
  const [isStriked,setIsStriked] = useState(false);
  const[isEditModeOn,setIsEditModeOn] = useState(false)

  const onAdd =(newAdd)=>{
      onUpdateTodo ({
        ...newAdd,
        id: todo.id
      });
      setIsEditModeOn(false)
  }
  return (
  <div className={styles.list}>
      <li  className={styles.todoItem}>
        {isEditModeOn ? (
          <TodoInput onAdd={onAdd}/>) :(
            <>
              <input type="checkbox" onChange={()=>{
                  setIsStriked(!isStriked);
                  }}
              />
          <span className={isStriked ? styles.strike : styles.normal}>
            {todo.value}
          </span> 
            </>
          )}


         
            <button onClick={()=>onDeleteItem(todo)}>Delete</button>
            <button onClick={()=>setIsEditModeOn(!isEditModeOn)}>
                  {isEditModeOn ? "Cancel Edit" :"Edit" }
              </button>
      </li>
      
  </div>
  
  );

};


//if(true){....} else{....}
//condition ? if : else //ternary operators 
import React,{useState} from 'react';
import {v4} from 'uuid';
import styles from './todo.module.css';


export const TodoInput = ({onAdd}) => {

    const [value,setValue] = useState("");
  return (
  
      <div>
        <button onClick={
       
       ()=> {
           if(value){
             onAdd({
                 value,
                 id:v4(),
             });
           
             setValue("")
             
           }
           else{
               console.log("please Enter Your Task")
           }
       }
     } className={styles.AddBtn}>+</button>
      <input
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.currentTarget.value)}
        className={styles.inputBox}
        placeholder="Add a Todo.."
       />

      
    </div> 
  
  );
};

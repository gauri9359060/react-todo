import React, { useState } from 'react';
import { Todo } from './Todo';
// import styles from "./todo.module.css"
import { TodoInput } from './TodoInput';

export const Todos = () => {
 const [todos, setTodos] = useState([])

 const onAdd=(newTodo)=>{
     setTodos([...todos,newTodo])
 }
 const onUpdateTodo = (updatedTodo)=>{
     const newTodoList = todos.map((todo) => {
         if(todo.id === updatedTodo.id){
            return updatedTodo;
         }
         else{
            return todo;
         }
     });
    setTodos(newTodoList)
 }
 const onDeleteItem=(itemToDelete)=>{
        const newTodoList = todos.filter((todo) => todo.id !== itemToDelete.id);
        setTodos(newTodoList);
 }
  return (
  <div> 
    <TodoInput onAdd={onAdd}/>
    <div>
      <ol>
          {todos.map((todo)=>
            <Todo key={todo.id} todo={todo} onDeleteItem={onDeleteItem} onUpdateTodo={onUpdateTodo}/>
          )}
       </ol>
    </div>

  </div>
  );
};

import { useEffect, useState } from "react";
import "./Todo.css";
import { TodoDate } from "./todoDate";
import { TodoForm } from "./todoForm";
import { TodoList } from "./todoList";
const todoKey ="reacttodo"
export const Todo = () => {
  
  const [task, SetTask] = useState(()=>{
    const rawTodo =  localStorage.getItem( todoKey)
    if(!rawTodo) return [];
    return JSON.parse(rawTodo)
  });
 
  const handleSubmit = ( inputValue) => {
    const {id,content,checked} = inputValue
    if (!content) {
      return;
    }  
    // to find existing Data
    // if (task.includes(inputValue)) {
      
    //   return;
    // }

    const ToFindTodo = task.find((currTask)=>
    currTask.content ===content )
    if (ToFindTodo) {
      return
    }

    
    SetTask((prevTask) => [...prevTask, {id:id,content:content,checked:checked}]);
    
  };
  
   // TO delete Todo list
  const handleButtonClick = (value) => {
    const updatedTask = task.filter((currTask) => {
      return currTask.content !== value;
    });

    SetTask(updatedTask);
  };

  const handleClearClick = () => {
    SetTask([]);
  };
  
  //to checked todos
   const handlecheck  =(content)=>{
     const updatedTask  =task.map((currTask)=>{
     if (currTask.content ==content) {
      return {...currTask, checked:!currTask.checked}
     }
      else{
        return currTask
      }
     
    })
    SetTask(updatedTask)
    //to add local storage
    localStorage.setItem(todoKey,JSON.stringify(task))
   }
  return (
    <section className="todo-container">
      <header>
        <h1> Todo list</h1>
        <TodoDate/>
      </header>

    <TodoForm  AddTodo={handleSubmit}/>
        <section className="myUnOrdList">
          <ul>
            {task.map((currTask) => {
              return (
                <TodoList
                 key={ currTask.id}
                 onDeleteTodo={handleButtonClick}
                 data ={currTask.content}
                 onHandleChecked ={handlecheck}
                 checked ={currTask.checked}
                />
              );
            })}
          </ul>
        </section>
  
      <section>
        <button className="clear-btn" onClick={handleClearClick}>
          {" "}
          clear all
        </button>
      </section>
    </section>
  );
};

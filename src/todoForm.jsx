import React from 'react'
import { useState } from 'react';
export const TodoForm =({AddTodo})=> {
    const [inputValue, SetInputValue] = useState({});
    const handleSubmit =(event)=>{
        event.preventDefault();
AddTodo(inputValue)
SetInputValue("");
    }
    const handleInputChange =(value)=>{
      return(
       
       SetInputValue({id:value, content:value,checked:false})
        
      )
    }
  return (
   <>
       <section className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue.content}
              placeholder="Enter your Task...!"
              onChange={(e) => handleInputChange(e .target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              {" "}
              Add task
            </button>
          </div>
        </form>
       </section>

   </>
  )
}

 
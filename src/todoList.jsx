import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList =({  data,onDeleteTodo,checked,onHandleChecked})=>{

    return(
        <>
        <li  className="todo-item">
                  <span className= {checked ? "checkList":"notCheckList"}>{data}</span>
                  <button className="check-btn" onClick={ ()=>onHandleChecked(data)}>
                    
                    <MdCheck className="icon" />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => onDeleteTodo(data)}
                  >
                   
                    <MdDeleteForever
                />
                  </button>
                </li>
        </>
    )
}
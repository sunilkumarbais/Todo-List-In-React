import {  useContext, useRef} from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { todoItemsContext } from "../store/todo-items-store";

function AddTodo() {

  const{addNewItem} = useContext(todoItemsContext)
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  

  const handelOnClickButton = (event) => {
    event.preventDefault();

    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    if (todoName && todoName.trim() !== "" && dueDate && dueDate.trim() !== "")  {
      addNewItem(todoName, dueDate);
      todoNameElement.current.value = "";
      dueDateElement.current.value = "";
    } else {
      alert("Both fields are required.");
    }
  }

  return (
    <div className="container ">
      <form onSubmit={handelOnClickButton} className="row my-row mx-auto">
        <div className="col-6">
          <input type="text" placeholder="Enter todo here" ref={todoNameElement}  />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success myButton">
            <IoPersonAddSharp  className="fs-4"/>
          </button>
        </div>
      </form>
    </div>
  )
}


export default AddTodo;
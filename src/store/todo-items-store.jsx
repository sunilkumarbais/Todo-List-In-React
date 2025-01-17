import { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types"

export const todoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});


const todoItemsReducer = (currentTodoItem, action) => {
  let newTodoItem = currentTodoItem;
  if(action.type === "NEW_ITEM"){
    newTodoItem = [
      ...currentTodoItem,
      {name: action.payload.todoName, dueDate: action.payload.dueDate}
    ]
  }else if(action.type === "DELETE_ITEM"){
    newTodoItem = currentTodoItem.filter(items => items.name !== action.payload.item.name)
  }
  return newTodoItem;
}

const TodoItemsContextProvider = ({children}) => {
  let storedTodoItems = [];
  try {
   storedTodoItems = JSON.parse(localStorage.getItem("todoItems")) || [];
  } catch {
   storedTodoItems = [];
  }
  const [todoItems, dispatchTodoItems] = useReducer(
    todoItemsReducer,
    storedTodoItems
  );

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  const addNewItem = (todoName, dueDate) => {
    const newitemAction = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        dueDate,
      },
    };
    dispatchTodoItems(newitemAction);
  };

  const deleteItem = (item) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        item,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return(
  <todoItemsContext.Provider
    value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}
  >{children}</todoItemsContext.Provider>)
};


TodoItemsContextProvider.propTypes = {
  children : PropTypes.node.isRequired,
}

export default TodoItemsContextProvider;
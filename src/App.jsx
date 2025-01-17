import AppName from "./components/appName";
import AddTodo from "./components/AddTodo";
import Welcome from "./components/Welcome";
import TodoItems from "./components/TodoItems";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo  />
        <Welcome />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;

import styles from "./Welcome.module.css"
import { todoItemsContext } from "../store/todo-items-store"
import { useContext } from "react"

const Welcome = () => {
  const {todoItems} = useContext(todoItemsContext)
  return (todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day.</p>)
}


export default Welcome;


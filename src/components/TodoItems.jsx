import Item from './Item';
import { todoItemsContext } from '../store/todo-items-store';
import { useContext } from 'react';


function TodoItems() {
  const {todoItems} = useContext(todoItemsContext);
  return (
    <div className="container">
      <div className="row my-row mx-auto">
        {todoItems.map((item, index) => (
          <Item item={item} key={index}/>
        ))}
      </div>
    </div>
  );
}


export default TodoItems;

import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { todoItemsContext } from "../store/todo-items-store";

function Item({ item }) {
  const { deleteItem } = useContext(todoItemsContext);
  return (
    <React.Fragment>
      <div className="col-6 todo-item overflow-auto">{item.name}</div>
      <div className="col-4 todo-item ">{item.dueDate}</div>
      <div className="col-2 todo-item ">
        <button
          type="button"
          className="btn btn-danger myButton "
          onClick={() => deleteItem(item)}
        >
          <MdDelete className="fs-4" />
        </button>
      </div>
    </React.Fragment>
  );
}

// Add PropTypes validation for the `item` prop
Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired, // Validate that name is a required string
    dueDate: PropTypes.string.isRequired, // Validate that dueDate is an optional string
  }).isRequired,
};

export default Item;

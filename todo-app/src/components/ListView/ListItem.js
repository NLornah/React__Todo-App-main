import { ListGroupItem, Input, Button } from "reactstrap";
// import PropTypes from "prop-types";
const ListItem = function ({ todo, toggleSelect, toggleComplete }) {
  return (
    <ListGroupItem className="d-flex align-items-center">
      <Input
        type="checkbox"
        id={todo.id}
        checked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      />

      <div className="mx-3">
        <h5>{todo.text}</h5>
        <p>{todo.time.toDateString()}</p>
      </div>

      <Button
        className="ms-auto"
        color={todo.isComplete ? "danger" : "success"}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? "Completed" : "Running"}
      </Button>
    </ListGroupItem>
  );
};

// ListItem.proptypes = {
//   todos: PropTypes.object.isRequired,
//   toggleSelect: PropTypes.func.isRequired,
//   toggleComplete: PropTypes.func.isRequired,
// };

export default ListItem;

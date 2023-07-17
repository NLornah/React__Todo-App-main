import ListItem from "./ListItem";
import { ListGroup } from "reactstrap";
// import PropTypes from "prop-types";

const ListView = function ({ todos, toggleSelect, toggleComplete }) {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          toggleSelect={toggleSelect}
        />
      ))}
    </ListGroup>
  );
};

// ListView.proptypes = {
//   todos: PropTypes.object.isRequired,
//   toggleSelect: PropTypes.func.isRequired,
//   toggleComplete: PropTypes.func.isRequired,
// };
export default ListView;

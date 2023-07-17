import RowItem from "./RowItem";
import { Table } from "reactstrap";
// import PropTypes from "prop-types";

const TableView = function ({ todos, toggleSelect, toggleComplete }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Text</th>
          <th> Action</th>
        </tr>
      </thead>

      <tbody>
        {todos.map((todo) => (
          <RowItem
            key={todo.id}
            todo={todo}
            toggleSelect={toggleSelect}
            toggleComplete={toggleComplete}
          />
        ))}
      </tbody>
    </Table>
  );
};

// TableView.proptypes = {
//   todos: PropTypes.object.isRequired,
//   toggleSelect: PropTypes.func.isRequired,
//   toggleComplete: PropTypes.func.isRequired,
// };
export default TableView;

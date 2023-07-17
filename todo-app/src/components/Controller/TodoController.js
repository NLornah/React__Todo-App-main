import SearchPanel from "./SearchPanel";
import { Row, Col } from "reactstrap";
import FilterController from "./FilterController";
import ViewController from "./ViewController";
import BulkController from "./BulkController";

const TodoController = function ({
  term,
  handleSearch,
  toggleForm,
  handleFilter,
  changeView,
  view,
  clearSelected,
  clearCompleted,
  reset,
}) {
  return (
    <div>
      <SearchPanel
        term={term}
        handleSearch={handleSearch}
        toggleForm={toggleForm}
      />

      <Row className="my-4">
        <Col md={{ size: 4 }}>
          <FilterController handleFilter={handleFilter} />
        </Col>
        <Col md={{ size: 4 }}>
          {" "}
          <ViewController view={view} changeView={changeView} />{" "}
        </Col>
        <Col md={{ size: 4 }} className="d-flex">
          <div className="ms-auto">
            <BulkController
              clearSelected={clearSelected}
              clearCompleted={clearCompleted}
              reset={reset}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TodoController;

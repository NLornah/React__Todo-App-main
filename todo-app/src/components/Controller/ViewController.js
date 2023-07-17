import { Label, Input } from "reactstrap";

const ViewController = function ({ view, changeView }) {
  return (
    <div className="d-flex">
      <Label for="list-view" className="me-3">
        <Input
          id="list-view"
          name="view"
          type="radio"
          value="list"
          onChange={changeView}
          className="d-inline-block"
          checked={view === "list"}
        />
        List view
      </Label>

      <Label for="table-view" className="me-3">
        <Input
          id="table-view"
          name="view"
          type="radio"
          value="table"
          onChange={changeView}
          className="d-inline-block"
          checked={view === "table"}
        />
        Table view
      </Label>
    </div>
  );
};

export default ViewController;

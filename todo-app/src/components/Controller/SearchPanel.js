import { Input, Button } from "reactstrap";

const SearchPanel = function ({ term, handleSearch, toggleForm }) {
  return (
    <div className="d-flex mb-3">
      <Input
        placeholder="Enter search panel"
        className="me-3"
        value={term}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <Button color="success" onClick={toggleForm}>
        New
      </Button>
    </div>
  );
};

export default SearchPanel;

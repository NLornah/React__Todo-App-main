import { Button, ButtonGroup } from "reactstrap";

const FilterController = function ({ handleFilter }) {
  return (
    <ButtonGroup>
      <Button onClick={() => handleFilter("all")}>All</Button>
      <Button onClick={() => handleFilter("running")}>Running</Button>
      <Button onClick={() => handleFilter("completed")}>Completed</Button>
    </ButtonGroup>
  );
};

export default FilterController;

import { FormCheck, ListGroupItem } from "react-bootstrap";

function Task(props) {
  const { description } = props;

  return (
    <ListGroupItem>
      <FormCheck inline type="checkbox" />
      {description}
    </ListGroupItem>
  );
}

export default Task;

import { FormCheck, ListGroupItem } from "react-bootstrap";

function Task(props) {
  const { task, setContent } = props;
  const { description, completed } = task;

  const handleOnChange = () => {
    task.completed = true;
    setContent((prevContent) => {
      prevContent.completed.push(task);
      const active = prevContent.active.filter((item) => item != task);
      return { ...prevContent, active };
    });
  };
  return (
    <ListGroupItem className="bg-dark border-0 text-light">
      <FormCheck
        inline
        type="checkbox"
        disabled={completed}
        onChange={handleOnChange}
        checked={completed}
      />
      <span className={completed && " text-decoration-line-through"}>
        {description}
      </span>
    </ListGroupItem>
  );
}

export default Task;

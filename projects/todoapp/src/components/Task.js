import { FormCheck, ListGroupItem } from "react-bootstrap";
import { completeTask } from "../firebase/firebasedatabase";

function Task(props) {
  const { task, setContent } = props;
  const { description, completed } = task;

  const handleOnChange = () => {
    task.completed = true;
    completeTask(task);
    setContent((prevContent) => {
      const completed = [...prevContent.completed, task];
      const active = prevContent.active.filter((item) => item !== task);
      return { completed, active };
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
      <span className={completed ? " text-decoration-line-through" : ""}>
        {description}
      </span>
    </ListGroupItem>
  );
}

export default Task;

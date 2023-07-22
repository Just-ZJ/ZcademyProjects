import { ListGroup } from "react-bootstrap";
import Task from "./Task";

function TaskList(props) {
  const { content, curr } = props;
  const { active, completed } = content;
  const list = curr === "all" ? active.concat(completed) : content[curr];
  console.log(list);
  return (
    <ListGroup>
      {list.map((task) => {
        return <Task key={task.id} description={task.description} />;
      })}
    </ListGroup>
  );
}

export default TaskList;

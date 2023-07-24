import { useState } from "react";
import AddItemBar from "./components/AddItemBar";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";
import { Container } from "react-bootstrap";

function App() {
  const [curr, setCurr] = useState("all");
  const [content, setContent] = useState({
    active: [
      {
        id: 0,
        description: "Active Task 0",
        completed: false,
      },
      {
        id: 1,
        description: "Active Task 1",
        completed: false,
      },
      {
        id: 2,
        description: "Active Task 2",
        completed: false,
      },
    ],
    completed: [
      {
        id: 3,
        description: "Completed Task 3",
        completed: true,
      },
      {
        id: 4,
        description: "Completed Task 4",
        completed: true,
      },
      {
        id: 5,
        description: "Completed Task 5",
        completed: true,
      },
    ],
  });

  return (
    <Container className="bg-light shadow p-3">
      {/* Field to add tasks */}
      <AddItemBar setContent={setContent} />
      {/* NavBar - All, Active, Completed */}
      <NavBar setCurr={setCurr} curr={curr} />
      {/* List of Tasks */}
      <TaskList content={content} curr={curr} setContent={setContent} />
    </Container>
  );
}

export default App;

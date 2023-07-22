import { useState } from "react";
import AddItemBar from "./components/AddItemBar";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";

function App() {
  const [curr, setCurr] = useState("all");
  const [content, setContent] = useState({
    active: [
      {
        id: 0,
        description: "Active Task 0",
      },
      {
        id: 1,
        description: "Active Task 1",
      },
      {
        id: 2,
        description: "Active Task 2",
      },
    ],
    completed: [
      {
        id: 3,
        description: "Completed Task 3",
      },
      {
        id: 4,
        description: "Completed Task 4",
      },
      {
        id: 5,
        description: "Completed Task 5",
      },
    ],
  });

  return (
    <>
      {/* Field to add tasks */}
      <AddItemBar setContent={setContent} />
      {/* NavBar - All, Active, Completed */}
      <NavBar setCurr={setCurr} />
      {/* List of Tasks */}
      <TaskList content={content} curr={curr} />
    </>
  );
}

export default App;

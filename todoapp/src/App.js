import { useEffect, useState } from "react";
import AddItemBar from "./components/AddItemBar";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";
import { Container } from "react-bootstrap";
import { getTasks } from "./firebase/firebasedatabase";

function App() {
  const [curr, setCurr] = useState("all");
  const [content, setContent] = useState({
    active: [],
    completed: [],
  });

  useEffect(() => {
    getTasks("active").then((active) => {
      setContent((prevContent) => {
        return { ...prevContent, active };
      });
    });

    getTasks("completed").then((completed) => {
      setContent((prevContent) => {
        return { ...prevContent, completed };
      });
    });
  }, []);

  console.log(content);
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

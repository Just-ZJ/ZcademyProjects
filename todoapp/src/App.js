import AddItemBar from "./components/AddItemBar";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      {/* Field to add tasks */}
      <AddItemBar />
      {/* NavBar - All, Active, Completed */}
      <NavBar />
      {/* List of Tasks */}
      <TaskList />
    </>
  );
}

export default App;

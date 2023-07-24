import { FloatingLabel, FormControl } from "react-bootstrap";

function AddItemBar(props) {
  const { setContent } = props;

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      console.log(event);
      setContent((prevContent) => {
        const { active } = prevContent;
        active.push({
          id: 10,
          description: event.target.value,
        });
        return { ...prevContent, active };
      });
    }
  };
  return (
    <>
      <FloatingLabel
        label="Add Task"
        onKeyDown={handleKeyPress}
        className="mb-3"
      >
        <FormControl placeholder="Add Task" />
      </FloatingLabel>
    </>
  );
}

export default AddItemBar;

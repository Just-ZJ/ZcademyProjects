import { Nav } from "react-bootstrap";
import NavBarItem from "./NavBarItem";

function NavBar(props) {
  const navigation = [
    { id: 0, title: "All" },
    { id: 1, title: "Active" },
    { id: 2, title: "Completed" },
  ];

  return (
    <Nav variant="tabs">
      {navigation.map((item) => {
        return <NavBarItem key={item.id} text={item.title} {...props} />;
      })}
    </Nav>
  );
}

export default NavBar;

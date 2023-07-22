import { NavItem, NavLink } from "react-bootstrap";

function NavBarItem(props) {
  const { text, setCurr } = props;

  const handleClick = () => {
    setCurr(text.toLowerCase());
  };

  return (
    <NavItem onClick={handleClick}>
      <NavLink>{text}</NavLink>
    </NavItem>
  );
}

export default NavBarItem;

import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom';

function Dropdown() {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    
    const userIcon = "/assets/account_circle_white_36dp.svg"
    const imgUser = {
        img: <img src={userIcon} alt="Profile user icon"/>
    }
    return (
        <NavDropdown title={imgUser.img} id="nav-dropdown" menuVariant="dark">
          <NavDropdown.Item as={Link} to="/signin" eventKey="1">Log in</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/signup" eventKey="2">Sign Up</NavDropdown.Item>
        </NavDropdown>
    );
  }

export default Dropdown;
import NavDropdown from 'react-bootstrap/NavDropdown'

function Dropdown() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    
    const userIcon = "./assets/account_circle_white_36dp.svg"
    const imgUser = {
        img: <img src={userIcon} alt="Profile user icon"/>
    }
    return (
      
        <NavDropdown title={imgUser.img} id="nav-dropdown" menuVariant="dark">
          <NavDropdown.Item eventKey="1">Log in</NavDropdown.Item>
          <NavDropdown.Item eventKey="2">Sign in</NavDropdown.Item>
        </NavDropdown>
    );
  }

export default Dropdown;
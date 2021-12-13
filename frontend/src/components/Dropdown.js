import React, { useEffect } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Dropdown(props) {
    const userIcon = "/assets/account_circle_white_36dp.svg"
    const {firstName, lastName,userImg} = props

    const imgUser =( 
      userImg ? 
      {img:<div style={{padding: '.1rem', backgroundColor: 'gray', borderRadius: '50%'}}><img src={userImg} className='img-user' alt="Profile user icon"/></div>}
      :
      {
        img: <img src={userIcon} alt="Profile user icon"/>
    })



    useEffect(() => {
      return () => {
        console.log(props)
      }
    }, [props])

    
    return (
        <NavDropdown title={imgUser.img} id="nav-dropdown" menuVariant="dark">
          {firstName? <NavDropdown.Item as={Link} to="/" eventKey="0">Hi { firstName + " " + lastName }</NavDropdown.Item>
          :<>
          <NavDropdown.Item as={Link} to="/signin" eventKey="1">Sign in</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/signup" eventKey="2">Sign Up</NavDropdown.Item>
          </>
          }
        </NavDropdown>
    );
  }

const mapStateToProps = (state) => {
  return {
    firstName: state.users.firstName,
    lastName: state.users.lastName,
    userImg: state.users.userImg
  }
}


export default connect(mapStateToProps)(Dropdown);

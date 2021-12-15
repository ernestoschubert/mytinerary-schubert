import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import usersActions from '../redux/actions/usersActions';
import Swal from 'sweetalert2';


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

    const Alert = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    const onLogOut = (e) => {
        e.preventDefault()
        props.logOut()
        Alert.fire({
          icon: 'success',
           title: 'You have been succesfully logged out!'
        })
    }
    
    return (
        <NavDropdown title={imgUser.img} id="nav-dropdown" menuVariant="dark">
          {firstName? <> 
            <NavDropdown.Item as={Link} to="/" eventKey="0">{ firstName + " " + lastName }</NavDropdown.Item>
            <NavDropdown.Item onClick={(e) => onLogOut(e)} eventKey="1">Log Out</NavDropdown.Item>
          </>
          :
          <>
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

const mapDispatchToProps = {
  logOut: usersActions.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);

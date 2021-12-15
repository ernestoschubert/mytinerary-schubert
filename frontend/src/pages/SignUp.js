import { useEffect, useState } from 'react';
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import usersActions from '../redux/actions/usersActions';
import { connect } from 'react-redux';
import PasswordToggle from '../components/PasswordToggle';
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2'

const SignUp = (props) => {

    const [inputType, hideViewIcon, placeholderText] = PasswordToggle();
    
    const { getCountries } = props

    useEffect(() => {
      getCountries()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const { allCountries } = props

    const [newUser, setNewUser] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userImg: '',
      country: '',
    })
    
    const inputHandler = (e) => {
      setNewUser({
        ...newUser,
        [e.target.name]: e.target.value
      })
    }
    const [ errorInput, setErrorInput ] = useState({})
    
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
    
    const onSubmit = (e) => {
      e.preventDefault()
      let info = Object.values(newUser).some(infoUser => infoUser === '')
      if(info) {
        Alert.fire({
          icon: 'error',
          title: 'There are fields incomplete, please complete them'
        })
      } else {
        props.signUpUser(newUser)
        .then(response => {
          if(response.data.success) {
            Alert.fire({
              icon: 'success',
              title: 'Your account has been created!'
            })
          } else if (response.data.errors) {
            setErrorInput({})
            response.data.errors.map(error => setErrorInput(messageError => {
              return {
                ...messageError,
                [error.path]: error.message
              }
            }))
          } else {
            Alert.fire({
              icon: 'error',
              title: 'That email has already been used! Try with another one'
            })
              }
            })
            .catch(error => {
              Alert.fire({
                icon: 'error',
                title: 'We are having technicas difficulties! Come back later!'
              })
            })
          }
        }
        
        const responseGoogle = (res) => {
          const googleUser = {
            firstName: res.profileObj.givenName,
            lastName: res.profileObj.familyName,
            email: res.profileObj.email,
            password: res.profileObj.googleId,
            userImg: res.profileObj.imageUrl,
            country: ' ',
            googleAccount: true
          }
          props.signUpUser(googleUser)
          .then((response) => {
            if (response.data.success){
              Alert.fire({
                icon: 'success',
                title: 'Your account has been created!'
              })
            }
            else{
              setErrorInput(response.data.error)
              Alert.fire({
                icon: 'error',
                title: 'Something went wrong! Come back later!'
              })
            }
          })
          .catch((error) => {
            Alert.fire({
              icon: 'error',
                  title: 'This account is already in use.'
                })
              })
              
            }
            
            return (
              <>
              <Header />
                  <main className="signup-container">
                      <div className="cont-form">
                          <h1 className="mb-3"> Sign Up</h1>
                          <form className="form-style">
                              <input type="text" onChange={inputHandler} name="firstName" placeholder="First Name"/>
                              <input type="text" onChange={inputHandler} name="lastName" placeholder="Last Name"/>
                              <input type="email" onChange={inputHandler} name="email" placeholder="email@email.com"/>
                              <p className='text-danger'>{errorInput.email}</p>
                              <span className='password-toggle-icon'>{hideViewIcon}
                              <input type={inputType} onChange={inputHandler} name="password" placeholder={placeholderText} autoComplete={inputType === 'text' ? 'off': 'nope'}/>
                              <p className='text-danger'>{errorInput.password}</p>
                              </span>
                              <input type="url" onChange={inputHandler} name="userImg" placeholder="URL Profile Image" />
                              <select  defaultValue="choose your country" onChange={inputHandler} name="country" id="select-state">
                                  <option disabled value="choose your country">Choose your country</option>
                                  {   
                                      allCountries.length !== 0 ?
                                      allCountries.map((country, index) => {
                                        return <option key={index} value={country.name}>{country.name}</option>
                                      })
                                      :
                                      <option>Loading...</option>
                                    }
                              </select>
                              <button onClick={(e) => onSubmit(e)} className="mt-2 ps-4 pe-4 btns">Create account</button>
                              <p>or</p>
                              <span className='google-btn mt-2 mb-2'><GoogleLogin
                                      clientId="988627387814-jdnopntr6b8l3s5k0d2n9cjgkdnjbnsd.apps.googleusercontent.com"
                                      buttonText="Sign Up with Google"
                                      onSuccess={responseGoogle}
                                      onFailure={responseGoogle}
                                      cookiePolicy={'single_host_origin'}
                                      /></span>
                          </form>
                          <div> 
                              <p>Already has an account? <Link to="/signin"> Sign In</Link></p> 
                          </div>
                      </div>

                  </main>
          </>
      )
}

const mapStateToProps = (state) => {
  return {
    firstName : state.users.firstName,
    lastName: state.users.lastName,
    userImg: state.users.userImg,
    email: state.users.email,
    allCountries: state.users.allCountries
  }
}

const mapDispatchToProps = {
  signUpUser: usersActions.signUpUser,
  getCountries: usersActions.getCountries
}
    
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
  
  
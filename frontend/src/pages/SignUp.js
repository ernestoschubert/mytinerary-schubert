import { useEffect, useState } from 'react';
import Header from "../components/Header";
import axios from 'axios';
import { Link } from 'react-router-dom';
import usersActions from '../redux/actions/usersActions';
import { connect } from 'react-redux';
import PasswordToggle from '../components/PasswordToggle';
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2'

const SignUp = (props) => {

    const [countries, setCountries] = useState([])
    
    const [inputType, hideViewIcon, placeholderText] = PasswordToggle();

    useEffect(() => {
            axios.get('https://restcountries.com/v2/all?fields=name')
            .then(res => setCountries(res.data))
            .catch(err => console.error(err))
        }, [])

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
        position: 'top-end',
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
        // props.signUpUser(newUser)
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
            console.log(error)
            Alert.fire({
              icon: 'error',
              title: 'We are having technicas difficulties! Come back later!'
            })
          })
        }
    }
    
    const responseGoogle = (res) => {
        console.log(res);
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
            }
        })
        .catch((error) => {
            console.log(error)
            Alert.fire({
                icon: 'error',
                title: 'Something went wrong! Come back later!'
              })
        })
        
      }

    return (
        <>
            <Header />
                <main className="signup-container">
                    <div className="cont-form">
                       {props.firstName !== null ? 
                       <><h1>Hi {props.firstName}</h1>
                            <p>Your account has been created succesfully</p>
                            <img src={props.userImg} width="100" alt='user profile'/>
                            <p>Click here to go <Link to="/">Home</Link></p>
                       </>
                       : 
                       <>
                        <h1 className="mb-3"> Sign Up</h1>
                        <form className="form-style">
                            <input type="text" onChange={inputHandler} name="firstName" placeholder="First Name"/>
                            <p className='text-danger'>{errorInput.firstName}</p>
                            <input type="text" onChange={inputHandler} name="lastName" placeholder="Last Name"/>
                            <p className='text-danger'>{errorInput.lastName}</p>
                            <input type="email" onChange={inputHandler} name="email" placeholder="email@email.com"/>
                            <p className='text-danger'>{errorInput.email}</p>
                            <span className='password-toggle-icon'>{hideViewIcon}
                            <input type={inputType} onChange={inputHandler} name="password" placeholder={placeholderText} autoComplete={inputType === 'text' ? 'off': 'nope'}/>
                            <p className='text-danger'>{errorInput.password}</p>
                            </span>
                            <input type="url" onChange={inputHandler} name="userImg" placeholder="URL Profile Image" />
                            <p className='text-danger'>{errorInput.userImg}</p>
                            <select  defaultValue="choose your country" onChange={inputHandler} name="country" id="select-state">
                                <option disabled value="choose your country">Choose your country</option>
                                {   
                                    countries.length !== 0 ?
                                    countries.map((country, index) => {
                                        return <option key={index} value={country.name}>{country.name}</option>
                                    })
                                    :
                                    <option>Loading...</option>
                                }
                            </select>
                            <p className='text-danger'>{errorInput.country}</p>
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
                        </>}
                    </div>

                </main>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        firstName : state.users.firstName,
        lastName: state.users.lastName,
        userImg: state.users.userImg
    }
}

const mapDispatchToProps = {
    signUpUser: usersActions.signUpUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

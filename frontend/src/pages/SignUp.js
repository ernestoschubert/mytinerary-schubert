import { useEffect, useState } from 'react';
import Header from "../components/Header";
import axios from 'axios';
import { Link } from 'react-router-dom';
import usersActions from '../redux/actions/usersActions';
import { connect } from 'react-redux';
import PasswordToggle from '../components/PasswordToggle';
import GoogleLogin from 'react-google-login';

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
    
    const onSubmit = (e) => {
        return (
            e.preventDefault(),
            props.signUpUser(newUser)
        )
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
        .then((response) => response.data.success)
        .catch((error) => console.log(error))
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
                            <input type="text" onChange={inputHandler} name="lastName" placeholder="Last Name"/>
                            <input type="email" onChange={inputHandler} name="email" placeholder="email@email.com"/>
                            <span className='password-toggle-icon'>{hideViewIcon}
                            <input type={inputType} onChange={inputHandler} name="password" placeholder={placeholderText} autoComplete={inputType === 'text' ? 'off': 'nope'}/>
                            </span>
                            <input type="url" onChange={inputHandler} name="userImg" placeholder="URL Profile Image" />
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

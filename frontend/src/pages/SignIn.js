import { useState } from 'react';
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import PasswordToggle from '../components/PasswordToggle';
import GoogleLogin from 'react-google-login';
import Alert from '../components/Alert';

const SignIn = (props) => {

    const [inputType, hideViewIcon, placeholderText] = PasswordToggle();

    const [logInUser, setLogInUser] = useState({
        email: "",
        password: ""
    })

    const inputHandler = (e) => {
        setLogInUser({
            ...logInUser,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let info = Object.values(logInUser).some(infoUser => infoUser === "")
        if(info) {
            Alert('error', 'There are fields incomplete, please complete them')
        } else {
            props.signInUser(logInUser)
            .then(response => {
                if(!response.data.success) {
                   Alert('error', 'Email or password incorrect')
                } else {
                    Alert('success', 'Welcome! You have been successfully logged')
                }
            })
            .catch(error => {
                console.log(error)
                Alert('error', 'Email or password incorrect')
            })
        }
    }

    const responseGoogle = (res) => {
        let googleUser = {
            email: res.profileObj.email, 
            password: res.profileObj.googleId,
            google: true,
        }
        props.signInUser(googleUser)
        .then((response) => {
            if (response.data.success){
                Alert('success', 'Welcome! You have been successfully logged')
            }
        })
        .catch((error) => {
            console.log(error)
            Alert('error', 'You have to sign up before you log in!')
        })
    }


    return (
        <>
            <Header />
                <main className="signup-container">
                    <div className="cont-form">
                            <h1 className="mb-4">Sign In</h1>
                            <form className="form-style">
                                <input type="text" name="email" onChange={inputHandler} placeholder="Username or email"/>
                                <span className='password-toggle-icon'>{hideViewIcon}
                                <input type={inputType} name="password" onChange={inputHandler} placeholder={placeholderText} autoComplete={inputType === 'text' ? 'off': 'nope'}/>
                                </span>
                                <button onClick={(e) => onSubmit(e)} className="mt-2 ps-4 pe-4 btns">Sign In</button>
                                <p>or</p>
                                <span className='google-btn mt-2 mb-2'><GoogleLogin
                                    clientId='988627387814-jdnopntr6b8l3s5k0d2n9cjgkdnjbnsd.apps.googleusercontent.com'
                                    buttonText="Sign Up with Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                /></span>
                            </form>
                            <div> 
                                <p>Don't you have an account yet? <Link to="/signup"> Sign Up</Link></p> 
                            </div>
                    </div>
                </main>
        </>
    )
}



const mapDispatchToProps = {
    signInUser: usersActions.signInUser
}

export default connect(null, mapDispatchToProps)(SignIn);

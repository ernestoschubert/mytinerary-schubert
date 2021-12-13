import { useState, useEffect } from 'react';
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import PasswordToggle from '../components/PasswordToggle';
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2'
// import GoogleLoginComp from '../components/GoogleLoginComp'

const SignIn = (props) => {
    // const google = "/assets/google.png"

    const [inputType, hideViewIcon, placeholderText] = PasswordToggle();

    const [logInUser, setLogInUser] = useState({
        email: "",
        password: ""
    })

    const [ errorInput, setErrorInput ] = useState(null)

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

    const inputHandler = (e) => {
        setLogInUser({
            ...logInUser,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        return () => {
        console.log(props)

        }
    }, [props])

    const onSubmit = (e) => {
        console.log(logInUser)
        e.preventDefault()
        // return (
        //     props.signInUser(logInUser)
        // )
        let info = Object.values(logInUser).some(infoUser => infoUser === "")
        if(info) {
            Alert.fire({
                icon: 'error',
                title: 'There are fields incomplete, please complete them'
            })
        } else {
            props.signInUser(logInUser)
            .then(response => {
                if(!response.data.success) {
                     Alert.fire({
                     icon: 'error',
                     title: 'Email and/or password incorrect'
                   })
                } else {
                    Alert.fire({
                        icon: 'success',
                        title: 'Welcome back!'
                    })
                }
            })
            .catch(error => Alert.fire({
                icon: 'error',
                title: 'Email and/or password incorrect'
            }))
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
                Alert.fire({
                    icon: 'success',
                     title: 'Welcome back!'
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
                title: 'You have to sign up before you log in!'
              })
        })
    }
    

    return (
        <>
            <Header />
                <main className="signup-container">
                    <div className="cont-form">
                            {!props.firstName ? <>
                            <h1 className="mb-4">Sign In</h1>
                            <form className="form-style">
                                <input type="text" name="email" onChange={inputHandler} placeholder="Username or email"/>
                                <span className='password-toggle-icon'>{hideViewIcon}
                                <input type={inputType} name="password" onChange={inputHandler} placeholder={placeholderText} autoComplete={inputType === 'text' ? 'off': 'nope'}/>
                                </span>
                                <button onClick={(e) => onSubmit(e)} className="mt-2 ps-4 pe-4 btns">Sign In</button>
                                <p>or</p>
                                {/* <button type="submit" className="mt-2 mb-2 ps-4 pe-4 btns">Sign In with <img src={google} width="18" className="ms-1" alt="google"/>oogle</button> */}
                                <span className='google-btn mt-2 mb-2'><GoogleLogin
                                    clientId="988627387814-jdnopntr6b8l3s5k0d2n9cjgkdnjbnsd.apps.googleusercontent.com"
                                    buttonText="Sign Up with Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                /></span>
                            </form>
                            <div> 
                                <p>Don't you have an account yet? <Link to="/signup"> Sign Up</Link></p> 
                            </div>
                            </>:
                            <><p>{props.firstName} you are logged successfully</p></>}
                    </div>
                </main>
        </>
    )
}

const mapStateToProps= (state)=> {
    return {
        firstName : state.users.firstName,
        userImg: state.users.userImg
    }
}

const mapDispatchToProps = {
    signInUser: usersActions.signInUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

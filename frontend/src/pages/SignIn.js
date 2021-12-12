import React, { useState, useEffect } from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";

const SignIn = (props) => {
    const google = "/assets/google.png"

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
    useEffect(() => {
        return () => {
        console.log(props)

        }
    }, [props])

    const onSubmit = (e) => {
        console.log(logInUser)
        return (
            e.preventDefault(),
            props.signInUser(logInUser)
        )
    }

    return (
        <>
            <Header />
                <main className="signup-container">
                    <div className="cont-form">
                        
                            <h1 className="mb-3">{props.firstName !== null ? `Hi, ${props.firstName}` : "Sign In"}</h1>
                            <form className="form-style">
                                <input type="text" name="email" onChange={inputHandler} placeholder="Username or email"/>
                                <input type="password" name="password" onChange={inputHandler} placeholder="*******"/>
                                <button onClick={(e) => onSubmit(e)} className="mt-2 ps-4 pe-4 btns">Sign In</button>
                                <p>or</p>
                                <button type="submit" className="mt-2 mb-2 ps-4 pe-4 btns">Sign In with <img src={google} width="18" className="ms-1" alt="google"/>oogle</button>
                            </form>
                            <div> 
                                <p>Don't you have an account yet? <Link to="/signup"> Sign Up</Link></p> 
                            </div>
                    </div>
                    <div></div>
                </main>
            <Footer />
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
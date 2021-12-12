import React, { useEffect, useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from 'axios';
import { Link } from 'react-router-dom';
import usersActions from '../redux/actions/usersActions';
import { connect } from 'react-redux';

const SignUp = (props) => {

    const [countries, setCountries] = useState([])
    
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
    
    const google = "/assets/google.png";

    console.log(newUser)

    return (
        <>
            <Header />
                <main className="signup-container">
                    <div className="cont-form">
                        <h1 className="mb-3">Sign Up</h1>
                        <form className="form-style">
                            <input type="text" onChange={inputHandler} name="firstName" placeholder="First Name"/>
                            <input type="text" onChange={inputHandler} name="lastName" placeholder="Last Name"/>
                            <input type="email" onChange={inputHandler} name="email" placeholder="email@email.com"/>
                            <input type="password" onChange={inputHandler} name="password" placeholder="*******"/>
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
                            <button onClick={()=> props.signUpUser(newUser)} className="mt-2 ps-4 pe-4 btns">Create account</button>
                            <p>or</p>
                            <button type="submit" className="mt-2 mb-2 ps-4 pe-4 btns">Sign Up with <img src={google} width="18" className="ms-1" alt="google"/>oogle</button>

                        </form>
                        <div> 
                            <p>Already has an account? <Link to="/signin"> Sign In</Link></p> 
                        </div>
                    </div>

                </main>
            <Footer />
        </>
    )
}

const mapStateToProps= (state)=> {
    return {
        firstName : state.users.firstName
    }
}

const mapDispatchToProps = {
    signUpUser: usersActions.signUpUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

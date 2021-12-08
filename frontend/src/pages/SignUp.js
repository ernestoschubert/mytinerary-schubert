import React, { useEffect, useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [countrys, setCountrys] = useState([])

    useEffect(() => {
            axios.get('https://restcountries.com/v2/all?fields=name')
            .then(res => setCountrys(res.data))
            .catch(err => console.error(err))
        }, [])

    const google = "/assets/google.png";

    return (
        <>
            <Header />
                <main className="signup-container">
                    <div className="cont-form">
                        <h1 className="mb-3">Sign Up</h1>
                        <form className="form-style">
                            <input type="text" placeholder="First Name"/>
                            <input type="text" placeholder="Last Name"/>
                            <input type="email" placeholder="email@email.com"/>
                            <input type="password" placeholder="*******"/>
                            <input type="url" placeholder="URL Profile Image" />
                            <select id="select-state">
                                <option defaultValue value="choose you country">Choouse your country</option>
                                {   
                                    countrys.length !== 0 ?
                                    countrys.map((country, index) => {
                                        return <option key={index} value={country.name}>{country.name}</option>
                                    })
                                    :
                                    <option>Loading...</option>
                                }
                            </select>
                            <button type="submit" className="mt-2 ps-4 pe-4 btns">Create account</button>
                            <p>or</p>
                            <button type="submit" className="mb-2 ps-4 pe-4 btns">Sign Up with <img src={google} width="18" className="ms-1" alt="google"/>oogle</button>

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

export default SignUp
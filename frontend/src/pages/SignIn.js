import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const SignIn = () => {

    const google = "/assets/google.png"

    return (
        <>
            <Header />
                <main className="signup-container">
                    <div className="cont-form">
                            <h1 className="mb-3">Sign In</h1>
                            <form className="form-style">
                                <input type="text" placeholder="Username or email"/>
                                <input type="password" placeholder="*******"/>
                                <button type="submit" className="mt-2 ps-4 pe-4 btns">Sign In</button>
                                <p>or</p>
                                <button type="submit" className="mb-2 ps-4 pe-4 btns">Sign In with <img src={google} width="18" className="ms-1" alt="google"/>oogle</button>
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

export default SignIn;
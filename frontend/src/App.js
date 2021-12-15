import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home.js';
import Cities from './pages/Cities.js';
import CityWithoutProps from './pages/City';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { withRouter} from './utils/withRouter';
import ScrollToTop from './components/ScrollToTop';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { connect } from 'react-redux';
import usersActions from './redux/actions/usersActions';


const City = withRouter(CityWithoutProps)

const App = (props) => {

  const { signInUserLS } = props
  useEffect(()=>{
    if(localStorage.getItem('token')){
        signInUserLS(localStorage.getItem('token'))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cities" element={<Cities />} />
          <Route path="city/:id" element={<City />} />
        
        {!props.token && (<Route path="signin" element={<SignIn />}/>)}
        {!props.token && (<Route path="signup" element={<SignUp/>}/>)}

        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </BrowserRouter>
)};

const mapStateToProps = (state) => {
  return{
      token: state.users.token
  }
}
const mapDispatchToProps = {
  signInUserLS: usersActions.signInUserLS
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home.js';
import Cities from './pages/Cities.js';
import CityWithoutProps from './pages/City';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Error404 from './pages/Error404';
import { withRouter} from './utils/withRouter'
import ScrollToTop from './components/ScrollToTop';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const City = withRouter(CityWithoutProps)

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cities" element={<Cities />} />
          <Route path="city/:id" element={<City />} />
        <Route path="signin" element={<SignIn />}/>
        <Route path="signup" element={<SignUp/>}/>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
)};

export default App;

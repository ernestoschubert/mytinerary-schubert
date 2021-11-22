import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home.js';
import Cities from './pages/Cities.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



// const App = () => {
//   return (
//     <div className="App">
//       <Home/>
//       {/* <Cities/> */}
//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cities" element={<Cities />} />
      </Routes>
    </BrowserRouter>
)};

export default App;

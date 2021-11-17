import React from 'react'
import './App.css'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

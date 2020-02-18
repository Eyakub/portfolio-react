import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';


function App(){
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/">
          <Home />
        </Route>

        {/* Route for about.js contents */}
        <Route path="/about">
          <About />
        </Route>

        {/* Route for Education.js content */}
        <Route path="/education">
          <Education />
        </Route>

        {/* Route for Skills.js content */}
        <Route path="/skills">
          <Skills />
        </Route>

        {/* Route for Contact.js content */}
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>
  )
}

export default App;
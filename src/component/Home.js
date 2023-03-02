import React from 'react'
import './home.css';
import Transition from './comp/Transition';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
 
} from "react-router-dom";
import About from './comp/About';
import Projects from './comp/Projects';
import Skills from './comp/Skills';
import Feedback from './comp/Feedback';

const Home = () => {
  let nav = true;
  let nav_2 = true;

  

  function open() {

    const container = document.querySelector('.section')
    if (nav) {
      container.style.transformOrigin = "top left";
      container.classList.add('rotate');
      nav = false;
    }
    else {
      container.classList.remove('rotate');
      nav = true;
    }
  }
  function open_2() {
    const container = document.querySelector('.section')
    const link = document.querySelector('.linked')
    const git = document.querySelector('.git')
    const insta = document.querySelector('.insta')
    
    const face = document.querySelector('.face')
    if (nav_2) {
      container.style.transformOrigin = "bottom right";
      container.classList.add('rotate');
      link.style.transform = "translateX(0)";
      git.style.transform = "translateX(0)";
      insta.style.transform = "translateX(0)";
      
      face.style.transform = "translateX(0)";
      nav_2 = false;
    }
    else {
      container.classList.remove('rotate');
      link.style.transform = "translateX(300%)";
      git.style.transform = "translateX(300%)";
      insta.style.transform = "translateX(300%)";
      
      face.style.transform = "translateX(300%)";
      nav_2 = true;
    }
  }


  return (
    <>
      <Router>
        <div className="circle" >
          <i className="fa-solid fa-bars" onClick={open}></i>
        </div>
        <div className="end-circle">
          <i className="fa-solid fa-bars" onClick={open_2}></i>
        </div>
        <Routes>
          <Route
            exact path="/"
            element={
              <Transition />
            } />
            <Route
            exact path="/about"
            element={
              <About/>
            } />
            <Route
            exact path="/project"
            element={
              <Projects />
            } />
            <Route
            exact path="/skills"
            element={
              <Skills />
            } />
            <Route
            exact path="/feedback"
            element={
              <Feedback />
            } />
        </Routes>
        <nav>
          <ul>
            <li><Link id='home' className='links' to="/"><i className="fa-solid fa-house"></i> Home</Link></li>
            <li><Link className='links' to="/about"><li><i className="fa-solid fa-user"></i> About</li></Link></li>
            <li><Link className='links' to="/project"><li><i className="fa-solid fa-diagram-project"></i> Projects</li></Link></li>
            <li><Link className='links' to="/feedback"><li><i class="fa-solid fa-comments"></i> Contact</li></Link></li>
          </ul>
        </nav>
        <form className="navigate">
          <ul>
            <li className='linked'><a href="https://www.linkedin.com/in/aman-dalvi-b97b5b210/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
            <li className='git' > <a href="https://github.com/bringMeThanos007" target="_blank"><i className="fa-brands fa-github"></i></a></li>
            <li className='insta' ><a href="https://www.instagram.com/_amandalvi_/?next=%2F" target="_blank"><i className="fa-brands fa-square-instagram"></i></a></li> 
            <li className='face' > <a href=""><i className="fa-brands fa-facebook"></i></a></li>
            
          </ul>
        </form>
      </Router>
    </>
  )
}

export default Home

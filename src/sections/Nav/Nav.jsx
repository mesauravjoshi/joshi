import React from 'react'
import "./NavStyles.css"

// dark mode 
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../common/ThemeContext';

function Nav() {
  // dark mode 
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <span className="navbar-brand" href="#">Saurav's Portfolio</span>
      <button 
      className="navbar-toggler" 
      type="button" 
      data-toggle="collapse" 
      data-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
      // aria-label="Toggle navigation"
      >
        &#9776;
        {/* <span className="navbar-toggler-icon">&#9776;</span> */}
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <a className="nav-link"
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement('home');
              }}>
              Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement('projects');
              }}>
              Projects
              {/* <span className="sr-only">(current)</span> */}
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link"
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement('skills');
              }}>
              Skills
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link"
              href="#edu"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement('edu');
              }}>
              Education
               {/* & <br />Certificates */}
              <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
          {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
        </form>
      </div>
      <a className="navbar-brand" href="#">
        {/* hav */}
        <img
          className="colorMode"
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </a>
      {/* <img
          className="colorMode"
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        /> */}
    </nav>
  )
}

export default Nav
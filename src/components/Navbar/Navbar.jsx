import { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  
  const [mode , setMode] = useState("light")
  const [name , setName] = useState("Dark Mode")
  const toogle = ()=>{
    if(mode === "light"){
      setMode("dark")
      setName("Light Mode")
    }
    else{
      setMode("light")
    }
  }
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/anime">
                  Anime
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Health">
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Entertainment">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Sciences">
                  Sciences
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Sports">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Technology">
                  Technology
                </a>
              </li>
            </ul>
            <div className="form-check form-switch me-2 form-check-reverse">
              <input
                className={`form-check-input bg-${mode}`}
                type="checkbox"
                id="flexSwitchCheckReverse"
                onClick={toogle}
              />
              {name}
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckReverse"
              >
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

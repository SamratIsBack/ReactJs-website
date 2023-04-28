// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
    return (
        <>
         
  <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center justify-content-between">
      <h1 className="logo"><Link to="#">Techie</Link></h1>
      
      <nav id="navbar" className="navbar">
        <ul>
          <li><Link className="nav-link scrollto active" to="#">Home</Link></li>
          <li><Link className="nav-link scrollto" to="#about">About</Link></li>
          <li><Link className="nav-link scrollto" to="#services">Services</Link></li>
          <li><Link className="nav-link scrollto " to="#portfolio">Portfolio</Link></li>
          <li><Link className="nav-link scrollto" to="#">Team</Link></li>
          <li className="dropdown"><Link to="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></Link>
            <ul>
              <li><Link to="#">Drop Down 1</Link></li>
              <li className="dropdown"><Link to="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></Link>
                <ul>
                  <li><Link to="#">Deep Drop Down 1</Link></li>
                  <li><Link to="#">Deep Drop Down 2</Link></li>
                  <li><Link to="#">Deep Drop Down 3</Link></li>
                  <li><Link to="#">Deep Drop Down 4</Link></li>
                  <li><Link to="#">Deep Drop Down 5</Link></li>
                </ul>
              </li>
              <li><Link to="#">Drop Down 2</Link></li>
              <li><Link to="#">Drop Down 3</Link></li>
              <li><Link to="#">Drop Down 4</Link></li>
            </ul>
          </li>
          <li><Link className="nav-link scrollto" to="#contact">Contact</Link></li>
          <li><Link className="getstarted scrollto" to="#about">Get Started</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>  
        </>
    )
}
export default Navbar;
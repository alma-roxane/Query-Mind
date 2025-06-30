import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css'; 


const HomeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
);
const InfoIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
);
const LogInIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" /></svg>
);


const Navbar = () => { 
  return (
    <nav className="navbar">
      
      <Link to="/" className="navbar-logo">
        QUERY MIND
      </Link>
      <div className="nav-links">
      
        <Link to="/" className="nav-link">
          <HomeIcon width="20" height="20" />
          <span className="nav-link-text">Home</span>
        </Link>
        <Link to="/about" className="nav-link">
          <InfoIcon width="20" height="20" />
          <span className="nav-link-text">About</span>
        </Link>
        <Link to="/login" className="login-button">
          <LogInIcon width="20" height="20"/>
          <span className="login-button-text">Login</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
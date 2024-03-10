import React from 'react';
import { Link } from 'react-router-dom';

function Menu({number}) {
  return (
    <div>
      {/* Menu Start */}
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link to={`/`} className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa fa-map-marker-alt me-3" />
            Pleasant Tours
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>

            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/services" className="nav-item nav-link">
              Services
            </Link>
            <Link to="/price" className="nav-item nav-link">
              Price
            </Link>
            <Link to="/packages" className="nav-item nav-link">
              Packages
            </Link>
            <div className="nav-item dropdown">
              <a
                href
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Destination
              </a>
              <div className="dropdown-menu m-0">
                <Link to="/thailand" className="dropdown-item">
                  Thailand
                </Link>
                <Link to="/england" className="dropdown-item">
                  England
                </Link>
                <Link to="/malaysia" className="dropdown-item">
                  Malaysia
                </Link>
                <Link to="/australia" className="dropdown-item">
                  Australia
                </Link>
                <Link to="/indonesia" className="dropdown-item">
                  Indonesia
                </Link>
                <Link to="/vietnam" className="dropdown-item">
                  Vietnam
                </Link>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <Link to={`/cart`} className="btn btn-primary rounded-pill py-2 px-4">
            <i className='fa fa-shopping-cart'></i> Cart ({number})
          </Link>
        </div>
      </nav>
      {/* Menu End */}
    </div>
  );
}

export default Menu;

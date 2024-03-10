import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Company</h4>
              <Link className="btn btn-link" to={`/about`}>
                About Us
              </Link>
              <Link className="btn btn-link" to={`/contact`}>
                Contact Us
              </Link>
              <Link className="btn btn-link" to={`/services`}>
                Services
              </Link>
              <Link className="btn btn-link" to={`/price`}>
                Price
              </Link>
              <Link className="btn btn-link" to={`/packages`}>
                Packages
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                Van Phuc, Thu Duc, Ho Chi Minh
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                0972.546.041
              </p>
              <p className="mb-2">
               <a href="mailto:info@group5.com"><i className="fa fa-envelope me-3" />
                info@group5.com</a> 
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Gallery</h4>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="img/package-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="img/package-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="img/package-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="img/package-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="img/package-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="img/package-1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Newsletter</h4>
              <p>We will contact you as soon as possible.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: 400 }}
              >
              </div>
            </div>
          </div>
        </div>
       
      </div>
      {/* Footer End */}

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </div>
  );
}

export default Footer;

import React, { useEffect } from 'react';
import Menu from './Menu';

function Header({number}) {
  useEffect(() => {
    const spinnerTimeout = setTimeout(() => {
      const spinnerEl = document.getElementById('spinner');
      if (spinnerEl) {
        spinnerEl.classList.remove('show');
      }
    }, 1000);
    return () => {
      clearTimeout(spinnerTimeout);
    };
  }, []);
  return (
    <div>
      {/* Spinner Start */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: '3rem', height: '3rem' }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}

      {/* Topbar Start */}
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2" />
                Thu Duc, Ho Chi Minh
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2" />
                0972 546 041
              </small>
              <small className="text-light">
               <a href="mailto:info@group5.com"><i className="fa fa-envelope-open me-2" />
                info@group5.com</a>  
              </small>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
        <Menu number={number} />
      </div>
      {/* Navbar & Hero End */}
    </div>
  );
}

export default Header;

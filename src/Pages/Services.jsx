import React from 'react';
import Menu from '../Components/Menu';
import Service from '../Data/Services.json';

function Services() {
  return (
    <div>
      <div>
        {/* Navbar & Hero Start */}
        <div className="container-fluid position-relative p-0">
          <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
              <div className="row justify-content-center py-5">
                <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                  <h1 className="display-3 text-white animated slideInDown">
                    Services
                  </h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                      </li>
                      <li
                        className="breadcrumb-item text-white active"
                        aria-current="page"
                      >
                        Services
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar & Hero End */}

        {/* Service Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Services
              </h6>
              <h1 className="mb-5">Our Services</h1>
            </div>
            <div className="row g-4">
              {Service.map((item) => (
                <div
                  className="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item rounded pt-3">
                    <div className="p-4">
                      <i className={item.icon} />
                      <h5>{item.name}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Service End */}
      </div>
    </div>
  );
}

export default Services;

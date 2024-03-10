import React from 'react';

import Menu from '../Components/Menu';
import Guide from '../Data/Guide.json';

function About() {
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
                    About Us
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
                        About
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar & Hero End */}

        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ minHeight: 400 }}
              >
                <div className="position-relative h-100">
                  <img
                    className="img-fluid position-absolute w-100 h-100"
                    src="img/about.jpg"
                    alt=""
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="section-title bg-white text-start text-primary pe-3">
                  About Us
                </h6>
                <h1 className="mb-4">
                  Welcome to <span className="text-primary">Tourist</span>
                </h1>
                <p className="mb-4">
                  Tourist is a leading travel agency dedicated to providing
                  exceptional travel experiences to adventurous individuals and
                  families alike. With our extensive knowledge and expertise in
                  the travel industry, we strive to create unforgettable
                  journeys that cater to your unique preferences and interests.
                </p>
                <p className="mb-4">
                  At Tourist, we believe that travel is not just about visiting
                  new places, but also about creating lifelong memories and
                  forging meaningful connections with the world around us.
                </p>
                <div className="row gy-2 gx-4 mb-4">
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      First Class Flights
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      Handpicked Hotels
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />5
                      Star Accommodations
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      Latest Model Vehicles
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      150 Premium City Tours
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      24/7 Service
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Team Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Travel Guide
              </h6>
              <h1 className="mb-5">Meet Our Guide</h1>
            </div>
            <div className="row g-4">
              {Guide.map((item) => (
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src={item.image} alt="" />
                    </div>
                    <div
                      className="position-relative d-flex justify-content-center"
                      style={{ marginTop: '-19px' }}
                    >
                      <a className="btn btn-square mx-1" href={item.fb}>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square mx-1" href={item.tt}>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square mx-1" href={item.in}>
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="text-center p-4">
                      <h5 className="mb-0">{item.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Team End */}
      </div>
    </div>
  );
}

export default About;

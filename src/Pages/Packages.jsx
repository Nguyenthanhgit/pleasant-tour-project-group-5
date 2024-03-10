import React from 'react';
import Package from '../Data/Package.json';
import { Link } from 'react-router-dom';

function Packages({ handleAdd }) {
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
                    Packages
                  </h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item text-white active"
                        aria-current="page"
                      >
                        Packages
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar & Hero End */}
        {/* Package Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Packages
              </h6>
              <h1 className="mb-5">Awesome Packages</h1>
            </div>
            <div className="row g-4 justify-content-center">
              {Package.map((item) => (
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="package-item">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src={item.image} alt="" />
                    </div>
                    <div className="d-flex border-bottom">
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        {item.name}
                      </small>
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-calendar-alt text-primary me-2" />
                        {item.days}
                        days
                      </small>
                      <small className="flex-fill text-center py-2">
                        <i className="fa fa-user text-primary me-2" />
                        {item.person} Person
                      </small>
                    </div>
                    <div className="text-center p-4">
                      <h3 className="mb-0">${item.price}</h3>
                      <div className="mb-3">
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                      </div>
                      <p>{item.desc}</p>
                      <div className="d-flex justify-content-center mb-2">
                        <Link
                          to={`/detail/${item.id}`}
                          className="btn btn-sm btn-primary px-3 border-end"
                          style={{ borderRadius: '30px 0 0 30px' }}
                        >
                          Read More
                        </Link>
                        <button
                          className="btn btn-sm btn-primary px-3"
                          style={{ borderRadius: '0 30px 30px 0' }}
                          onClick={() => handleAdd(item)}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Package End */}
        {/* Process Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center pb-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h6 className="section-title bg-white text-center text-primary px-3">
                Process
              </h6>
              <h1 className="mb-5">3 Easy Steps</h1>
            </div>
            <div className="row gy-5 gx-4 justify-content-center">
              <div
                className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="position-relative border border-primary pt-5 pb-4 px-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                    style={{ width: 100, height: 100 }}
                  >
                    <i className="fa fa-globe fa-3x text-white" />
                  </div>
                  <h5 className="mt-4">Choose A Destination</h5>
                  <hr className="w-25 mx-auto bg-primary mb-1" />
                  <hr className="w-50 mx-auto bg-primary mt-0" />
                  <p className="mb-0">Please choose a suitable location</p>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="position-relative border border-primary pt-5 pb-4 px-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                    style={{ width: 100, height: 100 }}
                  >
                    <i className="fa fa-dollar-sign fa-3x text-white" />
                  </div>
                  <h5 className="mt-4">Pay Online</h5>
                  <hr className="w-25 mx-auto bg-primary mb-1" />
                  <hr className="w-50 mx-auto bg-primary mt-0" />
                  <p className="mb-0">
                    You can make payment online for convenience.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="position-relative border border-primary pt-5 pb-4 px-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                    style={{ width: 100, height: 100 }}
                  >
                    <i className="fa fa-plane fa-3x text-white" />
                  </div>
                  <h5 className="mt-4">Fly Today</h5>
                  <hr className="w-25 mx-auto bg-primary mb-1" />
                  <hr className="w-50 mx-auto bg-primary mt-0" />
                  <p className="mb-0">
                    Please choose the date and time you would like to fly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Process Start */}
      </div>
    </div>
  );
}

export default Packages;

import React from 'react';
import Menu from '../Components/Menu';
import Guide from '../Data/Guide.json';

function Team() {
  return (
    <>
      <div>
        {/* Navbar & Hero Start */}
        <div className="container-fluid position-relative p-0">
          <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
              <div className="row justify-content-center py-5">
                <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                  <h1 className="display-3 text-white animated slideInDown">
                    Guides
                  </h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                      </li>
                      <li
                        className="breadcrumb-item text-white active"
                        aria-current="page"
                      >
                        Guides
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar & Hero End */}
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
              {Guide.map((item)=>(
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
    </>
  );
}

export default Team;

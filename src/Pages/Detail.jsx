import React from 'react'
import { useParams } from 'react-router-dom'
import Package from "../Data/Package.json";

function Detail() {
    const { id } = useParams();
    var item = Package.filter((item) => item.id == id);
    item = item[0];
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
                    {item.name}
                  </h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item text-white active"
                        aria-current="page"
                      >
                        {item.name}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar & Hero End */}

        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Detail Page
          </h6>
          <h1 className="mb-5">{item.title}</h1>
        </div>
      </div>

      <div className="container">
        <div className="content">
            <div dangerouslySetInnerHTML={{ __html: item.content }} />
        </div>
      </div>
    </div>
  )
}

export default Detail
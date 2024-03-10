import React, { useState } from 'react';
import Menu from '../Components/Menu';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    message: '',
    email: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    title: '',
    message: '',
    email: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      title: '',
      message: '',
      email: '',
    };

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (formData.title.trim() === '') {
      newErrors.title = 'title is required';
      valid = false;
    }
    if (formData.message.trim() === '') {
      newErrors.message = 'message is required';
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email message';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Thank you contact us!');
      window.location.reload();
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div>
      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white animated slideInDown">
                  Contact Us
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
                      Contact
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar & Hero End */}

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Contact Us
            </h6>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h5>Connect with us</h5>
              <p className="mb-4">
                Get in touch with us to experience top-notch services and avail
                the best deals and offers!
              </p>
              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: 50, height: 50 }}
                >
                  <i className="fa fa-map-marker-alt text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Office</h5>
                  <p className="mb-0">
                    62 Duong 36, Hiep Binh Phuoc, Van Phuc, Thu Duc
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: 50, height: 50 }}
                >
                  <i className="fa fa-title-alt text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Mobile</h5>
                  <p className="mb-0">+012 345 67890</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: 50, height: 50 }}
                >
                  <i className="fa fa-envelope-open text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Email</h5>
                  <p className="mb-0">info@group5.com</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <iframe
                title="Google Map of New York, USA"
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.547210114064!2d106.70816237488364!3d10.845921389307122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175286e3301aabd%3A0xdd0d9cd3bcd2146!2zNjIgxJDGsOG7nW5nIDM2LCBLaHUgxJHDtCBUaOG7iyBW4bqhbiBQaMO6YywgVFAuVGjhu6cgxJDhu6ljLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1708763805183!5m2!1svi!2s"
                frameBorder={0}
                style={{ minHeight: 300, border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
            <div
              className="col-lg-4 col-md-12 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>

                      <span className="error">{formErrors.name}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                      <span className="error">{formErrors.email}</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                      <span className="error">{formErrors.title}</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ height: 100 }}
                        defaultValue={''}
                      />
                      <label htmlFor="message">Message</label>
                      <span className="error">{formErrors.message}</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

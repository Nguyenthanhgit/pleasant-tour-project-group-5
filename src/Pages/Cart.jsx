import React, { useState } from 'react'

function Cart({ cartItems, deleteCart }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    purchase: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    purchase: "",
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
      name: "",
      phone: "",
      address: "",
      email: "",
      purchase: "",
    };

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone is required";
      valid = false;
    }
    if (formData.address.trim() === "") {
      newErrors.address = "Address is required";
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    if (formData.purchase.trim() === "") {
      newErrors.purchase = "Booking is required";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Order has been placed");
      window.location.reload();
    } else {
      console.log("Form validation failed");
    }
  };
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
                    BOOKING
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
                       Booking
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
            Booking Page
          </h6>
          <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-bordered text-center mb-0">
              <thead className="bg-secondary text-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {cartItems.map((item) => (
                  <tr>
                    <td className="align-middle">
                      <img width={50} src={item.image} alt="{item.name}" /> {item.name}
                    </td>
                    <td className="align-middle">${item.price}</td>
                    <td className="align-middle">
                      <div className="input-group quantity mx-auto">
                        <input
                          type="text"
                          className="form-control form-control-sm  text-center"
                          value={item.quantity}
                        />
                      </div>
                    </td>
                    <td className="align-middle">
                      ${item.quantity * item.price}
                    </td>
                    <td className="align-middle">
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => deleteCart(item)}
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <div className="card border-secondary mb-5">
              <div className="card-header bg-secondary border-0">
                <h4 className="font-weight-semi-bold m-0">INFORMATION</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <b>Personal Info</b>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <span className="error">{formErrors.name}</span>
                  </div>
                  <div className="form-group">
                    <b>Phone Number</b>
                    <input
                      className="form-control"
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <span className="error">{formErrors.phone}</span>
                  </div>
                  <div className="form-group">
                    <b>Address</b>
                    <input
                      className="form-control"
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    <span className="error">{formErrors.address}</span>
                  </div>
                  <div className="form-group">
                    <b>Email:</b>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <span className="error">{formErrors.email}</span>
                  </div>
                  <div className="form-group">
                    <b>Booking Date:</b>
                    <input
                      className="form-control"
                      type="text"
                      id="purchase"
                      name="purchase"
                      value={formData.purchase}
                      onChange={handleChange}
                    />
                    <span className="error">{formErrors.purchase}</span>
                  </div>
                  &nbsp;&nbsp;
                  <button
                    type="submit"
                    className="btn btn-block btn-primary my-3 py-3"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
            
        </div>
      </div>
    </div>
  )
}

export default Cart
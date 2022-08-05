import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  const accessToken = localStorage.getItem('token_id')
  const handleLogout = (e) => {
    accessToken.removeItem("token_id");
    navigate("/");
  };

  return (
    <div>
      <header className="inner-header" id="fixed-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg ">
            <div className="navbar-inner-box d-flex justify-content-between align-items-center">
              <div className="nav-L">
                <Link  to="#" className="navbar-brand desktop-view-logo">
                  <img src="assets/images/logo.png" alt="logo" />
                </Link>
                <Link
                  to="#"
                  className="navbar-brand mob-logo-view "
                  style={{ display: "none" }}
                >
                  <img src="" alt="logo" />
                </Link>
              </div>
              <div className="nav-R d-flex align-items-center">
                <Link to="#" className="notifications-btn">
                  <i className="ti ti-bell"></i>
                </Link>
                <figure className="user-img ms-3">
                  <img src="images/profile-img.png" alt="logo" />
                </figure>
                <button
                  className="navbar-toggler ms-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">
                    <i className="ti ti-menu-2"></i>
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <Link
                    to="#"
                    className="closebtn"
                    id="close"
                    onClick="closeNav()"
                  >
                    ×
                  </Link>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        to="#"
                        className="nav-link active"
                        aria-current="page"
                      >
                        <i className="ti ti-user"></i>Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="#"
                        className="nav-link "
                        aria-current="page"
                      >
                        <i className="ti ti-users"></i>Manage Groups
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="#"
                        className="nav-link "
                        aria-current="page"
                      >
                        <i className="ti ti-user"></i>Manage Members
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="#"
                        className="nav-link "
                        aria-current="page"
                      >
                        <i className="ti ti-receipt"></i>Billing Summary
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="#"
                        className="nav-link "
                        aria-current="page"
                      >
                        <i className="ti ti-calendar-event"></i>My Calendar
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="#"
                        className="nav-link "
                        aria-current="page"
                      >
                        <i className="ti ti-layout-grid"></i>Campaign Manager{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="#"
                        className="nav-link "
                        aria-current="page"
                      >
                        <i className="ti ti-wallet"></i>Manage Financial
                        Information
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="#"
                        className="nav-link "
                        aria-current="page"
                      >
                        <i className="ti ti-settings"></i>Settings
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="#"
                        className="nav-link "
                        aria-current="page"
                      >
                        <i className="ti ti-player-play"></i>Tutorial
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="#"
                        className="nav-link "
                        aria-current="page"
                      >
                        <i className="ti ti-file-text"></i>Terms and Condition
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="#"
                        className="nav-link "
                        aria-current="page"
                      >
                        <i className="ti ti-lock"></i>Privacy Policy
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="#"
                        className="nav-link "
                        aria-current="page"
                        data-bs-toggle="modal"
                        data-bs-target="#contact-us"
                      >
                        <i className="ti ti-phone"></i>Contact us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        aria-current="page"
                        onClick={handleLogout}
                      >
                        <i className="ti ti-logout"></i>Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* <!-- contact-us--> */}
      <div
        className="modal fade common-modal"
        id="contact-us"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-head text-center mb-4">
              <h5 className="modal-title" id="exampleModalLabel">
                Contact Us
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="text-center content-modal">
                <p>
                  If you have any questions and/or would like to provide any
                  feedback, please click the button below to send an email to
                  the Notetify team. Someone will reach out to you shortly.{" "}
                </p>
                <div className="btn-box mt-4">
                  {" "}
                  <button className="btn full-btn hvr-sweep-to-right">
                    Send an Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
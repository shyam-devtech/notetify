import React, {/* useEffect */} from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./header";

const Home = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!localStorage.getItem("token_id")) return navigate("/login");
//   }, []);

  return (
    <>
      {/* <!--- inner-header ---> */}

      <Navbar />

      {/* <div className="d-flex align-items-center justify-content-center">
        <button onClick={handleLogout} className="btn p-4 btn-dark text-bold">
          Logout
        </button>
      </div> */}

      <div className="wraper-inner bg-grey  space-top">
        <section className="home-main pt-4 pb-5">
          <div className="container">
            <div className="home-head similar-shadow-2 text-center">
              <small className="d-flex justify-content-center align-items-center mb-3">
                <i className="ti ti-building"></i> Indian Institute of
                Technology (IIT)
              </small>
              <ul className="total-box d-flex justify-content-center mb-3">
                <li>
                  <span>Total Members</span>
                  <p>1,000</p>
                </li>
                <li>
                  <span>Total Groups</span>
                  <p>800</p>
                </li>
              </ul>
              <div className="home-btn-group d-flex justify-content-center">
                <Link to="#" className="blue-btn hvr-sweep-to-right">
                  <i className="ti ti-message"></i>Create Post
                </Link>
                <Link
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#add-member"
                  className="blue-border-btn"
                >
                  <i className="ti ti-user-plus"></i>Add Member
                </Link>
                <Link to="#" className="black-btn ">
                  <i className="ti ti-users"></i>Create Group
                </Link>
              </div>
            </div>
            <div className="search-box mt-4 mb-4">
              <input
                type="text"
                name=""
                className="form-control"
                placeholder="Search here.."
              />
              <button className="serch-btn">
                <i className="ti ti-search"></i>
              </button>
            </div>
            <hr className="border-grey mt-4 mb-4" />
            <div className="row all-post-group">
              <div className="col-md-4 all-group-L">
                <div className="similar-shadow-2">
                  <div className="all-group-L-head d-flex align-items-center justify-content-between">
                    <h4>Groups</h4>
                    <Link to="#">
                      <img src="images/archived-icon.png" alt="icon" />
                      Show Archived
                    </Link>
                  </div>
                  <div className="all-group-L-body">
                    <ul className="all-group-L-list">
                      <li className="d-flex  justify-content-between">
                        <div className="all-group-L-list-L">
                          <h4>ABC Group</h4>
                          <div className="abc-group">
                            <span>
                              <b>Posts:</b>30
                            </span>
                            <span>
                              <b>Members:</b>24
                            </span>
                          </div>
                        </div>
                        <div className="all-group-L-list-R d-flex">
                          <Link to="#">
                            <img src="images/archived-icon.png" alt="icon" />
                          </Link>
                          <Link to="#">
                            <img src="images/delete-icon.png" alt="icon" />
                          </Link>
                        </div>
                      </li>
                      <li className="d-flex  justify-content-between">
                        <div className="all-group-L-list-L">
                          <h4>ABC Group</h4>
                          <div className="abc-group">
                            <span>
                              <b>Posts:</b>30
                            </span>
                            <span>
                              <b>Members:</b>24
                            </span>
                          </div>
                        </div>
                        <div className="all-group-L-list-R d-flex">
                          <Link to="#">
                            <img src="images/archived-icon.png" alt="icon" />
                          </Link>
                          <Link to="#">
                            <img src="images/delete-icon.png" alt="icon" />
                          </Link>
                        </div>
                      </li>
                      <li className="d-flex  justify-content-between">
                        <div className="all-group-L-list-L">
                          <h4>ABC Group</h4>
                          <div className="abc-group">
                            <span>
                              <b>Posts:</b>30
                            </span>
                            <span>
                              <b>Members:</b>24
                            </span>
                          </div>
                        </div>
                        <div className="all-group-L-list-R d-flex">
                          <Link to="#">
                            <img src="images/archived-icon.png" alt="icon" />
                          </Link>
                          <Link to="#">
                            <img src="images/delete-icon.png" alt="icon" />
                          </Link>
                        </div>
                      </li>
                      <li className="d-flex  justify-content-between">
                        <div className="all-group-L-list-L">
                          <h4>ABC Group</h4>
                          <div className="abc-group">
                            <span>
                              <b>Posts:</b>30
                            </span>
                            <span>
                              <b>Members:</b>24
                            </span>
                          </div>
                        </div>
                        <div className="all-group-L-list-R d-flex">
                          <Link to="#">
                            <img src="images/archived-icon.png" alt="icon" />
                          </Link>
                          <Link to="#">
                            <img src="images/delete-icon.png" alt="icon" />
                          </Link>
                        </div>
                      </li>
                      <li className="d-flex  justify-content-between">
                        <div className="all-group-L-list-L">
                          <h4>ABC Group</h4>
                          <div className="abc-group">
                            <span>
                              <b>Posts:</b>30
                            </span>
                            <span>
                              <b>Members:</b>24
                            </span>
                          </div>
                        </div>
                        <div className="all-group-L-list-R d-flex">
                          <Link to="#">
                            <img src="images/archived-icon.png" alt="icon" />
                          </Link>
                          <Link to="#">
                            <img src="images/delete-icon.png" alt="icon" />
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-8 all-posts">
                <h3 className="inner-title mb-3">All Posts</h3>
                <div className="all-posts-box similar-shadow-2 mb-4">
                  <div className="dropdown all-post-toggle">
                    <button
                      className=" dropdown-toggle all-post"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots"></i>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-pencil"></i>Edit Post
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-post"
                          className="dropdown-item"
                        >
                          <i className="ti ti-trash"></i> Delete Post
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <small>02/17/2022 10:30 AM</small>
                  <h4>Discover our Top School</h4>
                  <ul className="all-post-cate-list d-flex">
                    <li>Group 1</li>
                    <li>IIT</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et{" "}
                  </p>
                  <figure className="common-content-box">
                    <img src="images/posts-img.png" alt="icon" />
                  </figure>
                  <div className="all-posts-footer d-flex justify-content-between">
                    <ul className="d-flex">
                      <li>
                        <Link to="#">
                          <i className="ti ti-thumb-up"></i> 10
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ti ti-message-dots"></i> 10
                        </Link>
                      </li>
                    </ul>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#remind-me-at"
                      className="bell-noti"
                    >
                      <i className="ti ti-bell-ringing"></i>
                    </Link>
                  </div>
                  <div className="comments-post ">
                    <h4 className="sub-title mb-2 mt-2">Comments</h4>
                    <div className="type-comment mb-3">
                      <input
                        type="text"
                        name=""
                        placeholder="Post your comment here...."
                        className="form-control"
                      />
                      <button className="post-comment-btn">
                        <i className="ti ti-send"></i>
                      </button>
                    </div>
                    <ul className="post-comment-list">
                      <li className="d-flex">
                        <figure className="post-comment-list-L">
                          <img src="images/post-user.png" alt="icon" />
                        </figure>
                        <figcaption className="post-comment-list-R">
                          <div className="post-comment-list-R-head d-flex justify-content-between mb-1">
                            <h3>John P. Whitmer</h3>
                            <div className="post-comment-list-R-head-right d-flex align-items-center">
                              <small>10 min ago</small>
                              <Link to="#" className="edit-post ms-3">
                                <i className="ti ti-pencil"></i>
                              </Link>
                              <Link to="#" className="delete-post ms-2">
                                <i className="ti ti-trash"></i>
                              </Link>
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip{" "}
                          </p>
                        </figcaption>
                      </li>
                      <hr className="border-grey" />
                      <li className="d-flex">
                        <figure className="post-comment-list-L">
                          <img src="images/post-user.png" alt="icon" />
                        </figure>
                        <figcaption className="post-comment-list-R">
                          <div className="post-comment-list-R-head d-flex justify-content-between mb-1">
                            <h3>John P. Whitmer</h3>
                            <div className="post-comment-list-R-head-right d-flex align-items-center">
                              <small>10 min ago</small>
                              <Link to="#" className="edit-post ms-3">
                                <i className="ti ti-pencil"></i>
                              </Link>
                              <Link to="#" className="delete-post ms-2">
                                <i className="ti ti-trash"></i>
                              </Link>
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip{" "}
                          </p>
                        </figcaption>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="all-posts-box similar-shadow-2 mb-4">
                  <div className="dropdown all-post-toggle">
                    <button
                      className=" dropdown-toggle all-post"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots"></i>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-pencil"></i>Edit Post
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-trash"></i> Delete Post
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <small>02/17/2022 10:30 AM</small>
                  <h4>
                    Discover our Top School &nbsp;
                    <Link to="#" className="calender-box">
                      <i className="ti ti-calendar"></i>
                    </Link>
                  </h4>
                  <ul className="all-post-cate-list d-flex">
                    <li>Group 1</li>
                    <li>IIT</li>
                  </ul>
                  <ul className="time-info d-flex mb-3">
                    <li>
                      <i className="ti ti-calendar"></i> 02/17/2022 10:30 AM
                    </li>
                    <li>
                      <i className="ti ti-map-pin"></i> Manchester, MO
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et{" "}
                  </p>
                  <div className="common-content-box">
                    <video width="508" height="235" controls>
                      <source src="movie.mp4" type="video/mp4" />
                      <source src="movie.ogg" type="video/ogg" />
                    </video>
                  </div>
                  <div className="all-posts-footer d-flex justify-content-between">
                    <ul className="d-flex">
                      <li>
                        <Link to="#" className="blue-thumb">
                          <i className="ti ti-thumb-up"></i> 10
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ti ti-message-dots"></i> 10
                        </Link>
                      </li>
                    </ul>
                    <div className="d-flex align-items-center bell-noti-main">
                      <Link
                        to="#"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#rsvp"
                      >
                        RSVP
                      </Link>
                      <Link to="#" className="bell-noti ms-2">
                        {" "}
                        <i className="ti ti-bell-ringing"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="all-posts-box similar-shadow-2 mb-4">
                  <div className="dropdown all-post-toggle">
                    <button
                      className=" dropdown-toggle all-post"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots"></i>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-pencil"></i>Edit Post
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-trash"></i> Delete Post
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <small>02/17/2022 10:30 AM</small>
                  <h4>
                    Discover our Top School &nbsp;
                    <Link to="#" className="calender-box">
                      <i className="ti ti-calendar"></i>
                    </Link>
                  </h4>
                  <ul className="all-post-cate-list d-flex">
                    <li>Group 1</li>
                    <li>IIT</li>
                  </ul>
                  <div className="s-btn-group mb-3 mt-3">
                    <span className="btn-green s-btn me-2">NEW</span>
                    <span className="btn-green s-btn">EDITED</span>
                  </div>
                  <ul className="time-info d-flex mb-3">
                    <li>
                      <i className="ti ti-calendar"></i> 02/17/2022 10:30 AM
                    </li>
                    <li>
                      <i className="ti ti-map-pin"></i> Manchester, MO
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et{" "}
                  </p>
                  <div className="all-posts-footer d-flex justify-content-between mt-4">
                    <ul className="d-flex">
                      <li>
                        <Link to="#" className="blue-thumb">
                          <i className="ti ti-thumb-up"></i> 10
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ti ti-message-dots"></i> 10
                        </Link>
                      </li>
                      <li className="attach-item">
                        <Link to="#">
                          <i className="ti ti-paperclip"></i>
                        </Link>
                      </li>
                    </ul>
                    <div className="d-flex align-items-center bell-noti-main">
                      <Link
                        to="#"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#rsvp-pay"
                      >
                        RSVP & PAY{" "}
                      </Link>
                      <Link to="#" className="bell-noti ms-2">
                        {" "}
                        <i className="ti ti-bell-ringing"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="all-posts-box similar-shadow-2 mb-4">
                  <div className="dropdown all-post-toggle">
                    <button
                      className=" dropdown-toggle all-post"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots"></i>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-pencil"></i>Edit Post
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-trash"></i> Delete Post
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <small>02/17/2022 10:30 AM</small>
                  <h4>
                    Discover our Top School &nbsp;
                    <Link to="#" className="calender-box">
                      <i className="ti ti-calendar"></i>
                    </Link>
                  </h4>
                  <ul className="all-post-cate-list d-flex">
                    <li>Group 1</li>
                    <li>IIT</li>
                  </ul>
                  <div className="s-btn-group mb-3 mt-3">
                    <span className="btn-green s-btn me-2">NEW</span>
                    <span className="btn-green s-btn">EDITED</span>
                  </div>
                  <ul className="time-info d-flex mb-3">
                    <li>
                      <i className="ti ti-calendar"></i> 02/17/2022 10:30 AM
                    </li>
                    <li>
                      <i className="ti ti-map-pin"></i> Manchester, MO
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et{" "}
                  </p>
                  <div className="all-posts-footer d-flex justify-content-between mt-4">
                    <ul className="d-flex">
                      <li>
                        <Link to="#" className="blue-thumb">
                          <i className="ti ti-thumb-up"></i> 10
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ti ti-message-dots"></i> 10
                        </Link>
                      </li>
                      <li className="attach-item">
                        <Link to="#">
                          <i className="ti ti-paperclip"></i>
                        </Link>
                      </li>
                    </ul>
                    <div className="d-flex align-items-center bell-noti-main">
                      <Link
                        to="#"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#only-pay"
                      >
                        PAY{" "}
                      </Link>
                      <Link to="#" className="bell-noti ms-2">
                        {" "}
                        <i className="ti ti-bell-ringing"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="all-posts-box similar-shadow-2 mb-4">
                  <div className="dropdown all-post-toggle">
                    <button
                      className=" dropdown-toggle all-post"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots"></i>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-pencil"></i>Edit Post
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-trash"></i> Delete Post
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <small>02/17/2022 10:30 AM</small>
                  <h4>
                    Discover our Top School &nbsp;
                    <Link to="#" className="calender-box">
                      <i className="ti ti-calendar"></i>
                    </Link>
                  </h4>
                  <ul className="all-post-cate-list d-flex">
                    <li>Group 1</li>
                    <li>IIT</li>
                  </ul>
                  <div className="s-btn-group mb-3 mt-3">
                    <span className="btn-red s-btn">CANCELLED</span>
                  </div>
                  <ul className="time-info d-flex mb-3">
                    <li>
                      <i className="ti ti-calendar"></i> 02/17/2022 10:30 AM
                    </li>
                    <li>
                      <i className="ti ti-map-pin"></i> Manchester, MO
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et{" "}
                  </p>
                  <div className="all-posts-footer d-flex justify-content-between mt-4">
                    <ul className="d-flex">
                      <li>
                        <Link to="#" className="blue-thumb">
                          <i className="ti ti-thumb-up"></i> 10
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ti ti-message-dots"></i> 10
                        </Link>
                      </li>
                    </ul>
                    <div className="d-flex align-items-center bell-noti-main">
                      <Link to="#" className="bell-noti ms-2">
                        {" "}
                        <i className="ti ti-bell-ringing"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="all-posts-box similar-shadow-2 mb-4">
                  <div className="dropdown all-post-toggle">
                    <button
                      className=" dropdown-toggle all-post"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots"></i>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-pencil"></i>Edit Post
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-trash"></i> Delete Post
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <small>02/17/2022 10:30 AM</small>
                  <h4>
                    Discover our Top School &nbsp;
                    <Link to="#" className="calender-box">
                      <i className="ti ti-calendar"></i>
                    </Link>
                  </h4>
                  <ul className="all-post-cate-list d-flex">
                    <li>Group 1</li>
                    <li>IIT</li>
                  </ul>
                  <div className="s-btn-group mb-3 mt-3">
                    <span className="btn-green s-btn me-2">NEW</span>
                    <span className="btn-green s-btn">DM</span>
                  </div>
                  <ul className="time-info d-flex mb-3">
                    <li>
                      <i className="ti ti-calendar"></i> 02/17/2022 10:30 AM
                    </li>
                    <li>
                      <i className="ti ti-map-pin"></i> Manchester, MO
                    </li>
                  </ul>
                  <div className="payment-info d-flex mt-3 mb-2">
                    <span className="me-4">
                      <b>Payment Amount: </b>$20{" "}
                    </span>
                    <span>
                      <b>Due :</b>02/17/2022{" "}
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et{" "}
                  </p>
                  <div className="all-posts-footer d-flex justify-content-between mt-4">
                    <ul className="d-flex">
                      <li>
                        <Link to="#" className="blue-thumb">
                          <i className="ti ti-thumb-up"></i> 10
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ti ti-message-dots"></i> 10
                        </Link>
                      </li>
                      <li className="attach-item">
                        <Link to="#">
                          <i className="ti ti-paperclip"></i>
                        </Link>
                      </li>
                    </ul>
                    <div className="d-flex align-items-center bell-noti-main">
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#renew"
                      >
                        RENEW{" "}
                      </Link>
                      <Link to="#" className="bell-noti ms-2">
                        {" "}
                        <i className="ti ti-bell-ringing"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="all-posts-box similar-shadow-2 mb-4">
                  <div className="dropdown all-post-toggle">
                    <button
                      className=" dropdown-toggle all-post"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots"></i>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-pencil"></i>Edit Post
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-trash"></i> Delete Post
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <small>02/17/2022 10:30 AM</small>
                  <h4>
                    Discover our Top School &nbsp;
                    <Link to="#" className="calender-box">
                      <i className="ti ti-calendar"></i>
                    </Link>
                  </h4>
                  <ul className="all-post-cate-list d-flex">
                    <li>Group 1</li>
                    <li>IIT</li>
                  </ul>
                  <div className="s-btn-group mb-3 mt-3">
                    <span className="btn-green s-btn me-2">NEW</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et{" "}
                  </p>
                  <table width="100%" className="post-table">
                    <tbody>
                      <tr>
                        <th>Price</th>
                        <th>Sales Tax</th>
                        <th>Price</th>
                        <th>Size</th>
                      </tr>
                      <tr>
                        <td>$200</td>
                        <td>$10</td>
                        <td>38, 40</td>
                        <td>Black, Pink</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="all-posts-footer d-flex justify-content-between mt-4">
                    <ul className="d-flex">
                      <li>
                        <Link to="#" className="blue-thumb">
                          <i className="ti ti-thumb-up"></i> 10
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ti ti-message-dots"></i> 10
                        </Link>
                      </li>
                    </ul>
                    <div className="d-flex align-items-center bell-noti-main">
                      <Link to="#" data-bs-toggle="modal" data-bs-target="#buy">
                        BUY{" "}
                      </Link>
                      <Link to="#" className="bell-noti ms-2">
                        {" "}
                        <i className="ti ti-bell-ringing"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="all-posts-box similar-shadow-2 mb-4 bg-grey sponsored-box">
                  <div className="sponsored-box-head">
                    <div className="dropdown all-post-toggle">
                      <button
                        className=" dropdown-toggle all-post"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots"></i>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link to="#" className="dropdown-item">
                            <i className="ti ti-pencil"></i>Edit Post
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            <i className="ti ti-trash"></i> Delete Post
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <small>02/17/2022 10:30 AM</small>
                    <h4>Discover our Top School</h4>
                    <div className="s-btn-group mb-3 mt-3">
                      <span className="btn-green s-btn me-2">SPONSORED</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et{" "}
                    </p>
                  </div>
                  <figure className="mt-4">
                    <img src="images/sponsored-img.png" alt="icon" />
                  </figure>
                </div>
                <div className="all-posts-box similar-shadow-2 mb-4">
                  <div className="dropdown all-post-toggle">
                    <button
                      className=" dropdown-toggle all-post"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ti ti-dots"></i>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-pencil"></i>Edit Post
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-trash"></i> Delete Post
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <small>02/17/2022 10:30 AM</small>
                  <h4>
                    Discover our Top School &nbsp;
                    <Link to="#" className="calender-box">
                      <i className="ti ti-calendar"></i>
                    </Link>
                  </h4>
                  <ul className="all-post-cate-list d-flex">
                    <li>IIT</li>
                  </ul>
                  <div className="s-btn-group mb-3 mt-2">
                    <span className="btn-green s-btn">DM</span>
                  </div>
                  <ul className="time-info d-flex mb-3">
                    <li>
                      <i className="ti ti-calendar"></i> 02/17/2022 10:30 AM
                    </li>
                    <li>
                      <i className="ti ti-map-pin"></i> Manchester, MO
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et{" "}
                  </p>
                  <div className="all-posts-footer d-flex justify-content-between mt-4">
                    <ul className="d-flex">
                      <li>
                        <Link to="#" className="blue-thumb">
                          <i className="ti ti-thumb-up"></i> 10
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ti ti-message-dots"></i> 10
                        </Link>
                      </li>
                    </ul>
                    <div className="d-flex align-items-center bell-noti-main">
                      <Link to="#" className="bell-noti ms-2 heighlight">
                        {" "}
                        <i className="ti ti-bell-ringing"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <ul className="pagination">
                    <li className="page-item">
                      <Link to="#" className="page-link" aria-label="Previous">
                        <span aria-hidden="true">
                          <i className="ti ti-arrow-narrow-left"></i>
                        </span>
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link to="#" className="page-link">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link to="#" className="page-link">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link to="#" className="page-link">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link to="#" className="page-link">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link to="#" className="page-link" aria-label="Next">
                        <span aria-hidden="true">
                          <i className="ti ti-arrow-narrow-right"></i>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <?php include("footer.php"); ?> */}
      {/* <!-- password-link-sent --> */}
      <div
        className="modal fade common-modal"
        id="delete-post"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-head text-center">
              <p>
                Are you sure you want to delete the <br />
                post?
              </p>
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
              <div className="d-flex">
                <button className="btn full-btn hvr-sweep-to-right black-btn me-2">
                  No
                </button>
                {/* <button className="btn full-btto="# */}
                <div className="modal-body">
                  <div className="mb-4 ">
                    <Link
                      to="#"
                      className="select-group d-flex justify-content-between"
                    >
                      Bulk Upload <i className="ti ti-file-upload"></i>
                    </Link>
                  </div>
                  <div className="mb-4 ">
                    <Link
                      to="#"
                      className="select-group d-flex justify-content-between"
                    >
                      Add Member <i className="ti ti-user-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Remind me at --> */}
          <div
            className="modal fade common-modal"
            id="remind-me-at"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-head text-center">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Remind me at
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
                  <div className="mb-4 ">
                    <input
                      type="date"
                      name=""
                      placeholder="date"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-4 ">
                    <input
                      type="time"
                      name=""
                      placeholder="time"
                      className="form-control"
                    />
                  </div>
                  <div className="">
                    {" "}
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#reminder-sucess"
                      className="btn full-btn hvr-sweep-to-right"
                    >
                      ok
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- reminder-sucess --> */}
          <div
            className="modal fade common-modal"
            id="reminder-sucess"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-head text-center mb-0">
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
                  <div className="box-content text-center">
                    <figure className="mb-4">
                      <img src="images/bell-notify.png" alt="icon" />
                    </figure>
                    <p>Reminder Set Successfully!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- RSVP --> */}
          <div
            className="modal fade common-modal max-box"
            id="rsvp"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <button
                  className="modal-head text-center btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="">
                  <div className="all-posts-box similar-shadow-3">
                    <h4>
                      Discover our Top School &nbsp;
                      <Link to="#" className="calender-box">
                        <i className="ti ti-calendar"></i>
                      </Link>
                    </h4>
                    <ul className="all-post-cate-list d-flex">
                      <li>IIT</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et{" "}
                    </p>
                  </div>
                  <hr className="border-grey" />
                  <div className="row ">
                    <div className="col-md-4 text-center">
                      <div className="adult-info purple-bg">
                        <h4 className="text-white">Yes Going</h4>
                        <div className="adult-info-num d-flex justify-content-between">
                          <span className="text-white">
                            Adult(s):<b> 01</b>
                          </span>
                          <span className="text-white">
                            Child(ren):<b> 01</b>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="adult-info grey-bg">
                        <h4 className="">May Be Going</h4>
                        <div className="adult-info-num d-flex justify-content-between">
                          <span>
                            Adult(s):<b> 01</b>
                          </span>
                          <span>
                            Child(ren):<b> 01</b>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="adult-info decline-bg">
                        <h4>Decline</h4>
                        <div className="adult-info-num d-flex justify-content-center">
                          <span>
                            Adult(s):<b> 01</b>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="sub-title mb-3 mt-4">List of Attendees</h4>
                  <table width="100%" className="list-attendees">
                    <tbody>
                      <tr>
                        <th>Member Name</th>
                        <th>Adult(s)</th>
                        <th>Child(ren)</th>
                      </tr>
                      <tr>
                        <td width="300">
                          <div className="List-Attendees-user d-flex align-items-center">
                            <figure>
                              <img src="images/pots-img-1.png" alt="icon" />
                            </figure>
                            <h4>John P. Whitmer</h4>
                          </div>
                        </td>
                        <td>03</td>
                        <td>03</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="List-Attendees-user d-flex align-items-center">
                            <figure>
                              <img src="images/pots-img-2.png" alt="icon" />
                            </figure>
                            <h4>John P. Whitmer</h4>
                          </div>
                        </td>
                        <td>03</td>
                        <td>03</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="List-Attendees-user d-flex align-items-center">
                            <figure>
                              <img src="images/pots-img-3.png" alt="icon" />
                            </figure>
                            <h4>John P. Whitmer</h4>
                          </div>
                        </td>
                        <td>03</td>
                        <td>03</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="List-Attendees-user d-flex align-items-center">
                            <figure>
                              <img src="images/pots-img-4.png" alt="icon" />
                            </figure>
                            <h4>John P. Whitmer</h4>
                          </div>
                        </td>
                        <td>03</td>
                        <td>03</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- RSVP & Pay --> */}
        <div className="modal-head text-center">
          <h5 className="modal-title" id="exampleModalLabel">
            RSVP
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
          <div className="">
            <div className="all-posts-box similar-shadow-3">
              <h4>
                Discover our Top School &nbsp;
                <Link to="#" className="calender-box">
                  <i className="ti ti-calendar"></i>
                </Link>
              </h4>
              <ul className="all-post-cate-list d-flex">
                <li>IIT</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et{" "}
              </p>
            </div>
            <hr className="border-grey" />
            <div className="row ">
              <div className="col-md-4 text-center">
                <div className="adult-info purple-bg">
                  <h4 className="text-white">Yes Going</h4>
                  <div className="adult-info-num d-flex justify-content-between">
                    <span className="text-white">
                      Adult(s):<b> 01</b>
                    </span>
                    <span className="text-white">
                      Child(ren):<b> 01</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="adult-info decline-bg">
                  <h4>Decline</h4>
                  <div className="adult-info-num d-flex justify-content-center">
                    <span>
                      Adult(s):<b> 01</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="adult-info grey-bg">
                  <h4 className=""> Total Transaction Amount</h4>
                  <div className="adult-info-num d-flex justify-content-center">
                    <span>$1,000</span>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="sub-title mb-3 mt-4">
              List of Attendees & Transactions
            </h4>
            <div className="over-table">
              <table width="100%" className="list-attendees">
                <tbody>
                  <tr>
                    <th>Member Name</th>
                    <th>Adult(s)</th>
                    <th>Child(ren)</th>
                    <th>Quantity</th>
                    <th>Paid</th>
                    <th>Confirmation#</th>
                    <th>Comments</th>
                  </tr>
                  <tr>
                    <td>
                      <div className="List-Attendees-user d-flex align-items-center">
                        <figure>
                          <img src="images/post-user.png" alt="icon" />
                        </figure>
                        <h4>John P. Whitmer</h4>
                      </div>
                    </td>
                    <td>03</td>
                    <td>03</td>
                    <td>03</td>
                    <td>$100</td>
                    <td>6557475</td>
                    <td>Lorem ipsum sit amet Lorem ipsum sit amet</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="List-Attendees-user d-flex align-items-center">
                        <figure>
                          <img src="images/post-user.png" alt="icon" />
                        </figure>
                        <h4>John P. Whitmer</h4>
                      </div>
                    </td>
                    <td>03</td>
                    <td>03</td>
                    <td>03</td>
                    <td>$100</td>
                    <td>6557475</td>
                    <td>Lorem ipsum sit amet Lorem ipsum sit amet</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="List-Attendees-user d-flex align-items-center">
                        <figure>
                          <img src="images/post-user.png" alt="icon" />
                        </figure>
                        <h4>John P. Whitmer</h4>
                      </div>
                    </td>
                    <td>03</td>
                    <td>03</td>
                    <td>03</td>
                    <td>$100</td>
                    <td>6557475</td>
                    <td>Lorem ipsum sit amet Lorem ipsum sit amet</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Pay--> */}
      <div
        className="modal fade common-modal rsvp-pay-box"
        id="only-pay"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-head text-center">
              <h5 className="modal-title" id="exampleModalLabel">
                Pay
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
              <div className="">
                <div className="all-posts-box similar-shadow-3">
                  <h4>
                    Discover our Top School &nbsp;
                    <Link to="#" className="calender-box">
                      <i className="ti ti-calendar"></i>
                    </Link>
                  </h4>
                  <ul className="all-post-cate-list d-flex">
                    <li>IIT</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et{" "}
                  </p>
                </div>
                <hr className="border-grey" />
                <div className="row ">
                  <div className="col-md-12 text-center">
                    <div className="adult-info grey-bg d-flex justify-content-between align-items-center pt-3 pb-3">
                      <h4 className="mb-0"> Total Transaction Amount</h4>
                      <div className="adult-info-num d-flex justify-content-center">
                        <span>
                          <b>$2,000</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="sub-title mb-3 mt-4">List of 3 Transactions</h4>
                <div className="over-table">
                  <table width="100%" className="list-attendees">
                    <tbody>
                      <tr>
                        <th>Member Name</th>
                        <th>Quantity</th>
                        <th>Paid</th>
                        <th>Confirmation#</th>
                        <th>Comments</th>
                      </tr>
                      <tr>
                        <td>
                          <div className="List-Attendees-user d-flex align-items-center">
                            <figure>
                              <img src="images/post-user.png" alt="icon" />
                            </figure>
                            <h4>John P. Whitmer</h4>
                          </div>
                        </td>
                        <td>03</td>
                        <td>$100</td>
                        <td>6557475</td>
                        <td>Lorem ipsum sit amet Lorem ipsum sit amet</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="List-Attendees-user d-flex align-items-center">
                            <figure>
                              <img src="images/post-user.png" alt="icon" />
                            </figure>
                            <h4>John P. Whitmer</h4>
                          </div>
                        </td>
                        <td>03</td>
                        <td>$100</td>
                        <td>6557475</td>
                        <td>Lorem ipsum sit amet Lorem ipsum sit amet</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="List-Attendees-user d-flex align-items-center">
                            <figure>
                              <img src="images/post-user.png" alt="icon" />
                            </figure>
                            <h4>John P. Whitmer</h4>
                          </div>
                        </td>
                        <td>03</td>
                        <td>$100</td>
                        <td>6557475</td>
                        <td>Lorem ipsum sit amet Lorem ipsum sit amet</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--renew--> */}
      <div
        className="modal fade common-modal rsvp-pay-box"
        id="renew"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-head text-center">
              <h5 className="modal-title" id="exampleModalLabel">
                Renew
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
              <div className="">
                <div className="all-posts-box similar-shadow-3">
                  <h4>
                    Discover our Top School &nbsp;
                    <Link to="#" className="calender-box">
                      <i className="ti ti-calendar"></i>
                    </Link>
                  </h4>
                  <ul className="all-post-cate-list d-flex">
                    <li>IIT</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et{" "}
                  </p>
                </div>
                <hr className="border-grey" />
                <div className="row ">
                  <div className="col-md-12 text-center">
                    <div className="adult-info grey-bg d-flex justify-content-between align-items-center pt-3 pb-3">
                      <h4 className="mb-0"> Total Renewal Amount</h4>
                      <div className="adult-info-num d-flex justify-content-center">
                        <span>
                          <b>$2,000</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="sub-title mb-3 mt-4">Renewals</h4>
                <div className="over-table">
                  <table width="100%" className="list-attendees">
                    <tbody>
                      <tr>
                        <th>Member Name</th>
                        <th>Child Name</th>
                        <th>Paid</th>
                        <th>Confirmation#</th>
                        <th>Comments</th>
                      </tr>
                      <tr>
                        <td>
                          <div className="List-Attendees-user d-flex align-items-center">
                            <figure>
                              <img src="images/post-user.png" alt="icon" />
                            </figure>
                            <h4>John P. Whitmer</h4>
                          </div>
                        </td>
                        <td>Franklin, John</td>
                        <td>$100</td>
                        <td>6557475</td>
                        <td>Lorem ipsum sit amet Lorem ipsum sit amet</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--buy--> */}
      <div
        className="modal fade common-modal rsvp-pay-box"
        id="buy"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-head text-center">
              <h5 className="modal-title" id="exampleModalLabel">
                buy
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
              <div className="">
                <div className="all-posts-box similar-shadow-3">
                  <h4>
                    Discover our Top School &nbsp;
                    <Link to="#" className="calender-box">
                      <i className="ti ti-calendar"></i>
                    </Link>
                  </h4>
                  <ul className="all-post-cate-list d-flex">
                    <li>IIT</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et{" "}
                  </p>
                </div>
                <hr className="border-grey" />
                <div className="row ">
                  <div className="col-md-12 text-center">
                    <div className="adult-info grey-bg d-flex justify-content-between align-items-center pt-3 pb-3">
                      <h4 className="mb-0"> Total Transaction Amount</h4>
                      <div className="adult-info-num d-flex justify-content-center">
                        <span>
                          <b>$2,000</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="sub-title mb-3 mt-4">List of 10 Transactions</h4>
                <div className="over-table">
                  <table width="100%" className="list-attendees">
                    <tbody>
                      <tr>
                        <th>Member Name</th>
                        <th>Quantity</th>
                        <th>Size</th>
                        <th>Color</th>
                        <th>Paid</th>
                        <th>Confirmation#</th>
                        <th>Comments</th>
                      </tr>
                      <tr>
                        <td>
                          <div className="List-Attendees-user d-flex align-items-center">
                            <figure>
                              <img src="images/post-user.png" alt="icon" />
                            </figure>
                            <h4>John P. Whitmer</h4>
                          </div>
                        </td>
                        <td>2</td>
                        <td>38</td>
                        <td>Pink</td>
                        <td>$100</td>
                        <td>6557475</td>
                        <td>Lorem ipsum sit amet Lorem ipsum sit amet</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="List-Attendees-user d-flex align-items-center">
                            <figure>
                              <img src="images/post-user.png" alt="icon" />
                            </figure>
                            <h4>John P. Whitmer</h4>
                          </div>
                        </td>
                        <td>2</td>
                        <td>38</td>
                        <td>Pink</td>
                        <td>$100</td>
                        <td>6557475</td>
                        <td>Lorem ipsum sit amet Lorem ipsum sit amet</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="List-Attendees-user d-flex align-items-center">
                            <figure>
                              <img src="images/post-user.png" alt="icon" />
                            </figure>
                            <h4>John P. Whitmer</h4>
                          </div>
                        </td>
                        <td>2</td>
                        <td>38</td>
                        <td>Pink</td>
                        <td>$100</td>
                        <td>6557475</td>
                        <td>Lorem ipsum sit amet Lorem ipsum sit amet</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="List-Attendees-user d-flex align-items-center">
                            <figure>
                              <img src="images/post-user.png" alt="icon" />
                            </figure>
                            <h4>John P. Whitmer</h4>
                          </div>
                        </td>
                        <td>2</td>
                        <td>38</td>
                        <td>Pink</td>
                        <td>$100</td>
                        <td>6557475</td>
                        <td>Lorem ipsum sit amet Lorem ipsum sit amet</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
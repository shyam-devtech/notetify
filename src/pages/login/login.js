import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { makePostRequest } from "../../utils";
import "./style.css";

const Login = () => {

  /*------------------------------*/
  /*-------Initailize State-------*/
  /*------------------------------*/

  let initialValues = {
    email: ' ',
    password: ' ',
    verifyemail: ' ',
  };

  const [passwordType, setPasswordType] = useState("password");
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  /*------------------------------*/
  /*--------Toggle Icon----------*/
  /*------------------------------*/

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  /*------------------------------*/
  /*---------Handle Input---------*/
  /*------------------------------*/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  /*------------------------------*/
  /*------Handle Validations------*/
  /*------------------------------*/
  const handleValidation = (value) => {
    const errors = {};
    const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    
    if (!value.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(value.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!value.password) {
      errors.password = "Password is required!";
    }

    return errors;

  };

  /*------------------------------*/
  /*-------Handle Login Data------*/
  /*------------------------------*/

  const handleLogin = (e) => {
    e.preventDefault();
    setIsValid(setFormErrors(handleValidation(formValues)));
  console.log(formErrors.email);


    if (isValid === true) {
      let data = {
        email: formValues.email,
        password: formValues.password,
      };
        makePostRequest("/schoolAdminAccess/login", data)
          .then((res) => {
            if (res.status === 200) {
              console.log(res.data);
              navigate("/home");
            }
          })
          .catch((err) => {
            console.log(err.res);
          });
      }
    setIsValid(true);
  };

  /*------------------------------*/
  /*-------Handle Forgot Password------*/
  /*------------------------------*/

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setIsValid(setFormErrors(handleValidation(formValues)));

    if (isValid === true) {
      let data = {
        email: formValues.verifyemail,
      }
        makePostRequest("schoolAdminAccess/forgotPassword", data)
          .then((res) => {
            if (res.status === 200) {
              console.log(res.data);
              navigate("/home");
            }
          })
          .catch((err) => {
            console.log(err.res);
          });
      }
    setIsValid(true);
  }

  // console.log(formErrors.email);

  return (
    <>
      <div className="wraper-inner bg-banner space-top">
        <section className="home-sign-in">
          <div className="container">
            <div className="row  justify-content-center">
              <div className="col-md-7 home-sign-in-L">
                <h1>Welcome</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
                <hr className="white-line" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,{" "}
                </p>
              </div>
              <div className="col-md-5 home-sign-in-R ">
                <div className="similar-shadow-box">
                  <div className="form-head">
                    <h2>Sign In</h2>
                  </div>
                  <form onSubmit={(e) => handleLogin(e)}>
                    <div className="mb-4 pb-2">
                      <label className="custom-field one">
                        <input
                          type="text"
                          placeholder=" "
                          name="email"
                          value={formValues.email}
                          onChange={handleChange}
                        />
                        <span className="placeholder"> Email Address</span>
                        <i className="ti ti-mail"></i>
                        <span className="text-danger">
                          {formErrors.email ? formErrors.email : null}
                        </span>
                      </label>
                    </div>
                    <div className="mb-4 v">
                      <label className="custom-field one">
                        <input
                          type="text"
                          placeholder=" "
                          name="password"
                          value={formValues.password}
                          onChange={handleChange}
                        />
                        <span className="placeholder"> Password</span>
                        <div onClick={togglePassword}>
                          {passwordType ? (
                            <i className="ti ti-lock" />
                          ) : (
                            <i className="ti ti-eye" />
                          )}
                        </div>
                        <span className="text-danger">
                          {formErrors.password ? formErrors.password : null}
                        </span>
                      </label>
                      <Link
                      to="#"
                        className="forget-password text-right blue-link text-end pt-2 justify-content-end"
                        data-bs-toggle="modal"
                        data-bs-target="#forget-password"
                      >
                        Forgot Password
                      </Link>
                    </div>
                    <div className="mb-3 ">
                      {" "}
                      <button className="btn full-btn hvr-sweep-to-right">
                        Sign In
                      </button>
                    </div>
                    <span className="bottom-text text-center d-flex justify-content-center  align-items-center mt-4">
                      Are you new here?{" "}
                      <Link to="/register" className="blue-link"> &nbsp;Register</Link>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- forget-password --> */}
      <div className="modal fade common-modal" id="forget-password" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div className="modal-dialog">
      <div className="modal-content">
         <div className="modal-head text-center">
            <figure><img src="images/logo-form.png" alt="logo"/>/</figure>
            <h5 className="modal-title" id="exampleModalLabel">Forgot Password</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="ti ti-x"></i></button>
         </div>
         <div className="modal-body">
            <form onSubmit={(e) => handleForgotPassword(e)}>
               <div className="mb-4 pb-2">
                  <label className="custom-field one">
                  <input type="text" name="verifyemail" value={formValues.verifyemail} onChange={handleChange} />
                  <span className="placeholder">  Email Address</span>
                  <i className="ti ti-mail"/>
                  </label>
               </div>
               <div> <button type="submit" className="btn full-btn hvr-sweep-to-right">Reset Password</button></div>
            </form>
         </div>
      </div>
   </div>
</div>
      {/* <!-- password-link-sent --> */}
      <div className="modal fade common-modal" id="password-link-sent" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div className="modal-dialog">
      <div className="modal-content">
         <div className="modal-head text-center">
            <figure><img src={require("../../assets/images/logo-form.png")}/></figure>
            <h5 className="modal-title" id="exampleModalLabel">Password Link Sent</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="ti ti-x"></i></button>
         </div>
         <div className="modal-body">
            <div className=""> <button className="btn full-btn hvr-sweep-to-right">ok</button></div>
         </div>
      </div>
   </div>
</div>
    </>
  );
};
export default Login;

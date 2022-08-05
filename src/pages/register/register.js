import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { makePostRequest } from "../../utils";

const Register = () => {

  /*------------------------------*/
  /*-------Initailize State-------*/
  /*------------------------------*/

  let initialValues = {
    firstname: '',
    lastname: '',
    email: ' ',
    password: ' ',
    confirmpassword: ' ',
    institutename: ' ',
    phoneno: ' ',
    streetaddress: ' ',
    city: ' ',
    state: ' ',
    zipcode: ' ',
  };


  // const [passwordType, setPasswordType] = useState("password");
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  /*------------------------------*/
  /*--------Toggle Icon----------*/
  /*------------------------------*/

  // const togglePassword = () => {
  //   if (passwordType === "password") {
  //     setPasswordType("text");
  //     return;
  //   }
  //   setPasswordType("password");
  // };

  /*------------------------------*/
  /*---------Handle Input---------*/
  /*------------------------------*/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  /*------------------------------*/
  /*---------Handle Input---------*/
  /*------------------------------*/
  // const emailVerification = (e) => {
    
  // };

  /*------------------------------*/
  /*------Handle Validations------*/
  /*------------------------------*/
  const handleValidation = (value) => {
    const errors = {};
    const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (!value.firstname) {
      errors.firstname = "First name is required!";
    }
    if (!value.lastname) {
      errors.lastname = "Last name is required!";
    }
    if (!value.email) {
      errors.email = "Email is required!";
    } else if(!regex.test(value.email)){
      errors.email = "Please enter a valid formate!"
    }
    if (!value.password) {
      errors.password = "Password is required!";
    }
    if (!value.confirmpassword) {
      errors.confirmpassword = "Confirn Password is required!";
    }
    if (!value.institutename) {
      errors.institutename = "Institute name is required!";
    }
    if (!value.phoneno) {
      errors.phoneno = "Mobile number is required!";
    }
    if (!value.streetaddress) {
      errors.streetaddress = "Street address is required!";
    }
    if (!value.state) {
      errors.city = "State name is required!";
    }
    if (!value.state) {
      errors.city = "City name is required!";
    }
    if (!value.zipcode) {
      errors.zipcode = "Zipcode is required!!";
    }
    return errors;
  };

  /*------------------------------*/
  /*-------Handle Login Data------*/
  /*------------------------------*/

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValid(setFormErrors(handleValidation(formValues)));
  // console.log(formErrors.email);


    if (isValid === true) {
      let data = {
        "firstname": formValues.firstname,
        "lastname": formValues.lastname,
        "email": formValues.email,
        "institutename": formValues.institutename,
        "password": formValues.password,
        "phoneno": formValues.phoneno,
        "city": formValues.city,
        "state": formValues.state,
        "zipcode": formValues.zipcode,
      };
      makePostRequest("/schoolAdminAccess/addSchoolAdmin", data)
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err.res.message);
        });
    }
    setIsValid(true);
  };

  return (
    <>
      <div className="wraper-inner  space-top">
        <section className="home-registration">
          <div className="container">
            <div className="row  justify-content-center">
              <div className="col-md-5 m-auto ">
                <div className="similar-shadow-box">
                  <div className="form-head">
                    <h2>Registration</h2>
                  </div>
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-4">
                      <label className="custom-field one">
                        <input type="text" name="firstname" value={formValues.firstname} onChange={handleChange} />
                        <span className="placeholder">First Name *</span>
                        <i className="ti ti-user"></i>
                        <span className="text-danger">{formErrors.firstname ? formErrors.firstname : null}</span>
                      </label>
                    </div>
                    <div className="mb-4">
                      <label className="custom-field one">
                        <input type="text" name="lastname" value={formValues.lastname} onChange={handleChange} />
                        <span className="placeholder">Last Name *</span>
                        <i className="ti ti-user"></i>
                        <span className="text-danger">{formErrors.lastname ? formErrors.lastname : null}</span>
                      </label>
                    </div>
                    <div className="mb-4">
                      <label className="custom-field one">
                        <input type="text" name="email" value={formValues.email} onChange={handleChange} />
                        <span className="placeholder">Email *</span>
                        <i className="ti ti-mail"></i>
                        <span className="text-danger">{formErrors.email ? formErrors.email : null}</span>
                      </label>
                    </div>
                    <div className="mb-4">
                      <label className="custom-field one">
                        <input type="text" name="phoneno" value={formValues.phoneno} onChange={handleChange} />
                        <span className="placeholder">Mobile Number*</span>
                        <i className="ti ti-phone"></i>
                        <span className="text-danger">{formErrors.phoneno ? formErrors.phoneno : null}</span>
                      </label>
                    </div>
                    <div className="mb-4">
                      <label className="custom-field one">
                        <input type="text" name="password" value={formValues.password} onChange={handleChange} />
                        <span className="placeholder">Password *</span>
                        <i className="ti ti-lock"></i>
                        <span className="text-danger">{formErrors.password ? formErrors.password : null}</span>
                      </label>
                    </div>
                    <div className="mb-4">
                      <label className="custom-field one">
                        <input type="text" name="confirmpassword" value={formValues.confirmpassword} onChange={handleChange} />
                        <span className="placeholder">Confirm Password*</span>
                        <i className="ti ti-lock"></i>
                        <span className="text-danger">{formErrors.confirmpassword ? formErrors.confirmpassword : null}</span>
                      </label>
                    </div>
                    <div className="mb-4">
                      <label className="custom-field one">
                        <input type="text" name="institutename" value={formValues.institutename} onChange={handleChange} />
                        <span className="placeholder">Institute Name*</span>
                        <i className="ti ti-building"></i>
                        <span className="text-danger">{formErrors.institutename  ? formErrors.institutename : null}</span>
                      </label>
                    </div>
                    <div className="mb-4">
                      <label className="custom-field one">
                        <input type="text" name="streetaddress" value={formValues.streetaddress} onChange={handleChange} />
                        <span className="placeholder">Street Address*</span>
                        <i className="ti ti-map-pin"></i>
                        <span className="text-danger">{formErrors.streetaddress ? formErrors.streetaddress : null}</span>
                      </label>
                    </div>
                    <div className="mb-4">
                      <label className="custom-field one">
                        <input type="text" name="city" value={formValues.city} onChange={handleChange} />
                        <span className="placeholder">City*</span>
                        <i className="ti ti-map-pin"></i>
                        <span className="text-danger">{formErrors.city ? formErrors.city : null}</span>
                      </label>
                    </div>
                    <div className="mb-4">
                      <label className="custom-field one">
                      <i className="ti ti-map-pin"></i>
                      <select className="form-control" name="state" onChange={handleChange}  >
                        <option >Choose a state:</option>
                        <option value={formValues.state} >Rajasthan*</option>
                        <option value={formValues.state} >Maharashtra*</option>
                        <option value={formValues.state} >UP*</option>
                        <option value={formValues.state} >West Bengal*</option>
                        <option value={formValues.state} >Tamil Nadu*</option>
                        <option value={formValues.state} >Telangana*</option>
                      </select>
                      </label>
                      <span className="text-danger">{formErrors.state ? formErrors.state : null}</span>
                    </div>
                    <div className="mb-4">
                      <label className="custom-field one">
                        <input type="text" name="zipcode" value={formValues.zipcode} onChange={handleChange} />
                        <span className="placeholder">Zip Code*</span>
                        <i className="ti ti-map-2"/>
                        <span className="text-danger">{formErrors.zipcode ? formErrors.zipcode : null}</span>
                      </label>
                    </div>
                    <div className="mb-4">
                      <label className="coustom-checkbox ">
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                        <p className="d-flex align-items-center">
                          {" "}
                          Accept &nbsp;
                          <Link to="#" className="blue-link">
                            {" "}
                            Terms & Conditions &nbsp;
                          </Link>{" "}
                          & &nbsp;
                          <Link to="#" className="blue-link">
                            {" "}
                            Privacy Policy
                          </Link>
                        </p>
                      </label>
                    </div>
                    <div className="mb-3">
                      {" "}
                      <button
                        type="submit"
                        className="btn full-btn hvr-sweep-to-right"
                        // data-bs-toggle="modal"
                        // data-bs-target="#email-verification"
                      >
                        Register
                      </button>
                    </div>
                    <span className="bottom-text text-center d-flex justify-content-center  align-items-center mt-4">
                      Already have account?{" "}
                      <Link to="/login" className="blue-link">
                        {" "}
                        &nbsp; Sign In
                      </Link>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Email Verification */}
      <div
        className="modal fade common-modal"
        id="email-verification"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-head text-center mb-3">
              <figure>
                <img src="images/logo-form.png" alt="logo" />
              </figure>
              <h5 className="modal-title" id="exampleModalLabel" name="verifyemail" value={formValues.verifyemail} onChange={handleChange}>
                Email Verification Link <br />
                Sent
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
                <p className="pb-2">Link expires in 24 hours</p>
                <p>Did not receive email?</p>
              </div>
              <div className="mt-4">
                {" "}
                <button className="btn full-btn hvr-sweep-to-right">
                  Resend Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { makePostRequest } from "../../utils";


const ResetPassword = () => {

  const {token_id} = useParams()
  console.log(token_id);

    let initialValues = {
        newpassword: " ", 
        confirmpassword: " ", 
    } 
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const validate = (value) => {
        const errors = {}
        if(!value.newpassword){
            errors.newpassword = "Password is required";
        }
        if(!value.confirmpassword === !value.password){
            errors.confirmpassword = "Password is required";
        }
    }

    const handleResetPassword = (e) => {
        e.preventDefault();
        setIsValid(setFormErrors(validate(formValues)));

        if (isValid === true) {
          console.log(token_id, "token_id")
        let data = {
          "token_id": token_id,
          "password": formValues.newpassword,
        };

        makePostRequest("/schoolAdminAccess/resetpassword", data)
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
      <div className="wraper-inner bg-banner space-top">
        <section className="reset-password d-flex justify-content-center align-items-center">
          <span className="shape-1">
            <img src="images/shape-1.png" alt="logo" />
          </span>
          <span className="shape-2">
            <img src="images/shape-2.png" alt="logo" />
          </span>
          <div className="container">
            <div className="row">
              <div className="col-md-4 m-auto">
                <div className="form-head text-center">
                  <figure>
                    <img src="images/logo-form.png" alt="logo" />
                  </figure>
                  <h5 className="form-title">Reset Password</h5>
                </div>
                <form onSubmit={(e) => handleResetPassword(e)}>
                  <div className="mb-4 pb-2">
                    <label className="custom-field one">
                      <input type="text" placeholder=" " />
                      <span className="placeholder">Password</span>
                      <i className="ti ti-lock"></i>
                      <i className="ti ti-eye"></i>
                      <span className="text-danger">{formErrors.newpassword ? formErrors.newpassword : null}</span>
                    </label>
                  </div>
                  <div className="mb-4 v">
                    <label className="custom-field one">
                      <input type="text" placeholder=" " />
                      <span className="placeholder" name="password" value={formValues.confirmnewpassword} onChange={handleChange}>Confirm Password</span>
                      <i className="ti ti-lock"></i>
                      <i className="ti ti-eye"></i>
                      <span className="text-danger">{formErrors.confirmpassword ? formErrors.confirmpassword : null}</span>
                    </label>
                  </div>
                  <div className="mt-5 ">
                    {" "}
                    <button type="submit" className="btn full-btn hvr-sweep-to-right">
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResetPassword;

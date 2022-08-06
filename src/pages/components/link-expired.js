import React from "react";

const LinkExpire = () => {
  return (
    <>
      <div className="wraper-inner bg-banner space-top">
        <section className="link-expired d-flex align-items-center justify-content-center">
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
                  <h5 className="form-title">Verification Link Expired</h5>
                </div>
                <div className="mt-5 ">
                  {" "}
                  <button className="btn full-btn hvr-sweep-to-right">
                    Resend Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LinkExpire;

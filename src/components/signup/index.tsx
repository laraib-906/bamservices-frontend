import useRouter from "../../hooks/useRouter";
import React from "react";
import "./signup.css";

const Signup = () => {
  const router = useRouter();

  return (
    <div className="signupContainer">
      <div id="signup">
        <h3 className="text-center text-white pt-5">Sign up</h3>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <form
              action="r"
              method="post"
              accept-charset="utf-8"
              className="form"
              role="form"
            >
              <div className="row">
                <div className="col-xs-6 col-md-6">
                  <input
                    type="text"
                    name="firstname"
                    value=""
                    className="form-control input-lg"
                    placeholder="First Name"
                  />{" "}
                </div>
                <div className="col-xs-6 col-md-6">
                  <input
                    type="text"
                    name="lastname"
                    value=""
                    className="form-control input-lg"
                    placeholder="Last Name"
                  />{" "}
                </div>
              </div>
              <input
                type="text"
                name="email"
                value=""
                className="form-control input-lg"
                placeholder="Your Email"
              />
              <input
                type="password"
                name="password"
                value=""
                className="form-control input-lg"
                placeholder="Password"
              />
              <input
                type="password"
                name="confirm_password"
                value=""
                className="form-control input-lg"
                placeholder="Confirm Password"
              />
              <button
                className="btn btn-lg btn-primary btn-block signup-btn"
                type="submit"
              >
                Create my account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

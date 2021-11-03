import useRouter from "../../hooks/useRouter";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./signup.css";
import { signup } from "../../api/auth";

const Signup = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [conPassword, setConPassword] = useState("");
  const [conPasswordType, setConPasswordType] = useState("password");

  const onRegister = () => {
    if (password !== conPassword) {
      return;
    }
    const register = {
      firstName,
      lastName,
      email,
      password,
    };

    signup(register)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signupContainer mb-5 mt-5">
      <div id="login">
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" action="" method="post">
                  <h2 className="text-center text-color">Signup</h2>
                  <br />
                  <div className="form-group">
                    <label htmlFor="firstName" className="text-color">
                      <h3>FirstName *</h3>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="form-control"
                      onChange={(ev) => setFirstName(ev.target.value)}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="lastname" className="text-color">
                      <h3>LastName *</h3>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="form-control"
                      onChange={(ev) => setLastName(ev.target.value)}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="email" className="text-color">
                      <h3>Email *</h3>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      onChange={(ev) => setEmail(ev.target.value)}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="password" className="text-color">
                      <h3>Password *</h3>
                    </label>
                    <br />
                    <div className="passwordContainer">
                      <span className="eyeContainer">
                        {passwordType === "text" && (
                          <FaEye
                            className="eyes"
                            onClick={() => setPasswordType("password")}
                          >
                            AiFillEye
                          </FaEye>
                        )}
                        {passwordType === "password" && (
                          <FaEyeSlash
                            className="eyes"
                            onClick={() => setPasswordType("text")}
                          >
                            AiFillEyeInvisible
                          </FaEyeSlash>
                        )}
                      </span>
                      <input
                        type={passwordType}
                        name="password"
                        id="password"
                        className="form-control"
                        onChange={(ev) => setPassword(ev.target.value)}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="conPassword" className="text-color">
                      <h3>Confirm Password *</h3>
                    </label>
                    <br />
                    <div className="passwordContainer">
                      <span className="eyeContainer">
                        {conPasswordType === "text" && (
                          <FaEye
                            className="eyes"
                            onClick={() => setConPasswordType("password")}
                          >
                            AiFillEye
                          </FaEye>
                        )}
                        {conPasswordType === "password" && (
                          <FaEyeSlash
                            className="eyes"
                            onClick={() => setConPasswordType("text")}
                          >
                            AiFillEyeInvisible
                          </FaEyeSlash>
                        )}
                      </span>
                      <input
                        type={conPasswordType}
                        name="conPassword"
                        id="conPassword"
                        className="form-control"
                        onChange={(ev) => setConPassword(ev.target.value)}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-group">
                    <input
                      type="button"
                      name="Register"
                      className="btn btn-warning btn-md"
                      value="Register"
                      onClick={onRegister}
                    />
                  </div>
                  <div id="register-link" className="text-right">
                    <a
                      href="#"
                      className="text-color"
                      onClick={(ev) => {
                        ev.preventDefault();
                        router.push("/login");
                      }}
                    >
                      <h4 className="text-color">Login here</h4>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

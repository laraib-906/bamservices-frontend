import useRouter from "../../hooks/useRouter";
import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./signup.css";
import { signup } from "../../api/auth";
import { error, success } from "react-toastify-redux";
import { useDispatch } from "react-redux";
import PasswordStrengthBar from "react-password-strength-bar";

const Signup = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const form: any = useRef(null);
  const passwordRef: any = useRef(null);
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [conPasswordType, setConPasswordType] = useState("password");

  const validate = () => {
    return form.current.reportValidity();
  };


  const handleOnChangeScore = (score: any, feedback: any) => {
    if (passwordRef.current == null) return;
    if (score > 2) {
      passwordRef.current.setCustomValidity("");
    } else {
      passwordRef.current.setCustomValidity(
        feedback.warning || "Weak password"
      );
    }
  };

  const handleConfirmPassword = (e: any) => {
    let event = e.target.value;
    console.log(event);
    if (password !== event) {
      e.target.setCustomValidity("Password not matched");
    } else {
      e.target.setCustomValidity("");
    }
  };

  const submit = (event: any) => {
    event.preventDefault();

    if (validate()) {
      const register = {
        firstName: event.target.firstname.value,
        lastName: event.target.lastname.value,
        email: event.target.email.value,
        password: event.target.password.value,
      };

      signup(register)
        .then(() => {
          dispatch(success("Succesfully created User"));
          router.push('/login')
        })
        .catch((err) => {
          dispatch(error(err.message))
        });
    }
  };

  return (
    <>
      <div className="signupContainer mb-5 mt-5">
        <div id="login">
          <div className="container">
            <div
              id="login-row"
              className="row justify-content-center align-items-center"
            >
              <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <form
                    id="login-form"
                    className="form"
                    ref={form}
                    onSubmit={submit}
                  >
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
                        required
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
                        required
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
                        required
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
                          ref={passwordRef}
                          required
                          onInput={(e: any) => setPassword(e.target.value)}
                        />
                        <br/>
                        <PasswordStrengthBar
                          password={password}
                          onChangeScore={handleOnChangeScore}
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
                          name="confirmPassword"
                          id="conPassword"
                          className="form-control"
                          onInput={(e) => handleConfirmPassword(e)}
                          required
                        />
                      </div>
                    </div>
                    <br />
                    <div className="form-group">
                      <input
                        type="submit"
                        name="Register"
                        className="btn btn-info btn-md"
                        value="Register"
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
    </>
  );
};

export default Signup;

import useRouter from "../../hooks/useRouter";
import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./login.css";
import { useDispatch } from "react-redux";
import { login } from "../../api/auth";
import { error, success } from "react-toastify-redux";
import { session } from "../../services/session.service";
import { loginUserAction } from "../../redux/actions/user";

const Login = () => {
  const form: any = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const [passwordType, setPasswordType] = useState("password");


  const validate = () => {
    return form.current.reportValidity();
  };

  function submit(event: any) {
    event.preventDefault();

    if (validate()) {
      const requestPayload = {
        email: event.target.username.value,
        password: event.target.password.value
      }

      login(requestPayload)
        .then((res) => {
          session.setTokenCookie(res.accessToken);
          delete res.accessToken;
          dispatch(loginUserAction(res));
          dispatch(success("Succesfully User logged in"));
          router.push('/');
        })
        .catch((err) => {
          dispatch(error(err.message))
        });
    }
  }

  return (
    <div className="loginContainer mb-5 mt-5">
      <div id="login">
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" ref={form} onSubmit={submit} className="form">
                  <h2 className="text-center text-color">Login</h2>
                  <div className="form-group">
                    <label htmlFor="username" className="text-color">
                      <h3>Username *</h3>
                    </label>
                    <br />
                    <input
                      type="email"
                      name="username"
                      id="username"
                      required
                      className="form-control"
                    />
                  </div>
                  <br />
                  <br />
                  <div className="form-group">
                    <label htmlFor="password" className="text-color">
                      <h3>Password *</h3>
                    </label>
                    <br />
                    <div className="passwordContainer">
                      <span className="eyeContainer">
                        {passwordType === "text" && (
                          <FaEye className="eyes" onClick={() => setPasswordType('password')}>
                            AiFillEye
                          </FaEye>
                        )}
                        {passwordType === "password" && (
                          <FaEyeSlash className="eyes" onClick={() => setPasswordType('text')}>
                            AiFillEyeInvisible
                          </FaEyeSlash>
                        )}
                      </span>
                      <input
                        type={passwordType}
                        name="password"
                        id="password"
                        required
                        className="form-control"
                      />
                    </div>
                  </div>
                  <br />
                  <br />

                  <div className="form-group">
                    <label htmlFor="remember-me" className="text-color">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="me-2"
                      />
                      <span>Remember me</span> <span></span>
                    </label>
                    <br />
                    <br />
                    <input
                      type="submit"
                      name="Login"
                      className="btn btn-info btn-md"
                      value="Login"
                    />
                  </div>
                  <div id="register-link" className="text-right">
                    <a href="#" className="text-color" onClick={(ev) => {
                      ev.preventDefault();
                      router.push('/signup');
                    }}>
                      <h4 className="text-color">Register here</h4>
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

export default Login;

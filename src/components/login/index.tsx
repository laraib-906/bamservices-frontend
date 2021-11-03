import useRouter from "../../hooks/useRouter";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./login.css";
import { useDispatch } from "react-redux";
import { login } from "../../api/auth";
import { error, success } from "react-toastify-redux";
import { session } from "../../services/session.service";
import { loginUserAction } from "../../redux/actions/user";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  function loginUser() {
    if (!username && !password) {
      return;
    }
    const requestPayload = {
        email: username,
        password
    };

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
                <form id="login-form" className="form" action="" method="post">
                  <h2 className="text-center text-color">Login</h2>
                  <div className="form-group">
                    <label htmlFor="username" className="text-color">
                      <h3>Username *</h3>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      onChange={(ev) => setUsername(ev.target.value)}
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
                        className="form-control"
                        onChange={(ev) => setPassword(ev.target.value)}
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
                      type="button"
                      name="Login"
                      className="btn btn-warning btn-md"
                      value="Login"
                      onClick={loginUser}
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

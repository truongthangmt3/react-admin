import React, { Component } from "react";
import { NavLink, Link, useRouteMatch } from "react-router-dom";

class LoginScreen extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-box">
          {/* /.login-logo */}
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="../../index2.html" className="h1">
                <b>Winds</b>Admin
              </a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Đăng nhập để bắt đầu sử dụng</p>
              <form action="../../index3.html" method="post">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Tài khoản"
                    autoComplete="off"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      backgroundRepeat: "no-repeat",
                      backgroundAttachment: "scroll",
                      backgroundSize: "16px 18px",
                      backgroundPosition: "98% 50%",
                    }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Mật khẩu"
                    autoComplete="off"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      backgroundRepeat: "no-repeat",
                      backgroundAttachment: "scroll",
                      backgroundSize: "16px 18px",
                      backgroundPosition: "98% 50%",
                    }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-7">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-5">
                    <NavLink  
                     to={"/overview"}
                    className="btn btn-primary btn-block">
                      Đăng nhập
                    </NavLink>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              <div className="social-auth-links text-center mt-2 mb-3">
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2" /> Sign in using
                  Google+
                </a>
              </div>
              {/* /.social-auth-links */}
              <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p>
              <p className="mb-0">
                <a href="register.html" className="text-center">
                  Register a new membership
                </a>
              </p>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
      </div>
    );
  }
}

export default LoginScreen;

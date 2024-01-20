import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleform = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div class="Login">
      <div class="Login-header">
        <Header />
      </div>
      <div>
        <form class="login-form">
          <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && (
            <label name="name">
              <input
                class="login-form-input"
                type="text"
                placeholder="Full Name"
              />
            </label>
          )}
          <br />
          <label name="Email or phone number">
            <input class="login-form-input" type="text" placeholder="email" />
          </label>
          <br />
          <label name="password">
            <input
              class="login-form-input"
              type="password"
              placeholder="password"
            />
          </label>
          <br />
          <button class="login-form-btn" type="submit">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          {isSignIn ? (
            <p>
              New to Netflix?
              <a onClick={toggleform} href="#">
                Sign Up Now.
              </a>
            </p>
          ) : (
            <p>
              Already a user?{" "}
              <a onClick={toggleform} href="#">
                Sign In Now.
              </a>
            </p>
          )}
        </form>
      </div>
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg"
          alt="netflix-logo"
        />
      </div>
    </div>
  );
};

export default Login;

import { FormValidate } from "../utils/Validate";
import Header from "./Header";
import { useState, useRef } from "react";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BG, PHOTO_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [FormMessage, setFormMessage] = useState(null);
  const email = useRef();
  const password = useRef();
  const name = useRef();
  // const navigate = useNavigate();

  const toggleform = () => {
    setIsSignIn(!isSignIn);
  };

  const handleValidation = () => {
    console.log(email);
    console.log(password);
    const message = FormValidate(email.current.value, password.current.value);
    setFormMessage(message);
    if (message) return; //if the validation message was a string then validation failed, so return from here only.

    if (!isSignIn) {
      //if isSignIn is false means that it is a sign up form

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse");
            })
            .catch((error) => {});

          console.log(user);
          // navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormMessage(errorCode + " " + errorMessage);
          // navigate("/");
          // ..
        });
    } else {
      //if isSignIn is true then its a login form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormMessage(errorCode + " " + errorMessage);
          // navigate("/");
        });
    }
  };

  return (
    <div class="Login">
      <div class="Login-header">
        <Header />
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          class="login-form"
        >
          <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && (
            <label name="name">
              <input
                ref={name}
                class="login-form-input"
                type="text"
                placeholder="Full Name"
              />
            </label>
          )}
          <br />
          <label name="Email or phone number">
            <input
              ref={email}
              class="login-form-input"
              type="text"
              placeholder="email"
            />
          </label>
          <br />
          <label name="password">
            <input
              ref={password}
              class="login-form-input"
              type="password"
              placeholder="password"
            />
          </label>
          <br />
          <p class="form-message">{FormMessage}</p>
          <button
            class="login-form-btn"
            type="submit"
            onClick={handleValidation}
          >
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
        <img src={NETFLIX_BG} alt="netflix-logo" />
      </div>
    </div>
  );
};

export default Login;

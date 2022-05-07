import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";

import "../styling/home.css";
import GoogleButton from 'react-google-button'

const Homepage = () => {
  const isSignedIn = useSelector(selectSignedIn);

  const dispatch = useDispatch();
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  return (
    <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn ? (
        <div className="login__message">
          <img src="f1.png" alt="Logo"/>
          <div className="typewriter">
            <h1>Read. Learn. Grow.</h1>
          </div>
          <p>
            A single platform for all your daily dose of blogs.
          </p>
          <GoogleLogin
            clientId="820265978147-c2hadh96k79tnr7s06d2kdco9l4o84uj.apps.googleusercontent.com"
            render={(renderProps) => (
              <GoogleButton
                type="light"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login__button"
              />
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
          <div className="qcard">
            <div className="quo">
              <p>The first step in blogging is not writing them but reading them.<br/> 
                <div className="author">~Jeff Jarvis</div>
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Homepage;

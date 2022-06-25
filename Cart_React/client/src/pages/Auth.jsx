import React from "react";
import { useState } from "react";
import Button from "../components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Auth = () => {
  const [userInputState, setUserInputState] = useState({
    username: "",
    password: "",
    email: "",
    contact: "",
  });
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const onChangeHandler = (e) => {
    setUserInputState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (login) {
      dispatch(
        loginUser({
          password: userInputState.password,
          email: userInputState.email,
        })
      );
    } else {
      dispatch(registerUser(userInputState));
    }
  };

  return (
    <div className="cont flex items-center justify-center">
      <div className=" px-20 rounded-md  p-24">
        <h1 className="text-center font-bold text-2xl  mb-4 ">
          {login ? "Login" : "Register"}
        </h1>
        <h1 className="text-center font-bold text-2xl  mb-4 ">
          {loading ? "Loading" : ""}
        </h1>
        <h1 className="text-center font-bold text-2xl  mb-4 ">
          {error ? "Invalid Username or password" : ""}
        </h1>
        <form
          action=""
          className="flex flex-col"
          onSubmit={formSubmissionHandler}
        >
          {!login && (
            <input
              type="text"
              value={userInputState.username}
              onChange={onChangeHandler}
              name="username"
              id="name"
              className=" p-3 border-b-2 border-solid border-black text-lg transition w-72 focus:outline-none focus:scale-110 my-2"
              placeholder="Username"
            />
          )}

          <input
            type="password"
            value={userInputState.password}
            onChange={onChangeHandler}
            name="password"
            id="password"
            className=" p-3 border-b-2 border-solid border-black text-lg transition w-72 focus:outline-none focus:scale-110 my-2"
            placeholder="Password"
          />
          <input
            type="email"
            value={userInputState.email}
            onChange={onChangeHandler}
            name="email"
            id="email"
            className=" p-3 border-b-2 border-solid border-black text-lg transition w-72 focus:outline-none focus:scale-110 my-2"
            placeholder="Email"
          />
          {!login && (
            <input
              type="number"
              value={userInputState.contact}
              onChange={onChangeHandler}
              name="contact"
              id="contact"
              className=" p-3 border-b-2 border-solid border-black text-lg transition w-72 focus:outline-none focus:scale-110 my-2"
              placeholder="contact"
            />
          )}
          <Button type="submit" className="search my-3">
            {login ? "Login" : "Register"}
          </Button>
          <Button
            className="auth"
            type="button"
            onClick={() => {
              setLogin((prev) => !prev);
            }}
          >
            {!login
              ? "Already have an account?Login!"
              : "Dont have an account?Register!"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Auth;

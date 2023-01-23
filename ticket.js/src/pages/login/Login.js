import React, { useState, useContext } from "react";
import "./login.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { statecontext } from "../context/Context";
import { Link } from 'react-router-dom';
import User from "./Credential.json";
import Home from "../home/Home";

const Login = () => {
  const [getlocaldata, setlocaldata] = useState([]);
  const [validate, setvalidate] = useState({
    username: "",
    userpassword: "",
  });
  const [error, seterror] = useState("");
  const Navigate = useNavigate();
  // console.log("validate", validate);

  const { state, dispatch } = useContext(statecontext);
  console.log("statecontext", state.event);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("update"));
    setlocaldata(localStorageData);
  }, []);

  console.log("set", getlocaldata);

  const handlesubmit = (e) => {
    e.preventDefault();

    if (validate.username === "" && validate.userpassword === "") {
      seterror("please enter id and password");
      return;
    } else if (validate.userpassword === "") {
      seterror("please enter the password ");
    } else if (validate.username === "") {
      seterror("please enter the id ");
    } else {
      getlocaldata.find((item) => {
        if (
          validate.username === item.username &&
          validate.userpassword === item.userpassword
        ) {
          alert("welcome to the our company");
          Navigate("/Ticket");
          return item;
        }
      });
    }

    dispatch({ type: "login", payload: state.isAuthenticated });

    sessionStorage.setItem("islogged", JSON.stringify(true));
  };
  const handleregister = () => {
    Navigate("/Register");
  };

  //admin login
  const [username1, setusername] = useState("");
  const [userpassword1, setpassword] = useState("");
  const [adminerror, setError] = useState("");

  const handleUserName = (eve) => {
    console.log("eve", eve);
    setusername(eve.target.value);
  };
  const handleUserPassword = (eve) => {
    setpassword(eve.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("state", username1, userpassword1, User);
    User.filter((a) => {
      if (a.username === username1 && a.password === userpassword1) {
        alert("happy journey");
        return Navigate("/Home");
      }
      if (username1 === "" || userpassword1 === "") {
        setError("invalid username and password");
        return;
      } else {
        setError("invalid username and password");
        return;
      }
    });
    dispatch({ type: "login", payload: state.isAuthenticated });

    sessionStorage.setItem("islogged", JSON.stringify(true));
  }
  

  return (
    <div className="loginpage">
      <section className="container1">
        <div className="logflex">
          <h3>Admin Login page</h3>
          <div className="usercredent">
            <input
              type="text"
              placeholder={"username"}
              value={username1}
              onChange={handleUserName}
            ></input>
            <input
              type="password"
              placeholder={"userpassword"}
              value={userpassword1}
              onChange={handleUserPassword}
            ></input>
            <button onClick={handleSubmit}>Submit</button>
            <h4>{adminerror}</h4>
          </div>
        </div>
        <div className="logflex">
          <h3>Agent Login page</h3>
          <div className="usercredent">
            <input
              type="number"
              placeholder={"username"}
              value={validate.username}
              onChange={(eve) =>
                setvalidate({ ...validate, username: eve.target.value })
              }
            ></input>
            <input
              type="password"
              placeholder={"userPassword"}
              value={validate.userpassword}
              onChange={(eve) =>
                setvalidate({ ...validate, userpassword: eve.target.value })
              }
            ></input>
            <button onClick={handlesubmit}>Signup</button>
            <button onClick={handleregister}>Register</button>
            <h4>{error}</h4>
          </div>
        </div>
      </section>
      {/* < Home /> */}
    </div>
    
  );
};

export default Login;

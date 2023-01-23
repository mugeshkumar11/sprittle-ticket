import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [register, setregister] = useState({
    userid: "",
    username: "",
    useremail: "",
    userpassword: "",
    usermobile: "",
  });
  const [update, setupdate] = useState([]);
  const [error, seterror] = useState("");
  console.log("register", register);
  console.log(update);
  const navigate = useNavigate();

  const handlesignup = (e) => {
    setupdate([...update, register]);
    e.preventDefault();

    if (
      register.username === "" &&
      register.userid === "" &&
      register.useremail === "" &&
      register.userpassword === "" &&
      register.usermobile === ""
    ) {
      seterror("please enter input data");
      return;
    } else if (register.username === "") {
      seterror("please enter input data");
      return;
    } else if (register.userid === "") {
      seterror("please enter input data");
      return;
    } else if (register.useremail === "") {
      seterror("please enter input data");
      return;
    } else if (register.usermobile === "") {
      seterror("please enter input data");
      return;
    } else if (register.userpassword === "") {
      seterror("please enter input data");
      return;
    } else if (JSON.parse(localStorage.getItem("update")) === null) {
      localStorage.setItem("update", JSON.stringify([register]));
    } else {
      let data = JSON.parse(localStorage.getItem("update"));
      data.push(register);
      localStorage.setItem("update", JSON.stringify(data));
    }
    navigate("/Login");
  };

  return (
    <div className="loginpage">
      <section className="container">
        <div className="loginflex">
          <h3>Agent Register page</h3>
          <div className="usercredent">
            <input
              type="number"
              placeholder={"userid"}
              value={register.userid}
              onChange={(eve) =>
                setregister({ ...register, userid: eve.target.value })
              }
            ></input>
            <input
              type="text"
              placeholder={"username"}
              value={register.username}
              onChange={(eve) =>
                setregister({ ...register, username: eve.target.value })
              }
            ></input>
            <input
              type="text"
              placeholder={"useremail"}
              value={register.useremail}
              onChange={(eve) =>
                setregister({
                  ...register,
                  useremail: eve.target.value,
                })
              }
            ></input>
            <input
              type="number"
              placeholder={"usermobile"}
              value={register.usermobile}
              onChange={(eve) =>
                setregister({ ...register, usermobile: eve.target.value })
              }
            ></input>
            <input
              type="password"
              placeholder={"userPassword"}
              value={register.userpassword}
              onChange={(eve) =>
                setregister({ ...register, userpassword: eve.target.value })
              }
            ></input>
            <button onClick={handlesignup}>signup</button>
            <h4>{error}</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import { useState, useEffect, useContext } from "react";
import { createSearchParams } from "react-router-dom";
import { statecontext } from "../context/Context";
const Home = () => {
  const [getlocaldata, setlocaldata] = useState([]);
  const Navigate = useNavigate();

  const { state, dispatch } = useContext(statecontext);
  console.log("statecontext", state.event);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("update"));
    setlocaldata(localStorageData);
  }, []);

  console.log("home", getlocaldata);
  const handleaction = (index) => {
    const easy = getlocaldata[index];
    console.log("eve", easy);

    dispatch({ type: "add", payload: [...state.event, easy] });
    dispatch({ type: "deltask", payload: index });
  };

  return (
    <div className="homepage">
      <section className={"nav"}>
        <div className={"navbarflex"}>
          <div className={"navlogo"}>
            <Link to={"/Home"}>
              {" "}
              <h2>Welcome to our Agent</h2>
            </Link>
          </div>
        </div>
      </section>
      <table>
        <tr>
          <th>Agent Id</th>
          <th>Agent Name</th>
          <th>Agent email</th>
          <th>Agent Mobile</th>
          <th>Agent delete</th>
        </tr>
        {getlocaldata.map((item, index) => (
          <tr key={index}>
            <td>{item.userid}</td>
            <td>{item.username}</td>
            <td>{item.useremail}</td>
            <td>{item.usermobile}</td>
            <td>
              <button className="actionbtn" onClick={() => handleaction(index)}>
                delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Home;

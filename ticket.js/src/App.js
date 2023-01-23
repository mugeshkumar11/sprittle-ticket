import React from "react";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Ticket from './pages/ticket/Ticket';
import { useReducer } from "react";
import { stateReducer } from "./pages/context/Reduce";
import { statecontext } from "./pages/context/Context";


const App = () => {
  const [state, dispatch] = useReducer(stateReducer, { event: [] });
  console.log("statereduce", state, dispatch);
  return (
    <statecontext.Provider value={{ state, dispatch }}>
      <div>
        {state.Authenticated ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="ticket" element={<Ticket/>}></Route>
              <Route path="*" element={<Navigate to={"/"} />}></Route>
            </Routes>
          </BrowserRouter>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="*" element={<Navigate to={"/login"} />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </statecontext.Provider>
  );
};

export default App;

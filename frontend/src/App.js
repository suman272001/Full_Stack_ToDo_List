import React, { useState } from "react";
import Header from "./components/Header";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Layout from "./components/Layout";
import { Routes, Route, useNavigate } from "react-router-dom";
import ToDoList from "./components/ToDoList";
import axios from "axios";

const App = () => {
  const [show, setShow] = useState(false);
  const [logshow, setLogShow] = useState(false);
  const [conpass, setConpass] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [logdata, setlogData] = useState("");
  const [isChanging, setIsChanging] = useState("");
  const [value, setvalue] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [postId, setPostId] = useState("");
  const url = "http://localhost:4000";
const navigate=useNavigate();
  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const insertData = async (text) => {
    const id=localStorage.getItem("id");
    if (!text) {
      alert("Enter text first");
    } else {
      console.log(text);
      try {
        const res = await axios.post(`${url}/insert/${id}`, {
          text
        });
        console.log(res);
        setvalue("");
        setIsChanging(text);
      } catch (err) {
        console.log("Error:", err.message);
      }
    }
  };

  const togglepassIcon = () => {
    setShow(!show);
  };

  const toggleLogpassIcon = () => {
    setLogShow(!logshow);
  };

  const toggleconPassIcon = () => {
    setConpass(!conpass);
  };

  const logInUser = async (userName, password) => {
    console.log("Before done");
    try {
      const response = await axios.post("http://localhost:4000/login", {
        userName,
        password,
      });
      console.log(response);
      console.log("done");
      if (response.data.msg === "Login") {
        localStorage.setItem("id",response.data.id);
        response.data.id !== "" ? navigate("/user") : navigate("/login");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const updateInputField = (id, text) => {
    setvalue(text);
    console.log(text);
    setPostId(id);
    setIsUpdating(true);
  };

  const updateList = async (newVal, userId) => {
    if (!newVal) {
      alert("Enter text first");
    } else {
      console.log(newVal);
      try {
        const res = await axios.put(`${url}/update/${postId}`, {
          newVal,
        });
        console.log(res);
        setvalue("");
        setIsUpdating(false);
        setIsChanging(newVal);
      } catch (err) {
        console.log("Error:", err.message);
      }
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path=""
          element={
            <Registration
              show={show}
              conpass={conpass}
              passIcon={togglepassIcon}
              conpassIcon={toggleconPassIcon}
              user={user}
              pass={pass}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              logInUser={logInUser}
              show={logshow}
              passIcon={toggleLogpassIcon}
            />
          }
        />
        {/* {logdata !== "" ? ( */}
          <Route
            path="/user"
            element={
              <ToDoList
                insertData={insertData}
                updateInputField={updateInputField}
                value={value}
                dataVal={logdata}
                handleChange={handleChange}
                title="To-Do-List"
                isChanging={isChanging}
                updateList={updateList}
                isUpdating={isUpdating}
              />
            }
          />
        {/* ) : ( */}
          {/* <Route
          path="/login"
          element={
            <Login
              logInUser={logInUser}
              show={logshow}
              passIcon={toggleLogpassIcon}
            />
          }
          /> */}
        {/* )} */}
      </Route>
    </Routes>
  );
};

export default App;

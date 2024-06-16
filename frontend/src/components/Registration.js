import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Registration = (props) => {
  const navigate = useNavigate();
  // const [values, setValues] = useState({})
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      conPass: "",
    },
    onSubmit: async (values) => {
      const { firstName, lastName, email, password, confirmPassword } = values;
      await axios
        .post("http://localhost:4000/register", {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        })
        .then((response) => {
          console.log("done");
          navigate("/Login");
        })
        .catch((err) => {
          console.log("Error");
          if (err.response.data.msg == "User already exists") {
            alert("User already exists....Plz login");
            navigate("/Login");
          }
          console.log(err);
        });
    },
  });
  return (
    <main>
      <div className="registration-container">
        <form onSubmit={formik.handleSubmit} action="/all" method="POST">
          <div className="headerContainer">
            <h3 className="text-center">Registration Form</h3>
          </div>
          <div className="d-flex flex-wrap infoContainer ps-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
              className="svgIcon"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
            <input
              type="text"
              required
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              placeholder="First Name"
            />
          </div>
          <div className="d-flex flex-wrap infoContainer ps-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="svgIcon bi bi-person-circle"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              placeholder="Last Name"
            />
          </div>
          <div className="d-flex flex-wrap infoContainer ps-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-envelope-at-fill svgIcon"
              viewBox="0 0 16 16"
            >
              <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
              <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
            </svg>
            <input
              type="email"
              required
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Email "
            />
          </div>
          <div className="d-flex flex-wrap infoContainer ps-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-lock-fill svgIcon"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
            </svg>
            <input
              type={props.show ? "text" : "password"}
              value={formik.values.password}
              name="password"
              onChange={formik.handleChange}
              placeholder="Password"
            />
            <div className="showHidden" onClick={props.passIcon}>
              {props.show ? (
                <img className="showHide" src="mission-statement.png" />
              ) : (
                <img className="showHide" src="hidden.png" />
              )}
            </div>
          </div>
          <div className="d-flex flex-wrap infoContainer ps-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-lock-fill svgIcon"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
            </svg>
            <input
              type={props.conpass ? "text" : "password"}
              name="confirmPassword"
              value={formik.values.confirmPassword}
              placeholder="Confirm Password"
              onChange={formik.handleChange}
            />
            <div className="showHidden" onClick={props.conpassIcon}>
              {props.conpass ? (
                <img className="showHide" src="mission-statement.png" />
              ) : (
                <img className="showHide" src="hidden.png" />
              )}
            </div>
          </div>
          <div className="submitDiv d-flex justify-content-center">
            <button type="submit" className="btn btn-primary register">
              Registar
            </button>
          </div>
          <div className="alreadyAcc text-center">
            <span className="alreadyAccText">
              Already have an account.
              <strong>
                <Link to="/login">Log in</Link>
              </strong>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Registration;

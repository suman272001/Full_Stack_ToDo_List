// import React,{useState} from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';
// import { Link } from 'react-router-dom';

// const Login = (props) => {
//   const navigate = useNavigate();
//   const [val, setVal] = useState()
//   // const formik = useFormik({
//   //   initialValues: {
//   //     password: '',
//   //     userName: '',
//   //   }
//   // });

//   return (
//     <>
//       <main>
//         <div className="registration-container">
//           <form onSubmit={props.logIn}>
//             <div className="headerContainer">
//               <h3 className="text-center">Login Form</h3>
//             </div>
//             <div className="d-flex flex-wrap infoContainer ps-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 className="bi bi-person-circle"
//                 viewBox="0 0 16 16"
//                 className="svgIcon"
//               >
//                 <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
//                 <path
//                   fill-rule="evenodd"
//                   d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
//                 />
//               </svg>
//               <input
//                 type="text"
//                 required
//                 value={formik.values.userName}
//                 onChange={formik.handleChange}
//                 name="userName"
//                 placeholder="User Name"
//               />
//             </div>
//             <div className="d-flex flex-wrap infoContainer ps-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 className="bi bi-lock-fill svgIcon"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
//               </svg>
//               <input
//                 type={props.show ? 'text' : 'password'}
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 name="password"
//                 placeholder="Password"
//               />
//               <div className="showHidden" onClick={props.passIcon}>
//                 {props.show ? (
//                   <img className="showHide" src="mission-statement.png" />
//                 ) : (
//                   <img className="showHide" src="hidden.png" />
//                 )}
//               </div>
//             </div>
//             <div className="submitDiv d-flex justify-content-center">
//               <button type="submit" className="btn btn-primary register">
//                 Login
//               </button>
//             </div>
//             <div className="alreadyAcc text-center">
//               <span className="alreadyAccText">
//                 Don't have an account{' '}
//                 <strong>
//                   <Link to="/">Sign in</Link>
//                 </strong>
//               </span>
//             </div>
//           </form>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Login;


import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom'
const Login = (props) => {
  // const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
      userName: "",
    }
  });
  return (
    <>
     <main>
      <div className="registration-container">
        <form>
          <div className="headerContainer">
            <h3 className="text-center">Login Form</h3>
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
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
            <input
              type="text"
              required
              value={formik.values.userName}
              onChange={formik.handleChange}
              name="userName"
              placeholder="User Name"
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
            <input type={props.show?"text":"password"}  value={formik.values.password}
              onChange={formik.handleChange} name="password" placeholder="Password" />
            <div className="showHidden"onClick={props.passIcon}>
             {props.show?<img className="showHide" src="mission-statement.png"/>:<img className="showHide" src="hidden.png"/>}
             </div>
          </div>
          <div className="submitDiv d-flex justify-content-center">
            <button type="button" onClick={()=>{props.logInUser(formik.values.userName,formik.values.password)}} className="btn btn-primary register">
              Login
            </button>
          </div>
          <div className="alreadyAcc text-center">
            <span className="alreadyAccText">
              Don't have an account <strong><Link to="/">Sign in</Link></strong>
            </span>
          </div>
          </form>
          </div>
          </main>
    </>
  )
}
export default Login
import React, { useState, useEffect } from "react";
import axios from "axios";
import Inputbox from "./Inputbox";
const ToDoList = (props) => {
  const [data, setData] = useState("first");
  const [first, setfirst] = useState("")
  const url = "http://localhost:4000";
const dataStore=(dataList)=>{
  localStorage.setItem("posts",JSON.stringify(dataList))
  setData(dataList);
  console.log(data);
  console.log(dataList);
  console.log( JSON.parse(localStorage.getItem("posts")));
}
  const get =() => {
    console.log(props.dataVal)
    console.log("ghvty");
    const id=localStorage.getItem("id");
     axios
      .get(`${url}/getall/${id}`)
      .then((response) => {
        console.log(response.data);
        setData("abcd")
        console.log(data);
        dataStore(response.data.posts)
       
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleDelete = async (id) => {
    if(    confirm("Are you sure you want to delete the post")
    )
    {
    const userId=localStorage.getItem("id")
    await axios
      .delete(`${url}/delete/${id}/${userId}`)
      .then((res) => {
        get();
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
  };
  useEffect(() => {
    console.log("djdd");
    setfirst("new world")
    console.log(first);
    console.log(props.isChanging);
    get();
  }, [props.isChanging]);
  return (
    <>
    {/* {
            const data=localStorage.getItem("items")

    } */}
      <div className="container main-container">
        <Inputbox
          insertData={props.insertData}
          updateList={props.updateList}
          isUpdating={props.isUpdating}
          userId={props.dataVal}
          value={props.value}
          handleChange={props.handleChange}
          title={props.title}
        />
        <div className="container">
          <div className="row list-items">
{           
  JSON.parse(localStorage.getItem("posts")).map((e, i) => {
                return (
                  <div key={e._id} className="col-12 div-shadow">
                    <li className="list-style">
                      <input
                        disabled
                        className="input-style"
                        type="text"
                        value={e.text}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="btn-click me-5"
                        onClick={() => props.updateInputField(e._id, e.text)}
                        viewBox="0 0 576 512"
                      >
                        <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                      </svg>
                      <input type="checkbox" className="checkBox" unchecked />
                      <img
                        src="delete.png"
                        className="btn-click"
                        onClick={() => {
                          handleDelete(e._id);
                        }}
                        alt=""
                      />
                    </li>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;

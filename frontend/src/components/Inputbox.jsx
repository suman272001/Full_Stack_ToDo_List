import React,{useState} from 'react'
import axios from 'axios'
// import { insertData } from '../apiwork/Insert';
function Inputbox(props) {
  return (
<>
<div className="container inputbox-width">
  <div className="row">
    <div className="col d-flex justify-content-center">
    <h2>{props.title}</h2>
    </div>
  </div>
     <div className="input-group row">
        <div className="col-10 m-0 p-0 input-container">
  <input type="text" className="form-control" id="input-value" value={props.value} name="text" onChange={props.handleChange} placeholder="Enter text here"/>
  </div>
  <div className="col-2 m-0 p-0 btn-container">
  <input onClick={!props.isUpdating?()=>{props.insertData(props.value)}:()=>{props.updateList(props.value)}} className="btnlist" type="button"value={props.isUpdating?"Update":"Add"} id="button-addon2"/>
  </div>
</div> 
</div>
</>
  )
}
export default Inputbox;

import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Routes } from "react-router";
import { useState } from "react";
import {Button} from 'react-bootstrap';
import { First , Last } from "react-bootstrap/esm/PageItem";
import { useNavigate } from "react-router";
import "./Find.css";
export default function Find() {
    const navigate =useNavigate();
    const Data = [
        {Firstname: "Anusha", Lastname:"Saad" , Gender:"F",Age:"20", Email:"anusha.saad@gmail.com" ,bloodgroup:"A",bloodsign:"+ve(1)" , contact: "03331297472", }
    ]
  const [FetchData, setData] = useState("");
  {
    /*const Fetching = () => {
            
    }*/
  }
  return (
    <div className="find">
      <div className="size">
        <DropdownButton id="dropdown-basic-button" title="Select Location">
          {/*<Dropdown.Item onClick={Fetching}>Gulshan</Dropdown.Item>*/}
          <Dropdown.Item>Malir</Dropdown.Item>
          <Dropdown.Item>Johar</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Select Blood Group">
          {/*<Dropdown.Item onClick={Fetching}>Gulshan</Dropdown.Item>*/}
          <Dropdown.Item>A</Dropdown.Item>
          <Dropdown.Item>B</Dropdown.Item>
          <Dropdown.Item>O</Dropdown.Item>
          <Dropdown.Item>AB</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Select Blood Sign">
          {/*<Dropdown.Item onClick={Fetching}>Gulshan</Dropdown.Item>*/}
          <Dropdown.Item>+ve</Dropdown.Item>
          <Dropdown.Item>-ve</Dropdown.Item>
        </DropdownButton>
        <div>
          <table>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact</th> 

            </tr>
            {Data.map((item) => (
            <tr>
           
            <td>{item.Firstname}</td>
              <td>{item.Lastname}</td>
              <td>{item.contact} <button onClick={() => {
          navigate("/Acceptor");
        }} >Go</button></td> 

            </tr>
             ))}
          </table>
        </div>
      </div>
    </div>
  );
}

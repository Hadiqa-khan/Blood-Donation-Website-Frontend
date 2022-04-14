import React from "react";
import "./SideBar.css";
import logo from "../Navbar/logo.jpg";
import { useNavigate } from "react-router-dom";
function SideBar() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "250px" }}>
      <button
        className="button-24"
        onClick={() => {
          navigate("/DonorShow");
        }}
      >
        Donor Info
      </button>
      <button
        className="button-24"
        onClick={() => {
          navigate("/DonationShow");
        }}
      >
        Donation Info
      </button>
      <button className="button-24"   onClick={() => {
          navigate("/DonateShow");
        }} >Donate Blood</button>
      <button
        className="button-24"
        onClick={() => {
          navigate("/home");
        }}
      >
        Logout
      </button>
    </div>
  );
}
export default SideBar;

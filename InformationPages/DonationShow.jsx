import React from "react";
import NavBar from "../Navbar/Top";
import SideBar from "../SideBar/SideBar";
import DonationInfo from "./DonationInfo";
import Back from "../SideBar/Back";
export default function Donor() {
  return (
    <div>
      <NavBar></NavBar>
     {/* <SideBar />*/} 
      <DonationInfo />
      <Back />
    </div>
  );
}

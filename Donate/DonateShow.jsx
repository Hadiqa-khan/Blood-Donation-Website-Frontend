import NavBar from "../Navbar/Top";
import SideBar from "../SideBar/SideBar";
import React from 'react';
import Back from "../SideBar/Back";
import DonateF from './DonateF';
export default function DonateShow() {
    return (
        <div>
             <NavBar></NavBar>
             <DonateF/>
             <Back />
        </div>
    )
}

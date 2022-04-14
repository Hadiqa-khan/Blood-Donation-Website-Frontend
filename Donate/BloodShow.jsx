import NavBar from "../Navbar/Top";
import React from 'react';
import Back from "../SideBar/Back";
import Blood from './Blood';
export default function DonateShow() {
    return (
        <div>
             <NavBar></NavBar>
             <Blood/>
             <Back />
        </div>
    )
}

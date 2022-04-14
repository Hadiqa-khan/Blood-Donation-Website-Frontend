import React from 'react';
import './Registration.css';
import Navbar from '../Navbar/Top';
import GoBack from '../Login/GoBack';
function registration()
{ 
    return(
        <div>
        <Navbar/>
        <div className='container'>
        <div className="max-width">
    <div className="checkoutform">
    <div className="card">
        <div className="box">
    <h1>Donor Registration </h1>
    <form>
    <div className="form">
        <label for="first name" className="col-sm-5 col-form-label text">First Name:</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="First name" name="first name"/>
            </div>
        <label for="last" className="col-sm-5 col-form-label text">Last Name:</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="last name" name="last"/>
        </div>
        <label for="group" className="col-sm-5 col-form-label text">Blood Group:</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="Blood Group" name="group"/>
        </div>
        <label for="sign" className="col-sm-5 col-form-label text">Blood Sign:</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="Blood Sign" name="sign"/>
        </div>
        <label for="contact" className="col-sm-5 col-form-label text">Contact Number:</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="+92-XXXXXXXXXXX" name="contact"/>
        </div>
        <label for="gender" className="col-sm-5 col-form-label text">Gender:</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="M-F" name="gender"/>
        </div>
        <label for="Age" className="col-sm-5 col-form-label text">Age:</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="number" className="form-control" name="Age" />
        </div>
        <label for="startdate" className="col-sm-5 col-form-label text">Date :</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="datetime-local" className="form-control" name="startdate" />
        </div>
        <label for="email" className="col-sm-5 col-form-label text"> Email :</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="email" className="form-control" placeholder="abc@xyz.com" name="email"/>
        </div>
        <label for="password" className="col-sm-5 col-form-label text"> Password :</label>
        <div className="col-8 form-group pt-2 mx-auto">
            <input type="password" className="form-control" placeholder="********" name="password"/>
        </div>
    </div>
    <GoBack/>
</form>
</div>
</div>
</div>

</div>
</div>
</div>
)
}
export default registration;
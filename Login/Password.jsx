import React from 'react';
import NavBar from "../Navbar/Top";
import "../Find/Find.css";
import GoBack from './GoBack';
export default function Password() {
    return (
        <div>
            <NavBar></NavBar>
              <div className="containee">
        <div className="maxwidth">
          <div className="accform">
            <div className="cardacc">
              <div className="box">
                <h1>Update Password </h1>
                <form>
                  <div className="form">
                  <label
                      for="Email"
                      className="col-sm-5 col-form-label text"
                    >
                    Email:
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="Email"
                        required
                      />
                    </div>
                    <label
                      for="Password"
                      className="col-sm-5 col-form-label text"
                    >
                      New Password:
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                        name="password"
                        required
                      />
                        
                    </div>
                    <input className="button-25" type="submit" value="Submit" />
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

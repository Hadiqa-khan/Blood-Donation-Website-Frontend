import React from 'react';
import NavBar from "../Navbar/Top";
import "./Find.css";
import { useNavigate } from "react-router";
export default function Acceptor() {
  const navigate =useNavigate();
    return (
        <div>
                 <NavBar></NavBar>
           <div className="containee">
        <div className="maxwidth">
          <div className="accform">
            <div className="cardacc">
              <div className="box">
                <h1>Acceptor Info</h1>
                <form>
                  <div className="form">
                    <label
                      for="first name"
                      className="col-sm-5 col-form-label text"
                    >
                      First Name:
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        name="first name"
                        required
                      />
                    </div>
                    <label for="last" className="col-sm-5 col-form-label text">
                      Last Name:
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="last name"
                        name="last"

                      />
                    </div>
                    <label
                      for="contact"
                      className="col-sm-5 col-form-label text"
                    >
                      Contact Number:
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="+92-XXXXXXXXXXX"
                        name="contact"
                        required
                      />
                    </div>
                    <label>Do you want to Confirm ?</label>
                    <div class="form-check">
                      <input
                        style={{ marginLeft: "29px" }}
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="foryes"
                        value="Yes"
                        required
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Yes
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        style={{ marginLeft: "29px" }}
                        type="radio"
                        name="exampleRadios"
                        id="forno"
                        value="No"
                        required
                        onClick={() => {
                          navigate("/Showfind");
                        }
                      }
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        No
                      </label>
                    </div>
                    <input className="button-25" type="submit" value="Submit" />
                  </div>
                    </form>
                    </div>
                     </div>
                     </div>
                     </div>
                     </div>
                     
        </div>
    )
}

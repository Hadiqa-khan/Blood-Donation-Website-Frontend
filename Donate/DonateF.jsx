import React, { useState } from "react";
import "./DonateF.css";
import "../SideBar/SideBar.css";
import { useNavigate } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
function DonateF() {
  const [showText, setShowText] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="containee">
        <div className="max-width">
          <div className="donorform">
            <div className="card">
              <div className="box">
                <h1>Donate Blood</h1>
                <form>
                  <div className="form">
        
                    <DropdownButton id="dropdown-basic-button" title=" Blood Center">
          <Dropdown.Item>Malir</Dropdown.Item>
          <Dropdown.Item>Johar</Dropdown.Item>
        </DropdownButton>
                  
                  
        <DropdownButton id="dropdown-basic-button" title="Area">
          <Dropdown.Item>Malir</Dropdown.Item>
          <Dropdown.Item>Johar</Dropdown.Item>
        </DropdownButton>
                   
                    <label
                      for="weight"
                      className="col-sm-5 col-form-label text"
                    >
                     Weight:
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="number"
                        className="form-control"
                        name="weight"
                        required
                      />
                    </div>
                    <label for="ddate" className="col-sm-5 col-form-label text">
                      Date of Donation:
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="date"
                        className="form-control"
                        name="ddate"
                        required
                      />
                    </div>
                    <label>Do you have any Disease ?</label>
                    <div class="form-check">
                      <input
                        style={{ marginLeft: "29px" }}
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="foryes"
                        value="Yes"
                        onClick={() => setShowText(!showText)}
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
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        No
                      </label>
                    </div>
                  </div>
                  {/* for disease*/}
                 {showText&& <div id="disease" style={{ marginLeft: "50px" }}>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        BP
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Anemia
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Diabetes
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Chainsmoker
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        HIV
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Allergies
                      </label>
                    </div>
                  </div>}
                  <input className="button-25" type="submit" value="Submit"  onClick={() => {
                        navigate("/Bloodshow");
                      }} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  {
    /*function func(x)
    { var y=document.getElementById("disease");
      if(x==0) y.style.display="block";
      else y.style.display="none";
      return;
    }*/
  }
}
export default DonateF;

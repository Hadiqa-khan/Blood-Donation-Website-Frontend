import React from "react";
import "../Registration/Registration.css";
import "./DonateF.css";
export default function Blood() {

  return (
    <div>
      <div className="containee">
        <div className="max-width">
          <div className="donorform">
            <div className="card">
              <div className="box">
                <h1>Blood Details </h1>
                <form>
                  <div className="form">
                    <label
                      for="Density"
                      className="col-sm-5 col-form-label text"
                    >
                      Density
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="number"
                        step="any"
                        className="form-control"
                        placeholder="Density"
                        name="Density"
                        required
                      />
                    </div>
                    <label for="hemo" className="col-sm-5 col-form-label text">
                      Hemoglobin
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="number"
                        step="any"
                        className="form-control"
                        placeholder="hemoglobin"
                        name="hemo"
                        required
                      />
                    </div>
                    <label for="Iron" className="col-sm-5 col-form-label text">
                      Iron
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="number"
                        step="any"
                        className="form-control"
                        placeholder="Iron"
                        name="Iron"
                        required
                      />
                    </div>
                    <label
                      for="Phvalue"
                      className="col-sm-5 col-form-label text"
                    >
                      Phvalue
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="number"
                        step="any"
                        className="form-control"
                        placeholder="Phvalue"
                        name="Phvalue"
                        required
                      />
                    </div>
                    <label for="rbc" className="col-sm-5 col-form-label text">
                      RBCs
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="number"
                        step="any"
                        className="form-control"
                        placeholder="Rbcs"
                        name="rbc"
                        required
                      />
                    </div>
                    <label for="wbc" className="col-sm-5 col-form-label text">
                      WBCs
                    </label>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="number"
                        step="any"
                        className="form-control"
                        placeholder="Wbcs"
                        name="wbc"
                        required
                      />
                    </div>
                    <input
                      className="button-25"
                      type="submit"
                      value="Submit"
                     
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

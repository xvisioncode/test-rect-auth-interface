import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form>
              <div className="d-flex justify-content-between custom-heading-padding">
                <p className="forgot-password text-left">dd/mm/YYYY</p>
                <p className="forgot-password text-right">HH:mm</p>
              </div>
              <hr className="mt-0" />
              <h3>Authentification</h3>

              <div className="row form-group custom-body-padding">
                <div className="col-sm-4">
                  <label>Matricule :</label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="matricule"
                    className="form-control"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="row form-group custom-body-padding">
                <div className="col-sm-4">
                  <label>Code PIN :</label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="pincode"
                    className="form-control"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="d-flex col-sm-6 mx-auto custom-footer-padding">
                <button type="submit" className="btn btn-primary btn-block">
                  Se connecter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

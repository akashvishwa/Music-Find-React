import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";
import "./ModalBorder.css";

export default function SignupForm(props) {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    props.Verify(username, token);
  };

  return (
    <div
      className="maincontLogin "
      style={{ background: "#222222", color: "white", display: "grid" }}
    >
      <div></div>
      <div className="formCont"
        style={{
          display: "grid",
          justifyItems: "center",
        }}
      >

        <form action="#">
          
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                paddingBottom: "10px",
              }}
            >
              <img
                src={require("../staticItems/userImg.png")}
                style={{ borderRadius: "50%", maxHeight: "120px" }}
              ></img>
            </div>
            <div className="form-group" style={{ paddingBottom: "20px" }}>
              <input
                type="text"
                className="form-control"
                id="Username"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="form-group" style={{ paddingBottom: "20px" }}>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={(e) => {
                  setToken(e.target.value);
                }}
              />
            </div>

            <div>
              <input
                type="submit"
                className="btn btn-outline-primary"
                style={{ marginTop: "10px" }}
                onClick={(e) => HandleSubmit(e)}
              ></input>
            </div>
          
        </form>

      </div>
      <div></div>
    </div>
  );
}

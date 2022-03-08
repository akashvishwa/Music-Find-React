import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import NavigationBar from "./Components/NavigartionBar";
import Footerc from "./Components/Footer";
import SignupForm from "./Components/SignupForm";
import PlaylistView from "./Components/PlaylistView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Usearch from "./Components/Usearch";
import axios from "axios";

function App() {
  const [permission, setPermission] = useState(false);
  const [username, setUsername] = useState("");

  const token = "Akash@123";

  useEffect(() => {
    let perm = localStorage.getItem("permission");
    if (perm == "true") {
      setPermission(true);
      setUsername(localStorage.getItem("username"));
    } else {
      setPermission(false);
    }
  }, []);


  const Authenticate = (Username, password) => {
    // console.log(`username:${Username},password:${password}`);

    if (token == password) {
      setPermission(true);
      localStorage.setItem("permission", "true");
      localStorage.setItem("username", Username);
      setUsername(Username);
    } else {
      alert("Wrong Password");
    }
  };

  const logOut=()=>{
    setPermission(false);
    setUsername('');
  };

  // console.log("Permission", permission);

  return (
    <div>
      {permission ? (
        <div>
          <NavigationBar searchBar={true} title="WEBAPP" username={username} logOut={logOut}/>

          <BrowserRouter>
            <Routes>
              <Route path="/playlist" element={<PlaylistView />} />
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/usearch" element={<Usearch />} />
            </Routes>
          </BrowserRouter>

          <Footerc yearCpright={1990} tagLine={"We Listen it by List"} />
        </div>
      ) : (
        <SignupForm Verify={Authenticate} />
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./Usearch.css";
import axios from "axios";
import { Button } from "@mui/material";
import { Search } from "@mui/icons-material";
import MediaControlCard from "./MediaContolCard";

export default function Usearch() {
  const [data, setData] = useState([]);
  const [sdata, setSData] = useState([]);
  const [squerry, setSearchQuerry] = useState("");

  useEffect(() => {
    axios
      .get("https://localhost:7248/GetAllSongs")
      .then((response) => {
        // console.log(response.data);
        setSData(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sfunc = () => {
    const obj = [...sdata];
    const sres = obj.filter((ele) => {
      if (ele.name.toLowerCase().includes(squerry)) {
        return ele;
      }
    });
    // console.log(sres);
    setData(sres);
  };

  return (
    <div className="outerCont" style={{ display: "grid" }}>
      <div></div>
      <div className="centCont" style={{ display: "grid" }}>
        <div className="searchBox" style={{ display: "grid" }}>
          <input id='sqinput'
            type="text"
            onChange={(e) => {
              setSearchQuerry(e.target.value.toLowerCase());
            }}
          ></input>
          <Button
            style={{borderRadius:'20px'}}
            variant="contained"
            onClick={() => {
              sfunc();
            }}
            endIcon={<Search />}
          >
            Search
            </Button>
        </div>
        <div id="resultContainer">
          <div
            className="Results"
            style={{
              display: "grid",
              gap: "2rem",
              justifyItems: "center",
              overflow: "auto",
            }}
          >
            {data &&
              data.map((element) => {
                return (
                  <div key={element.id} className="individualItem">
                    <MediaControlCard element={element}></MediaControlCard>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

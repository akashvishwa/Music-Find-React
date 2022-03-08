import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import HomeImageSlider from "./HomeImageSlider";
import { Typography } from "@mui/material";
import MediaControlCard from "./MediaContolCard";
import HomeContactUs from "./HomeContactUs";
import HomeAboutUs from "./HomeAboutUs";

export default function Home(props) {
  const [data, setData] = useState([]);
  const [Three, setThree] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7248/GetAllSongs")
      .then((response) => {
        // console.log(response.data);
        topThree(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const topThree = (data1) => {
    const obj = [...data1];
    // console.log("Sorting Function Chala");
    const sorted = obj.sort((a, b) => {
      let fa = a.rating.toLowerCase(),
        fb = b.rating.toLowerCase();

      if (fa < fb) {
        return 1;
      }
      if (fa > fb) {
        return -1;
      }
      return 0;
    });
    // console.log(sorted);
    setThree([sorted[0], sorted[1], sorted[2], sorted[3]]);
  };

  return (
    <div className="mainContainer" style={{ display: "grid" }}>
      <div></div>
      <div
        className="homeCompContainer"
        style={{ display: "grid", gap: "1.5rem" }}
      >
        <div id="HomeImageSlider">
          <HomeImageSlider />
        </div>
        <Typography
          variant="h4"
          style={{ textAlign: "center", margin: "10px" }}
        >
          Top Four Form the House
        </Typography>
        <div className="top4songs" style={{ display: "grid", gap: "1.5rem",justifyItems:'center' }}>
          {Three &&
            Three.map((ele) => {
              return (
                <div key={ele.id}>
                  <MediaControlCard element={ele} />
                </div>
              );
            })}
        </div>
        <div style={{ display: "grid", justifyItems: "center" }}>
          <HomeAboutUs />
        </div>
        <div style={{ display: "grid", justifyItems: "center" }}>
          <HomeContactUs />
        </div>
      </div>
      <div></div>
    </div>
  );
}

import React from "react";
import { TextField, Typography } from "@mui/material";

export default function HomeAboutUs() {
  return (
    <div
      style={{
        width: "90%",
        background: "white",
        color: "black",
        display: "grid",
        gap: "1rem",
        justifyItems: "center",
        borderRadius: "7px",
        paddingBottom: "10px",
      }}
    >
      <Typography variant="h5">ABOUT US</Typography>
      <Typography variant="overline">
        We believe that <b>life is Empty</b> without <b>Music</b>
      </Typography>
      <Typography variant="caption">We are MusicFind</Typography>
    </div>
  );
}

import React from "react";
import { TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import Send from "@mui/icons-material/Send";

export default function HomeContactUs() {
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
      <Typography variant="h5">CONTACT US</Typography>
      <form style={{ display: "grid", gap: "0.7rem", justifyItems: "center" }}>
        <div>
          <TextField
            label="Name"
            variant="standard"
            style={{ width: "300px" }}
          />
        </div>
        <div>
          <TextField
            label="Email"
            variant="standard"
            style={{ width: "300px" }}
          />
        </div>
        <div>
          <TextField
            label="Message"
            variant="standard"
            multiline
            maxRows={4}
            style={{ width: "300px" }}
          />
        </div>
        <div>
          <Button variant="contained" endIcon={<Send />}>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

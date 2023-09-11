import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./myStyles.css";
import ARI from "../assets/ari.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { indigo } from "@mui/material/colors";

class HeaderBar extends React.Component {
  render() {
    return (
      <div className="topnav">
        <Navbar
          fixed="top"
          expand="lg"
          bg="dark"
          variant="dark"
          className="topnav"
        >
          <Navbar.Brand href="">
            <div class="container">
              <img class="imageCls" src={ARI} alt="Saint-Gobain" />
              <Avatar
                sx={{
                  bgcolor: "#ffff",
                  color: "#254A9A",
                  float: "right",
                  marginRight: "1%",
                  width: "30px",
                  height: "30px",
                  fontSize: "1rem",
                  marginTop: ".5%",
                }}
              >
                GA
              </Avatar>
            </div>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default HeaderBar;

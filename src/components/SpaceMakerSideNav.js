import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import React from "react";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from "react-router-dom";

export default function SpaceMakerSideNav() {
  const navigate = useNavigate();
  const selected = "home";
  return (
    <SideNav
      onSelect={(selected) => {
        console.log(selected);
        navigate("/" + selected);
      }}
      className="sideNavcls"
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="workorders">
        <NavItem eventKey="workorders">
          <NavIcon>
            <i
              className="fa-solid fa-clipboard-list"
              style={{ fontSize: "1.75em" }}
            ></i>
          </NavIcon>
          <NavText>Work Orders</NavText>
        </NavItem>
        {/* <NavItem eventKey="quote">
          <NavIcon>
            <i
              className="fa-solid fa-paint-roller"
              style={{ fontSize: "1.75em" }}
            />
          </NavIcon>
          <NavText>Quote</NavText>
        </NavItem> */}
        <NavItem eventKey="artifacts">
          <NavIcon>
            <i
              className="fa-solid fa-layer-group"
              style={{ fontSize: "1.75em" }}
            ></i>
          </NavIcon>
          <NavText>Add Artifacts</NavText>
        </NavItem>
        <NavItem eventKey="floormap">
          <NavIcon>
            <i
              className="fa-solid fa-pen-ruler"
              style={{ fontSize: "1.75em" }}
            ></i>
          </NavIcon>
          <NavText>Floor Map</NavText>
        </NavItem>
        <NavItem eventKey="invoice">
          <NavIcon>
            <i
              className="fa-solid fa-file-invoice"
              style={{ fontSize: "1.75em" }}
            ></i>
          </NavIcon>
          <NavText>Invoice</NavText>
        </NavItem>
      </SideNav.Nav>{" "}
    </SideNav>
  );
}

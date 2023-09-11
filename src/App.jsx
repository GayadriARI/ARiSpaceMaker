import "./App.css";
import SpaceMakerSideNav from "./components/SpaceMakerSideNav";
import HeaderBar from "./components/HeaderBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Workorders from "./pages/workorders";
import Artifacts from "./pages/artifacts";
import FloorMap from "./pages/floormap"; //comment
import Quote from "./pages/quote";
import Invoice from "./pages/invoice";
import React from "react";

function App() {
  return (
    <Router>
      <HeaderBar />
      <SpaceMakerSideNav />
      <Routes>
        <Route path="/" element={<Navigate to="/workorders" />} />
        <Route path="*" element={<Navigate to="/workorders" />} />
        {/* default redirect to Workorders page */}
        <Route path="/workorders" element={<Workorders />} />
        {/* <Route path="/quote" element={<Quote />} /> */}
        <Route path="/artifacts" element={<Artifacts />} />
        <Route path="/floormap" element={<FloorMap />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import LeaderBoard from "./Components/LeaderBoard";
import DashBoard from "./Components/DashBoard";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

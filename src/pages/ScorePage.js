import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Score from "../components/scorePage/Score";
function ScorePage() {
  return (
    <div className="app">
      <Sidebar />
      <Score />
    </div>
  );
}

export default ScorePage;

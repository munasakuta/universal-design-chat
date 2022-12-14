/**
 * ユーザー情報を表示する
 */
import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Profile from "../components/profilePage/Profile";
import "../App.css";
export function ProfilePage() {
  return (
    <div className="app">
      <Sidebar />
      <Profile />
    </div>
  );
}

export default ProfilePage;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../../Components/Feed/Feed";
import { AnimeLeft } from "../../styles/GlobalStyle";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

function User() {
  return (
    <AnimeLeft className="container">
      <UserHeader />
      <Routes>
        <Route element={<Feed />} path="/" />
        <Route element={<UserPhotoPost />} path="posta" />
        <Route element={<UserStats />} path="estatisticas" />
      </Routes>
    </AnimeLeft>
  );
}

export default User;

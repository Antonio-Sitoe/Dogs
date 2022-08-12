import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../../Components/Feed/Feed";
import UserContext from "../../Contexts/UserContext";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

function User() {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route element={<Feed user={data?.id || 2} />} path="/" />
        <Route element={<UserPhotoPost />} path="posta" />
        <Route element={<UserStats />} path="estatisticas" />
      </Routes>
    </section>
  );
}

export default User;

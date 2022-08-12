import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Feed from "../../Components/Feed/Feed";
import Head from "../../Components/Head/Head";
import UserContext from "../../Contexts/UserContext";
import NotFound404 from "../404";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

function User() {
  const { data } = React.useContext(UserContext);
  if (data)
    return (
      <section className="container">
        <Head title={"Minha conta "} description="Minha conta" />
        <UserHeader />
        <Routes>
          <Route element={<Feed user={data.id} />} path="/" />
          <Route element={<UserPhotoPost />} path="posta" />
          <Route element={<UserStats />} path="estatisticas" />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </section>
    );
  return <Navigate to="/login" />;
}

export default User;

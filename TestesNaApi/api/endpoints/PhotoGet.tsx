import React, { FormEvent } from "react";
import { url } from "../../../App";

function PhotoGet() {
  const [token, setToken] = React.useState(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZG9nc2FwaS5vcmlnYW1pZC5kZXYiLCJpYXQiOjE2NTg2MDc4MTcsIm5iZiI6MTY1ODYwNzgxNywiZXhwIjoxNjU4Njk0MjE3LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxNSJ9fX0.AtU4TPCv9xvggdVi0jBdxaJiBCYoDDreZLTMvpCCP24"
  );
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const response = await fetch(url + "/api/photo/227");
    const js = await response.json();

    console.log(js);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Photo get</h2>
      <input type="text" />
      <button>Enviar</button>
    </form>
  );
}

export default PhotoGet;

import React, { FormEvent } from "react";
import { url } from "../../../App";

function TokenPost() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const response = await fetch(url + "/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const json = await response.json();

    setToken(json.token);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>TokenPost</h2>
      <p>{token}</p>
      <input
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
        placeholder="username"
      />

      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Adicionar usuario</button>
    </form>
  );
}

export default TokenPost;

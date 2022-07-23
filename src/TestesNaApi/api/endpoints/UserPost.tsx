import React, { FormEvent } from "react";
import { url } from "../../../App";

function UserPost() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const response = await fetch(url + "/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const json = await response.json();

    console.log(json);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>User post</h2>
      <input
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
        placeholder="username"
      />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
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

export default UserPost;

import React, { FormEvent } from "react";
import { url } from "../../../App";

function PhotoPost() {
  const [token, setToken] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [img, setImg] = React.useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("img", img);
    formData.append("nome", nome);
    formData.append("peso", peso);
    formData.append("idade", idade);

    const response = await fetch(url + "/api/photo", {
      method: "POST",
      headers: {
        Authorization: "Bearer" + token,
      },
      body: formData,
    });
    const json = await response.json();
    console.log(json);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>PHOTO POST</h2>
      <input
        type="text"
        value={token}
        onChange={({ target }) => setToken(target.value)}
        placeholder="username"
      />
      <input
        type="text"
        placeholder="email"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />
      <input
        type="file"
        onChange={({ target }) => {
          console.log(target.files[0]);
          setImg(target.files[0]);
        }}
      />
      <button>Adicionar usuario</button>
    </form>
  );
}

export default PhotoPost;

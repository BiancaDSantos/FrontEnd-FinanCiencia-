import React, { useState } from "react";

function DialogApoiador({ onFechar, onEnviar, idProjeto }) {
  const [email, setEmail] = useState("");

  const enviar = () => {
    if (!email) return;

    fetch("http://localhost:8080/apoiar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idProjeto, email })
    })
    .then(res => {
      if (res.ok) {
        onEnviar();
      } else {
        alert("Erro ao apoiar projeto.");
      }
    })
    .catch(() => alert("Erro na requisição."));
  };

  return (
    <dialog open id="dialogFormApoiador">
      <section>
        <h2>Por gentileza, informe seu e-mail:</h2>
        <input
          type="email"
          id="emailApoiadorInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <menu>
          <button type="button" onClick={onFechar}>Voltar</button>
          <button type="button" disabled={!email} onClick={enviar}>Enviar</button>
        </menu>
      </section>
    </dialog>
  );
}

export default DialogApoiador;

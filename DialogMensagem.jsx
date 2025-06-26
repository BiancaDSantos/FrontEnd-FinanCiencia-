import React from "react";

function DialogMensagem({ onFechar }) {
  return (
    <dialog open id="dialogOk">
      <section>
        <h2>Obrigada!</h2>
        <p>A universidade entrará em contato ou nenhum projeto foi localizado.</p>
        <menu>
          <button type="button" onClick={onFechar}>Ok!</button>
        </menu>
      </section>
    </dialog>
  );
}

export default DialogMensagem;

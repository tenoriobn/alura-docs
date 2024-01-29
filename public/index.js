import "./socket-front-index.js";

const listaDocumentos = document.getElementById("lista-documentos");

function inserirLinkDocumento(nomeDocumento)  {
  listaDocumentos.innerHTML += `
  <a 
    href="documento.html?nome=${nomeDocumento}" 
    class="list-group-item list-group-item-action"
  >
    ${nomeDocumento}
  </a>
  `;
};

export { inserirLinkDocumento };

import io from "./servidor.js";

const documentos = [
  {
    nome: "JavaScript",
    texto: "texto de javascript...",
  },
  {
    nome: "Node",
    texto: "texto de node...",
  },
  {
    nome: "Socket.IO",
    texto: "texto de socket.io...",
  }
]

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);

  socket.on("selecionar_documento", (nomeDocumento) => {
    const documento = encontrarDocumento(nomeDocumento);
    console.log(documento)

    socket.join(nomeDocumento)
  });

  socket.on("texto_editor", ({ texto, nomeDocumento }) => {
    socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
  });
});


function encontrarDocumento(nome) {
  const documento = documentos.find((documento) => {
    return documento.nome === nome;
  });

  return documento;
}
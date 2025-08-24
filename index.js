import express from "express";
import verificarAutenticacao from "./security/autenticar.js";
import session from "express-session";

const app = express();
const port = 3000;
const host = "0.0.0.0";

app.use(
  session({
    secret: "meuS3gr3d0",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 5, // 5 minutos
    },
  })
);
app.use(express.urlencoded({ extended: true }));

app.post("/login", (requisicao, resposta) => {
  const usuario = requisicao.body.usuario;
  const senha = requisicao.body.senha;

  if (usuario == "admin" && senha == "admin") {
    requisicao.session.autenticado = true;
    resposta.redirect("/home.html");
  } else {
    resposta.send(
      "<span>Usuário ou senha inválidos!</span> <a href='/login.html'> Tentar novamente </a>"
    );
  }
});

app.get("/logout", (requisicao, resposta) => {
  requisicao.session.destroy();
  resposta.redirect("/login.html");
});

app.get("/", (requisicao, resposta) => {
  resposta.redirect("/home.html");
});

app.use(express.static("public"));

app.use(verificarAutenticacao, express.static("private"));

app.listen(port, host, () => {
  console.log(`Servidor em execução em http://${host}:${port}`);
});

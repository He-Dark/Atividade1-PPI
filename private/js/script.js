const inputQuantidade = document.getElementById("quantidade");
const valorTotal = document.getElementById("valorTotal");
const spanPrecoVaga = document.querySelector(".precoPorVaga");
const preco = parseFloat(spanPrecoVaga.innerText);

valorTotal.innerText = `R$ ${preco.toFixed(2).replace(".", ",")}`;

inputQuantidade.addEventListener("input", () => {
  const qtd = parseInt(inputQuantidade.value) || 1;
  valorTotal.textContent = "R$ " + (qtd * preco).toFixed(2).replace(".", ",");
});

function aviso() {
  alert("Calma calabreso!\nFunção em construção...");
  // alert(`Vagas Compradas com SUCESSO!!`);
}

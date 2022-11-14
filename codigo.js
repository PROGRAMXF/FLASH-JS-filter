//array
const nombres = [
  "MARTIN",
  "SUSANA",
  "GISELA",
  "MARIO",
  "KARINA",
  "ERNESTO",
  "DAIANA",
  "JUAN",
  "AGUSTINA",
  "SERGIO",
  "LAURA",
  "ALEJANDRO",
];

function listaItems(nombres) {
  let items = "";
  for (let i = 0; i < nombres.length; i++) {
    items += `<li>${nombres[i]}</li>`;
  }
  return items;
}
document.querySelector("main").innerHTML = `
  <ol>
  ${listaItems(nombres)}
  </ol>
  `;

const cambios = nombres.filter((value) => value.length >= 6);

function cambiar() {
  document.write(cambios);
}

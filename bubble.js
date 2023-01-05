// function burbuja() {
//   let lista = [6, 3, 5, 1, 7, 8, 2, 4];
//   let i, n, j, aux;
//   console.log("---------");
//   console.log(lista);
//   console.log("---------");
//   n = lista.length;

//   for (j = 1; j < n; j++) {
//     for (i = 0; i < n - j; i++) {
//       if (lista[i] > lista[i + 1]) {
//         aux = lista[i];
//         lista[i] = lista[i + 1];
//         lista[i + 1] = aux;
//       }
//     }
//     console.log(lista);
//   }
// }
// burbuja();

document.getElementById('tipoSort').innerHTML = "Bubble Sorting:"
let cantidad = document.querySelector("#cantidad");
let btnDraw = document.querySelector("#draw");
let btnSort = document.querySelector("#sort");
let contenedorCartas = document.querySelector(".contenedor-cartas");
let bubbleSort = document.querySelector(".bubbleSort");

const card = (elem) => {
  const iconoCarta = ["&clubs;", "&diams;", "&hearts;", "&spades;"];
  const cartaRandom = () => ({
    valor: Math.floor(Math.random() * 13) + 1,
    icono: iconoCarta[Math.floor(Math.random() * 4)],
  });
  let deck = [];
  for (let i = 0; i < elem; i++) deck.push(cartaRandom());

  return deck;
};

const value = (value) =>
  value == 1
    ? "A"
    : value == 11
    ? "J"
    : value == 12
    ? "Q"
    : value == 13
    ? "K"
    : value;

// if (tipoCarta == "&hearts;" || tipoCarta == "&diams;") {
//   header.classList.add("text-danger");
//   footer.classList.add("text-danger");
// }

const color = (item) =>
  item == "&hearts;"
    ? "color:red;"
    : item == "&diams;"
    ? "color:red;"
    : "color:black;";

const generateCard = (card) => {
  let valorCarta = card.valor;
  let tipoCarta = card.icono;

  return `
  <div class="card carta">
  <div class="cardList-card-header" style="${color(
    tipoCarta
  )}">${tipoCarta}</div>
  <div class="card-body">${value(valorCarta)}</div>
  <div class="cardList-card-footer" style="${color(
    tipoCarta
  )}">${tipoCarta}</div>
  </div>
  `;
};

let deck = [];
let nuevoDeck = [];
const sorting = (arr) => {
  let wall = arr.length - 1;
  let half = (arr.length - 1) / 2;
  while (wall > half) {
    let index = 0;
    while (index < wall) {
      if (arr[index].valor > arr[index + 1].valor) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
        nuevoDeck.push(arr.slice(0));
      }
      index++;
    }
    wall--;
  }
  return arr;
};

btnDraw.addEventListener("click", () => {
  contenedorCartas.innerHTML = "";
  deck = card(cantidad.value);
  contenedorCartas.innerHTML = deck.map((c) => generateCard(c)).join("");
  bubbleSort.innerHTML = "";
  // console.log('click')
});

btnSort.addEventListener("click", () => {
  sorting(deck);
  bubbleSort.innerHTML = nuevoDeck
    .map(
      (item) =>
        `<div class="sorted">${item
          .map((elem) => generateCard(elem))
          .join("")}</div>`
    )
    .join("");
  nuevoDeck = [];
  // deck = [];
  // console.log('click')
});

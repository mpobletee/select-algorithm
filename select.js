// const arr = [2, 7, 5, 6, 9, 8, 10, 1, 4, 3];

// const select = (arr) => {
//   let len = arr.length;

//   for (let i = 0; i < len; i++) {
//     let auxMin = i;
//     for (let j = i; j < arr.length; j++){
//         if(arr[j] < arr[auxMin]){
//             auxMin = j;
//         }
//         if(auxMin !== i){
//             let aux = arr[auxMin];
//             arr[auxMin] = arr[i];
//             arr[i] = aux;
//         }
//     }
//     console.log(arr)
//   }
//   return arr;
// };

// select(arr);
// console.log(arr);

document.getElementById('tipoSort').innerHTML = "Select Sorting:"
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
  <div class="cardList-card-header" style="${color(tipoCarta)}">${tipoCarta}</div>
  <div class="card-body">${value(valorCarta)}</div>
  <div class="cardList-card-footer" style="${color(tipoCarta)}">${tipoCarta}</div>
  </div>
  `;
};

let deck = [];
let nuevoDeck = [];
const sorting = (arr) => {
  let min = 0;
  while (min < arr.length - 1) {
    for (let i = min + 1; i < arr.length ; i++) {
      if (arr[min].valor > arr[i].valor) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
        nuevoDeck.push(arr.slice(0));
      }
    }
    min++;
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


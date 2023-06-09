let currMoleTile;
let currPlantTile;
let gameOver = false;

// Adicione a lista de frases
const frases = [
  "Trabalho em equipe",
  "Resolução de problemas",
  "Animada",
  "Didática",
  "Inovadora",
  "Compromisso",
  "Comunicativa",
  "Extrovertida",
  "Proativa ",
  "Criativa",
];

window.onload = function() {
    setGame();
}

function setGame() {
    // set up the grid in html
    for (let i = 0; i < 6; i++) { // i goes from 0 to 6, stops at 7
        //<div id="0-6"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000); // 1000 miliseconds = 1 second, every 1 second call setMole
    setInterval(setPlant, 2000); // 2000 miliseconds = 2 seconds, every 2 second call setPlant
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 6);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./assets/img/cat.png";

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);

    // Adicione o ouvinte de evento de clique ao gato
    mole.addEventListener("click", exibirFrase);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currPlantTile) {
        document.getElementById("score"); // update score html
        gameOver = true;
    }
}

// Função para exibir uma frase aleatória
function exibirFrase() {
  // Obtenha um índice aleatório para selecionar uma frase da lista
  const indice = Math.floor(Math.random() * frases.length);
  
  // Exiba a frase no lugar do score
  document.getElementById("score").innerText = frases[indice];
}

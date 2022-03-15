// Consegna
// creare una griglia di gioco quadrata, in cui ogni cella contiene un numero
// tra quelli compresi in un range compreso tra 1 e 100
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const grid = document.getElementById('grid');

const columns = 10;
const rows = 10;

const totalCells = columns * rows;

const extractedNumbers = [];

for (let i = 0; i < totalCells; i++){
    const cell = createCell();
    const random = generateUniqueRandomNumber(1, totalCells, extractedNumbers)
    extractedNumbers.push(random);

    cell.innerText = random;
    cell.id = random;

    cell.addEventListener('click', function(){
        cell.classList.toggle('bg-skyblue');
    });

    grid.appendChild(cell);
    
}


function generateUniqueRandomNumber(min, max, record) {
    let number = generateRandomNumber(min, max);

    while (record.includes(number)) {
        number = generateRandomNumber(min, max)
    }
    return number;
}



function generateRandomNumber(min, max) {
    const range = (max - min) + 1;
    const numeroRandom = Math.floor(Math.random() * range + min);
    return numeroRandom;
}

function createCell() {
    const item = document.createElement('div');
    item.classList.add('cell');
    return item;
}





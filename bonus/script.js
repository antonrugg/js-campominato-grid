// Consegna
// creare una griglia di gioco quadrata, in cui ogni cella contiene un numero
// tra quelli compresi in un range compreso tra 1 e 100
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// BONUS:
// L'utente indica un livello di difficoltà, in base al livello scelto la griglia conterrà un range diverso:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

const grid = document.getElementById('grid');


let totalCells = columns * rows;

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

function difficultyChoice() {
    const choice = parseInt(prompt('Inserisci difficoltà, da 1 a 3: '));
    while (isNaN(choice) && (choice < 1 || choice > 3)){
        choice = parseInt(prompt('Inserisci difficoltà, da 1 a 3: '));
    }

    if (choice === '1') {
        let totalCells = 0;
        let columns = 10;
        let rows = 10;
        totalCells = columns * rows; 
    } else if (choice === '2') {
        let totalCells = 0;
        let columns = 8;
        let rows = 8;
        totalCells = (columns * rows) + 1; 
    } else {
        let totalCells = 0;
        let columns = 5;
        let rows = 5;
        totalCells = (columns * rows) - 1; 
    }
}





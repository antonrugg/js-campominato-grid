// Consegna
// creare una griglia di gioco quadrata, in cui ogni cella contiene un numero
// tra quelli compresi in un range compreso tra 1 e 100
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// BONUS:
// L'utente indica un livello di difficoltà, in base al livello scelto la griglia conterrà un range diverso:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49




let columns;
let rows;
let choice;

const extractedNumbers = [];

do {
    choice = parseInt(prompt('Choose difficulty between 1 and 3'))
} while (choice < 1 || choice > 3 || isNaN(choice));

switch (choice) {
    case 1:
        rows = 10;
        columns = 10;
        break;
    case 2:
        rows = 9;
        columns = 9;
        break;
    case 3:
        rows = 7;
        columns = 7;
        break;
    default:
        rows = 10;
        columns = 10;

}

let totalCells = rows * columns;

for (let i = 1; i <= totalCells; i++) {
    const cell = createCell(choice);
    const grid = document.getElementById('grid');


    cell.innerText = i;
    cell.id = i;

    cell.addEventListener('click', function () {
        cell.classList.toggle('bg-skyblue');
    });
    
    grid.appendChild(cell);

}


function createCell(choice) {
    const item = document.createElement('div');
    item.classList.add('cell-100');

    if (choice === '1'){
        item.classList.add('cell-100');
    } else if (choice === '2') {
        item.classList.add('cell-81');
    } else if (choice === '3'){
        item.classList.add('cell-49');
    }

    
    return item;
}





// function difficultyChoice() {
//     const choice = parseInt(prompt('Inserisci difficoltà, da 1 a 3: '));
//     while (isNaN(choice) && (choice < 1 || choice > 3)){
//         choice = parseInt(prompt('Inserisci difficoltà, da 1 a 3: '));
//     }

//     if (choice === '1') {
//         let totalCells = 0;
//         let columns = 10;
//         let rows = 10;
//         totalCells = columns * rows; 
//     } else if (choice === '2') {
//         let totalCells = 0;
//         let columns = 8;
//         let rows = 8;
//         totalCells = (columns * rows) + 1; 
//     } else {
//         let totalCells = 0;
//         let columns = 5;
//         let rows = 5;
//         totalCells = (columns * rows) - 1; 
//     }
// }





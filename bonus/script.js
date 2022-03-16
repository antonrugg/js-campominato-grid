// Consegna
// creare una griglia di gioco quadrata, in cui ogni cella contiene un numero
// tra quelli compresi in un range compreso tra 1 e 100
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// BONUS:
// L'utente indica un livello di difficoltà, in base al livello scelto la griglia conterrà un range diverso:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

//selecting grid element by id
const grid = document.getElementById('grid');

//check if user input isNaN, less than 1 or more than 3, if so ask again
do {
    choice = parseInt(prompt('Choose difficulty between 1 and 3'));
} while ((choice < 1 || choice > 3) || isNaN(choice));

//use switch to create different number of cells inside grid based on user choice
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

//store total number of cells
let totalCells = rows * columns;


//use for to create between 1 to 100/81/49 cells, call create function inside,
// add index inside with innertext, add evenlistener.toggle to change color on click,
// use appendchild to append cell inside of grid 
for (let i = 1; i <= totalCells; i++) {
    const cell = createCell();
    
    cell.innerText = i;

    cell.addEventListener('click', () => {
        cell.classList.toggle('bg-skyblue');
    });

    
    grid.appendChild(cell);
}


// function to create a div, add a class from style.css to that div (item), return item
function createCell() {
    const item = document.createElement('div');
    item.classList.add('cell');
    return item;
}










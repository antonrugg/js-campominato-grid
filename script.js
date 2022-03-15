// Consegna
// creare una griglia di gioco quadrata, in cui ogni cella contiene un numero
// tra quelli compresi in un range compreso tra 1 e 100
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const grid = document.getElementById('grid');

const columns = 10;
const rows = 10;

const totalCells = columns * rows;

const extractedNumbers = [];

for (let i = 1; i <= totalCells; i++){
    const cell = createCell();
    

    cell.innerText = i;
    cell.id = i;

    cell.addEventListener('click', function(){
        cell.classList.toggle('bg-skyblue');
    });

    grid.appendChild(cell);
    
}


function createCell() {
    const item = document.createElement('div');
    item.classList.add('cell');
    return item;
}





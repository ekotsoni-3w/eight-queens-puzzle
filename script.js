const board = document.getElementById('board')

function queenFun(event) {
    const clickedCell = event.target;
    let attack = false;

    if (!clickedCell.classList.contains('queen')) {
        clickedCell.classList.add('queen');
        clickedCell.textContent = '♛';
    }
    else {
        clickedCell.classList.remove('queen')
        clickedCell.textContent = ''
    }

    updateCounter();

    const queens = document.querySelectorAll('.queen'); 
    for (const queen of queens) {
        const rowQ = Number(queen.dataset.row);
        const colQ = Number(queen.dataset.column);
        for (let nextQueen of queens) {
                if (queen !== nextQueen) {
                    const rowOther = Number(nextQueen.dataset.row);
                    const colOther = Number(nextQueen.dataset.column);
                    if ((rowQ === rowOther) || (colQ === colOther) || ((Math.abs(rowQ-rowOther))=== (Math.abs(colQ - colOther)))) {
                        attack = true;
                    }
                }
        }
    }

    if (attack) {
        const messageAttack = document.getElementById('message');
        messageAttack.textContent = 'Υπάρχει σύγκρουση μεταξύ βασιλισσών.';
    }
    else if (queens.length === 8) {
        const messageAttack = document.getElementById('message');
        messageAttack.textContent = 'Μπράβο! Έλυσες το γρίφο.';
    }
    else {
        const messageAttack = document.getElementById('message');
        messageAttack.textContent = 'Μέχρι τώρα δεν υπάρχει σύγκρουση.';
    }
}

for (let row=0; row<8; row++) { 
    for (let column=0; column<8; column++) {

        const cell = document.createElement('div')
        cell.classList.add("cell");
        cell.dataset.row = row;
        cell.dataset.column = column;
        if ((row+column)%2===0) {
            cell.classList.add("white");
        }
        else {
            cell.classList.add("black");
        }
        cell.addEventListener('click', queenFun);
        board.appendChild(cell);
    }
}

function updateCounter() {
    const queens = board.querySelectorAll('.queen');
    const counter = document.getElementById('count');
    counter.textContent = 'Βασίλισσες: ' + queens.length + '/8';
}

function resetBoard() {
    const queens = document.querySelectorAll('.queen');
    for (const queen of queens) {
        queen.classList.remove('queen');
        queen.textContent = '';
    }
    const messageAttack = document.getElementById('message');
    messageAttack.textContent = '';
    updateCounter();
    const hintBox = document.getElementById('hint-box');
    hintBox.textContent = ''
    const section = document.getElementById('solution-section');
    section.style.display = 'none';
}

function solutionPuzzle() {
    const solutions = [
        [0, 4, 7, 5, 2, 6, 1, 3],
        [0, 5, 7, 2, 6, 3, 1, 4],
        [1, 3, 5, 7, 2, 0, 6, 4],
        [1, 4, 6, 0, 2, 7, 5, 3],
        [1, 4, 6, 3, 0, 7, 5, 2],
        [1, 5, 0, 6, 3, 7, 2, 4],
        [1, 5, 7, 2, 0, 3, 6, 4],
        [1, 6, 2, 5, 7, 4, 0, 3],
        [1, 6, 4, 7, 0, 3, 5, 2],
        [2, 0, 6, 4, 7, 1, 3, 5],
        [2, 4, 1, 7, 0, 6, 3, 5],
        [2, 4, 7, 3, 0, 6, 1, 5]
    ];

    const section = document.getElementById('solution-section');
    section.style.display = 'block';

    const container = document.getElementById('solution-container');
    container.innerHTML = '';
    for (let i = 0; i < solutions.length; i++) {
        const solution = solutions[i]
        const SolCard = document.createElement('div');
        SolCard.classList.add("solution-card");
        const HeadSol = document.createElement('h3');
        HeadSol.textContent =  "Λύση " + (i+1);
        const solutionBoard = document.createElement('div');
        solutionBoard.classList.add("solution-board");
        
        for (let row=0; row<8; row++) { 
            for (let column=0; column<8; column++) {
                const MiniCell = document.createElement('div')
                MiniCell.classList.add("solution-cell");
                MiniCell.dataset.row = row;
                MiniCell.dataset.column = column;
                if ((row+column)%2===0) {
                    MiniCell.classList.add("white");
                }
                else {
                    MiniCell.classList.add("black");
                }
                if (solution[row] === column) {
                    MiniCell.classList.add('queen');
                    MiniCell.textContent = '♛';
                }
                solutionBoard.appendChild(MiniCell);
            }
        }
        SolCard.appendChild(HeadSol);
        SolCard.appendChild(solutionBoard);
        container.appendChild(SolCard);

    }

    updateCounter();
}

function hintsFun() {
    const hintBox = document.getElementById('hint-box');
    hintBox.innerHTML = `
    <ul>
        <li>Μια βασίλισσα σε κάθε γραμμή και σε κάθε στήλη</li>
        <li>Η βασίλισσα δεν κάνει την κίνηση του ίππου</li>
    </ul>
    `;
}

updateCounter();

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', resetBoard);

const solutionBtn = document.getElementById('solution');
solutionBtn.addEventListener('click', solutionPuzzle);

const hintBtn = document.getElementById('hint-btn');
hintBtn.addEventListener('click', hintsFun)

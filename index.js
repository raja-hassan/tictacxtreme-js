const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';

resetButton.addEventListener('click', resetGame);

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.innerText === '' && !checkWinner()) {
            cell.innerText = currentPlayer;
            if (checkWinner()) {
                setTimeout(() => {
                    alert(`${currentPlayer} wins!`);
                }, 10);
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
            return true;
        }
    }

    if ([...cells].every(cell => cell.innerText !== '')) {
        setTimeout(() => {
            alert('It\'s a draw!');
        }, 10);
    }

    return false;
}

function resetGame() {
    cells.forEach(cell => (cell.innerText = ''));
    currentPlayer = 'X';
}

function shipFactory(len){
    return {
        len: len,
        hits: 0,
        sunk: false,
        hit(){
            this.hits++
        },
        isSunk(){
            if(this.hits >= this.len){
                return true;
            }
            return false;
        }
    };
}

function gameboardFactory(){
    return {
        board: {},
        makeBoard(rows, cols, container) {
            container.style.setProperty('--grid-rows', rows);
            container.style.setProperty('--grid-cols', cols);
            for (c = 0; c < (rows * cols); c++) {
                let cell = document.createElement("div");
                cell.setAttribute('id', c.toString());
                cell.addEventListener('click', function handleClick(){fireOnComputerBoard(cell);});
                this.board[c] = cell;
                container.appendChild(cell).className = "cell";
            };
        },
        fire(cell){
            if(cell.innerText != ""){
                return;
            }
            this.hitCheck(cell.id);
        },
        hitCheck(cellID){
            console.log(cellID);
        }
    }
}

function fireOnComputerBoard(cell){
    computerBoard.fire(cell);
}

let playerBoard = gameboardFactory();
playerBoard.makeBoard(10,10, document.getElementById('player-board-container'));
let computerBoard = gameboardFactory();
computerBoard.makeBoard(10,10, document.getElementById('computer-board-container'))
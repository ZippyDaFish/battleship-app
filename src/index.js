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
        board: [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
        ],
        getCoords(y, x){
            return(this.board[y][x]);
        }
    }
}

let board1 = gameboardFactory();
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

let carrier = shipFactory(5);
carrier.hit();

console.log(carrier);
console.log(carrier.isSunk());
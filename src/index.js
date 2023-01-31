function shipFactory(len){
    return {
        len: len,
        hits: 0,
        sunk: false,
        hit(){
            this.hits++
        }
    };
}

let carrier = shipFactory(5);
carrier.hit();

console.log(carrier);
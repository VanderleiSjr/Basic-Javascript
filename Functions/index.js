//--------------------------HOISTING---------------------------//
// Function Declaration //
/*
function movie() {
    console.log('The Matrix')
}
movie()

movie()

function movie() {
    console.log('The Matrix')
}

// Funcion Expression

const car = function() {
    console.log('Tesla')
}
car()

car()
const car = function() {
    console.log('Tesla')
}

const truck =  car;
truck();
*/

//--------------------------------------------------------------------------//
//-----------------------------Function Arguments---------------------------//
/*
function price(a, b){
    return a + b;
}
console.log(price())
*/
/*
function price(){
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(price(10, 20, 30, 40, 50))
*/

//--------------------------------------------------------------------------//
//-----------------------------DEFAULT Arguments----------------------------//
function carLoan(loan, rate, years = 5) {
    return(loan * rate / 100 * years) + loan;
}

console.log(carLoan(20000, 2.5, 5))
//--------Adicionando valores ao array--------//
/*
const num = [7, 8, 9];

num.push(10, 11, 12);

console.log(num)


num.unshift(1, 2, 3);

console.log(num)

num.splice(3, 0, 4, 5, 6)

console.log(num)*/

//--------Consultando valores dentro de um array--------//

/*const num_array = [6, 7, 8, 9];
console.log(num_array.indexOf(4))
console.log(num_array.indexOf(8))
console.log(num_array.includes(8))*/

//---------Consultando dentro array de objetos--------//
/*
const movies = [
        {id: 1, movieName: 'Dejavu'},
        {id: 2, movieName: 'Back to the Future'},
        {id: 3, movieName: 'The Matrix'}
]

console.log(movies.includes({id: 1, movieName: 'Dejavu'}))

console.log(movies.find(function(movie) {
        return movie.movieName = 'The Matrix'
}))

console.log(movies.find(movie => movie.movieName = 'The Matrix'))
*/


//-------Removendo termos de dentro de um array------//

/*const num = [5, 6, 7, 8]
console.log(num)
//const final = num.pop()
//const final = num.shift()
//const final = num.splice(1, 2)
const final = num.splice(2, 2)

console.log('Array: ' + num)
console.log('Termos removidos ' + final)*/

//-------Limpando um array--------//

/*let num = [5, 6, 7, 8, 2, 1, 2, 3, 4]
console.log(num)

//num = []
num.splice(0, num.length)
console.log(num)
*/

//-------------Concatenando array--------------//
/*
let numbers = [5, 6, 7, 8];
let letters = ['a', 'b', 'c'];

all = numbers.concat(letters)
console.log(all)

half = all.slice(3, 5)

console.log(half)
*/

//-----------Juntando elementos de um array e transformando e uma string------------//
/*
let clients = ['Andre', 'Jose', 'Marcela']

console.log(clients)

let clientsJoin = clients.join(', ')

console.log(clients)
console.log(clientsJoin) 
*/

//---------Sort array--------//

let clients = ['Andre', 'Jose', 'Marcela']

clients.sort()
//clients.reverse()

console.log(clients)

//---------Verificando elementos dentro de um array com .every()--------//

/*
const tempLondon = [18, 13, 8, 13, 2]

//const tempPositive = tempLondon.every(value => value >= 0)

const tempPositive = tempLondon.every(function(value) {
        return value >= 0
})

console.log(tempPositive)

*/


//---------Filtrando elementos dentro de um array com .filter()--------//
/*
const tempLondon = [18, 0, 8, 13, -2]

const tempPositive = tempLondon.filter(function(value) {
        return value >= 0
})

console.log(tempPositive)
*/

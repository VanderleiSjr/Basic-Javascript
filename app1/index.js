console.log('JS funcionando')


let firstName = "Vand";
let lastName = "Junior";
console.log(firstName);
console.log(lastName);

let FirstName = "Vandinho"
console.log(FirstName);

let price = 30;
price = 20;
console.log(price)

const Price = 30;
// Price = 20;
console.log(Price)

let itemName = "Pen";
let itemPrice = 3;
let itemAvailable = true;
let itemColor = 'red';

itemName = null;

console.log(itemName);
console.log(itemColor);

console.log(typeof(itemName));
console.log(typeof(itemColor));

console.log(1+1);

let driver = 90;
let speed = driver > 110 ? 'Above' : 'Below';

console.log(speed);

driver = 120;
speed = driver > 110 ? 'Above' : 'Below';

console.log(speed);

let temIdadeMinima = true;
let temTituloEleitor = true;

let podeVotar = temIdadeMinima && temTituloEleitor ? 'Sim' : 'Nao';
console.log('Pode votar? '+podeVotar);

let podeViajar = !podeVotar ? 'Sim' : 'Nao';
console.log('Pode viajar? ' + podeViajar);

let corCliente = undefined;
let corEstoque = 'black';
let corVendida = corCliente || corEstoque;

console.log(corVendida);

////------Aula 33------/////

let driverSpeed = 110;

if (driverSpeed > 110) {
    console.log('Driving too fast');
}

else if 
    (driverSpeed > 40 && driverSpeed <= 110)
        console.log('OK');


else 
    console.log('Driving too slow');

////--- Aula 36 --- ///
for (i = 10; i <= 20; i++)
    console.log("Número: "+i);

i = 0;
////--- Aula 37 --- ///
while (i <= 10){
    console.log(i);
    i++;
}
////--- Aula 38 --- ///
const myCar = {
    model: 'BMW',
    year: 2023,
    km: 68000
}

for (let i in myCar)
    console.log(i, myCar[i])

const friends = ['Marcos', 'Ana', 'Jose']
////--- Aula 39 --- ///
for (let i of friends)
    console.log(i)
i = 0;
while (i <= 10) {
    console.log('Numero '+ i)
    if (i === 8)
        break;
    
    i++;
}

const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green', 'Black'];
const btn = document.getElementById('btn');
const yourColorComponent = document.getElementsByClassName('color')[0];
const yourColorComponent1 = document.querySelector('.color');

console.log(colors)
console.log(yourColorComponent)
console.log(yourColorComponent1)
console.log(typeof(yourColorComponent))

btn.addEventListener('click', function(){
    const randomColor = getRandomColor()
    document.body.style.backgroundColor = colors[randomColor]
    yourColorComponent.innerHTML = colors[randomColor]
    // console.log(randomColor)
    console.log(yourColorComponent)
})

function getRandomColor () {
    return Math.floor(Math.random() * colors.length)
}
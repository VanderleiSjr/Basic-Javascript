function outcome() {
    let num1 = Number(document.getElementById('num-one').value);
    let num2 = Number(document.getElementById('num-two').value);
    let total = 0;
    mathOperatorsElements = document.getElementsByName('sign-area')

    for (let element in mathOperatorsElements) {
        //console.log(mathOperatorsElements[element].checked)

        if (mathOperatorsElements[element].checked){
            //console.log(mathOperatorsElements[element]);

            switch(mathOperatorsElements[element].value) {
                case "add":
                    total = num1 + num2;
                    break;
                case "subtract":
                    total = num1 - num2;
                    break;
                case "multiply":
                    total = num1 * num2;
                    break;
                case "divide":
                    total = num1 / num2;
                    break;
                default:
                    total = null;
                    break;
            }
        }
    }
    console.log(total)
/*let mathOperator = () => {
        for (let i in document.getElementsByName('sign-area'))
            if (i.checked)
                return i.value
    }
    console.log(mathOperator)
/*
    if (document.getElementById('box1').checked)
        total = num1+num2;
    else if (document.getElementById('box2').checked)
        total = num1-num2;
    else if (document.getElementById('box3').checked)
        total = num1*num2;
    else if (document.getElementById('box4').checked)
        total = num1/num2;

    switch(document.getElementsByName('')):
        case document.getElementsByName
*/
    document.getElementById('resultArea').innerHTML = `O resultado é: ${total}`;
}

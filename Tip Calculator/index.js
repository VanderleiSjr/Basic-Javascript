function formatMoney(value){
    value = value.toFixed(2);
    return "$" + value;
}

function formatSplit(value){
    if (value == 1) return value + " person";
    return value + " people";
}



function update(){
    tipPercent = document.getElementById('tipInput').value;
    bill = Number(document.getElementById('yourBill').value);
    split = document.getElementById('splitInput').value;

    tipPercentComponent = document.getElementById('tipPercent');
    tipPercentComponent.innerHTML = tipPercent +"%";

    splitValueComponent = document.getElementById('splitValue');
    splitValueComponent.innerHTML = formatSplit(split);

    //tipPercentComponent.textContent = tipPercent +"%";
    //splitValueComponent.textContent = split;

    let tipValue = bill * (tipPercent / 100);
    let billTotal = bill + tipValue;
    let billEach = billTotal / split;

    // document.getElementById('tipValue').innerHTML = "$ " + tipValue;
    // document.getElementById('totalWithTip').innerHTML = "$ " + billTotal;
    // document.getElementById('billEach').innerHTML = "$ " + billEach
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue);
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal);
    document.getElementById('billEach').innerHTML = formatMoney(billEach);
    
    console.log(bill, tipPercent, split);
}
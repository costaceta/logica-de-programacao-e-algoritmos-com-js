const inPrice = document.getElementById('price');
const inTime = document.getElementById('time');
const outValueToPay = document.getElementById('valueToPay');

function calcValueToPay() {
    let price = inPrice.value;
    let time = inTime.value;

    const newTime = Math.ceil(time / 15);
    const valueToPay = newTime * price;

    const outputMenssage = "Valor a pagar em R$: " + valueToPay.toFixed(2);
    outValueToPay.innerText = outputMenssage;
}


const btnCalcValeuToPay = document.getElementById('btnCalcValueToPay');

btnCalcValeuToPay.addEventListener('click', calcValueToPay);

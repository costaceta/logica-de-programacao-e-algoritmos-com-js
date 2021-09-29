const inProduct = document.getElementById('product');
const inPrice = document.getElementById('price');
const outPrice = document.getElementById('outPrice');
const outProductDescont = document.getElementById('outProductDescont');

function calcSale() {
    let product = inProduct.value;
    let price = parseInt(inPrice.value);
    let discont = (price / 2);

    let total = price * 2 + discont;

    outPrice.textContent = product + " promoção leve 3 por R$: " + total.toFixed(2);
    outProductDescont.textContent = "O terceiro produto custa apenas R$: " + discont.toFixed(2);
}


const btnSale = document.getElementById('btnSale');
btnSale.addEventListener('click', calcSale);

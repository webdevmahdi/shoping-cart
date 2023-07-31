function updateProductPrice(product, isAdd, price){
    const productInput = document.getElementById(product + '-input');
    let productNum = productInput.value;
    if(isAdd == true){
    productNum = parseInt(productNum) + 1;
    }
    else if(productNum > 0){
    productNum = parseInt(productNum) - 1; 
    }
    productInput.value = productNum;
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = productNum * price;
    calculateTotal();
}
function getProductInput(product){
    let inputField = document.getElementById(product + '-input');
    let inputFieldNum = parseInt(inputField.value);
    return inputFieldNum;
}
function calculateTotal(){
    let getPhone = getProductInput('phone') * 1219;
    let getCase = getProductInput('case') * 59;
    let subTotal = getPhone + getCase;
    document.getElementById('sub-total').innerText = subTotal;
    let rate = 5/100
    let tax = subTotal * rate;
    document.getElementById('tax-amount').innerText = tax;
    let totalPrice = subTotal + tax;
    document.getElementById('total-price').innerText = totalPrice;
    console.log(totalPrice);
}
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductPrice('phone', true, 1219);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductPrice('phone', false, 1219);
})
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductPrice('case', true, 59);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductPrice('case', false, 59);
})
function handleOnClick(){
    // const product1 = getElementValue('product-price');
    // const previousPrice = getElementValue('total-price');
    // console.log(previousPrice)
    // const newPrice = product1 + previousPrice;
    
    // const setPrice = setElementValue('total-price', newPrice);
    updatePrice('product-price');
    
}
function handleOnClickk(){
    // const product1 = getElementValue('product-price2');
    // const previousPrice = getElementValue('total-price');
    // console.log(previousPrice)
    // const newPrice = product1 + previousPrice;
    
    // const setPrice = setElementValue('total-price', newPrice);
    updatePrice('product-price2');
    
}
function handleOnClickkk(){
    // const product1 = getElementValue('product-price3');
    // const previousPrice = getElementValue('total-price');
    // console.log(previousPrice)
    // const newPrice = product1 + previousPrice;
    
    // const setPrice = setElementValue('total-price', newPrice);
    updatePrice('product-price3');
    
}
function updatePrice(productId){
    const productPrice = getElementValue(productId);
    const previousPrice = getElementValue('total-price');
    const newPrice = productPrice + previousPrice;
    setElementValue('total-price', newPrice);
}
function getElementValue(elementId){
    const elementValue = document.getElementById(elementId);
    const elementValueString = elementValue.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

function setElementValue(getId, totalValue){
    const getElementId = document.getElementById(getId);
    getElementId.innerText = totalValue;
}









function price(productId){
    const currentPrice = getElementValue(productId);
    const previousPrice = getElementValue('total-price');
    const newPrice = currentPrice + previousPrice;
    setElementValue('total-price', newPrice);
}
function getIdValue(id){
    const getIdValue = document.getElementById(id);
    const getId = getIdValue.innerText;
    const value = parseFloat(getId);
    return value;
}
function setIdValue(gId, totalValue){
    const getId = document.getElementById(gId);
    getId.innerText = totalValue;
    
}

function productOnClick(){
    price('product-price');
}
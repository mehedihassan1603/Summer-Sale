function handleOnClick() {
    updateTotalPrice('product-price');

    addToList('K.Accessories');
  }

  function handleOnClickk() {
    updateTotalPrice('product-price2');

    addToList('L. Accessories');
  }

  function handleOnClickkk() {
    updateTotalPrice('product-price3');
    addToList('Home Cooker');
  }

  function sportsClick(){
    updateTotalPrice('sports1');
    addToList('Sports Back Cap');
  }

  function sportsClickk(){
    updateTotalPrice('sports2');
    addToList('Fully Jersey Set');
  }

  function sportsClickkk(){
    updateTotalPrice('sports3');
    addToList('Sports Cates');
  }

  function furnitureClick(){
    updateTotalPrice('furniture1');
    addToList('Single Relax Chair');
  }

  function furnitureClickk(){
    updateTotalPrice('furniture2');
    addToList('Children Play');
  }

  function furnitureClickkk(){
    updateTotalPrice('furniture3');
    addToList('Flexible Sofa');
  }

  function updateTotalPrice(productElementId) {
    const productPrice = getElementValue(productElementId);
    const previousPrice = getElementValue('total-price');
    const newPrice = productPrice + previousPrice;

    setElementValue('total-price', newPrice);
  }

  function getElementValue(elementId) {
    const elementValueString = document.getElementById(elementId).innerText;
    const value = parseFloat(elementValueString);
    return isNaN(value) ? 0 : value;
  }

  function setElementValue(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value.toFixed(2); 
    
  }

  

  function addToList(ppp){
    const productListId = document.getElementById('product-list');
    const count = productListId.childElementCount;
    const p= document.createElement('p');
    p.classList.add('font-semibold','my-2');
    p.innerHTML = `${count+1}. ${ppp}`;
    productListId.appendChild(p);
  }



    const couponInput = document.getElementById('coupon-input');
    const applyButton = document.getElementById('apply-button');
    

    const totalPriceElement = document.getElementById('total-price');
    const makePurchaseButton = document.getElementById('make-purchase-button');
    
    function checkTotalPrice() {
        const totalPrice = parseFloat(totalPriceElement.innerText);
        if (totalPrice === 0) {
            makePurchaseButton.setAttribute('disabled', 'true');
        } else {
            makePurchaseButton.removeAttribute('disabled');
        }
    }

    checkTotalPrice();

    couponInput.addEventListener('input', () => {
      const couponCode = couponInput.value;
      
      if (couponCode === 'SELL20' && totalPriceElement.innerText >= 200) {
          applyButton.removeAttribute('disabled');      
      } 
      else if(couponCode !== 'SELL20' && totalPriceElement.innerText < 200){
        alert('Please purchase TK 200 or above to use coupon');
        couponInput.value = '';
        
      }
      
      else {
          applyButton.setAttribute('disabled', 'true');
      }
      
      
  });
  
  
  function calculateDiscount(){
    const totalPrice = getElementValue('total-price');
    const discountedTotalPrice = totalPrice * 20/100;
    setElementValue('discount', discountedTotalPrice);
    const overallTotal = totalPrice - discountedTotalPrice;
    setElementValue('overall', overallTotal);
  }


  function goHome(){
    const link = document.getElementById('go-home');
    link = window.location.href = 'http://127.0.0.1:5501/index.html';

  }


    totalPriceElement.addEventListener('DOMSubtreeModified', checkTotalPrice);




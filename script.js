
const form = document.querySelector('#pizza-form');
const output = document.querySelector('#output');


const SMALL_PRICE = 7.00;
const MEDIUM_PRICE = 10.00;
const LARGE_PRICE = 14.00;
const ONE_TOPPING_PRICE = 2.00;
const TWO_TOPPINGS_PRICE = 3.00;
  

form.addEventListener('submit', (event) => {
  
  event.preventDefault();

  
  const pizzaSize = document.querySelector('input[name="size"]:checked').value;
    const toppingCount = document.querySelector('#toppings').value;

  
  let pizzaPrice;
  switch (pizzaSize) {
    case 'small':
      pizzaPrice = SMALL_PRICE;
      break;
    case 'medium':
       pizzaPrice = MEDIUM_PRICE;
      break;
    case 'large':
      pizzaPrice = LARGE_PRICE;
      break;
  }
  if (toppingCount === 'one') {
    pizzaPrice += ONE_TOPPING_PRICE;
  } else if (toppingCount === 'two') {
    pizzaPrice += TWO_TOPPINGS_PRICE;
     }


  output.textContent = `Your pizza costs $${pizzaPrice.toFixed(2)}.`;
});

const createCounter = () => {
  let count = 0

  const increment = () => {
    count ++;
    console.log(count);
  };

  const decrement = () => {
    count --;
    console.log(count);
  };

  return { increment,decrement};
};

const counter = createCounter();

counter.increment();
counter.increment();
counter.decrement();



function createCartItem(item, quantity) {

  const increaseQuantity =() => {
    quantity++;
    console.log(`Increased quantity of ${item} to ${quantity}`);
  };

  const decreaseQuantity =() => {
    quantity--;
    console.log(`Decreased quantity of ${item} to ${quantity}`);
  };


  return { 
    item, 
    quantity, 
    increaseQuantity,
    decreaseQuantity,
  };

}

const cartItem = createCartItem("T-shirt, 2")
  cartItem.increaseQuantity();




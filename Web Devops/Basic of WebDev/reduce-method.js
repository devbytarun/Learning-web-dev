const prices = [100, 250, 50, 300];

const totalPrice = prices.reduce((total, price) => total + price, 0);

console.log("total price:", totalPrice);

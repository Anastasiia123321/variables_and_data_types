const milk = 15.678;
const meat = 123.965;
const fish = 90.2345;

console.log(`milk price: ` + milk);
console.log(`meat price: ` + meat);
console.log(`fish price: ` + fish);

const maxPrice = Math.max(milk, meat, fish);
console.log(`Max Price: ` + maxPrice);

const minPrice = Math.min(milk, meat, fish);
console.log(`Min price: ` + minPrice);

const goodsSum = (milk + meat + fish);
console.log(`Sum of goods: ` + goodsSum);

const goodsMathSum = (Math.floor(milk) + Math.floor(meat) + Math.floor(fish));
console.log(`Sum of goods (floor): ` + goodsMathSum);

const goodsSumToHundred = Math.floor((milk + meat + fish)/100) * 100;
console.log(`Sum of goods (*100): ` + goodsSumToHundred);


const multiplicity = !!(Math.floor(goodsSum) % 2) == 0;
console.log(`Multiplicity of goods sum is: ` + multiplicity);

const number = 500;

const clientMoney = number - goodsSum;
console.log(`Client Money: ` + clientMoney);

const midPrice = goodsSum/3;

console.log("Midle price : " +  midPrice.toFixed(2));

const discount = Math.random();
console.log(`Discount: ` + (discount.toFixed(2) * 100) + `%`);

const lost = (goodsSum/2) - (goodsSum * discount);
console.log('Lost profit:' + lost);

let priceSaleMilk = milk * discount;
priceSaleMilk = milk - priceSaleMilk;
priceSaleMilk = priceSaleMilk.toFixed(2);
console.log(`Milk - price with random sale: ` + Math.abs(priceSaleMilk));

let priceSaleMeat = meat * discount;
priceSaleMeat = meat - priceSaleMeat;
priceSaleMeat = priceSaleMeat.toFixed(2);
console.log(`Meat - price with random sale: ` + priceSaleMeat);

let priceSaleFish = fish * discount;
priceSaleFish = fish - priceSaleFish;
priceSaleFish = priceSaleFish.toFixed(2);
console.log(`Fish price with random sale: ` + priceSaleFish);

let costMilk = (milk / 2) - priceSaleMilk;
console.log(`Lost profit milk: ` + costMilk);
let costMeat = (meat /2) - priceSaleMeat;
console.log(`Lost profit meat: ` + costMeat);
let costFish = (fish / 2) - priceSaleFish;
console.log(`Lost profit fish: ` + costFish);


console.log(`
Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Сума цін: ${goodsSum}
Сума заокруглена в меншу сторону: ${goodsMathSum}
Сума заокруглена до сотні: ${goodsSumToHundred}
Парність числа: ${multiplicity}
Сума здачі з 500 грн: ${clientMoney}
Середнє значення: ${midPrice}
Знижка: ${discount}
Ціна зі знижкою milk: ${priceSaleMilk}
Ціна зі знижкою meat: ${priceSaleMeat}
Ціна зі знижкою fish: ${priceSaleFish}
Упущена вигода milk: ${costMilk}
Упущена вигода meat: ${costMeat}
Упущена вигода fish: ${costFish}
`);
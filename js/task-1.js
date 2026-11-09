/* Оголоси функцію makeTransaction, яка очікує два параметри:

quantity — число, кількість замовлених дроїдів
pricePerDroid — число, вартість одного дроїда

Значення параметрів задаються під час виклику. Функція повертає рядок:

You ordered <quantity> droids worth <totalPrice> credits!
Де:

<quantity> — кількість замовлених дроїдів
<totalPrice> — загальна вартість замовлення (вартість усіх замовлених дроїдів)

Встав код нижче після оголошення функції для перевірки. Залиш його для перевірки ментором.

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!" */

/* Code */

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  const massage = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  return massage;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

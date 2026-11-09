/* Оголоси функцію getElementWidth, яка очікує три параметри:

content — число, ширина контенту
padding — число, горизонтальний паддінг для кожної зі сторін
border — число, товщина бордера для кожної зі сторін

Значення параметрів — числа, цілі або дробові. Функція повертає число — загальну ширину елемента за формулою:
загальна ширина = content + padding * 2 + border * 2

Встав код нижче після оголошення функції для перевірки. Залиш його для перевірки ментором.

console.log(getElementWidth(50, 8, 4)); // 74
console.log(getElementWidth(60, 12, 8.5)); // 101
console.log(getElementWidth(200, 0, 0)); // 200 */

/* Code */
function getElementWidth(content, padding, border) {
  const width = content + padding * 2 + border * 2;
  return width;
}

console.log(getElementWidth(50, 8, 4)); // 74
console.log(getElementWidth(60, 12, 8.5)); // 101
console.log(getElementWidth(200, 0, 0)); // 200

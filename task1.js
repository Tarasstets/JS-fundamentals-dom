// На HTML-сторінці є ненумерований список з id="list", який містить 5 елементів <li>
// Використовуючи засоби DOM, отримай доступ до всіх елементів списку та виведи їх вміст в консоль (console.log) в такому порядку:
// перший елемент → останній елемент → другий елемент → третій елемент → четвертий елемент
// *Додатково: кількість елементів може бути довільною і невідомою наперед
// *Додатково: на сторінці можуть бути інші списки, всередині потрібного списку можуть бути інші елементи, крім <li>.
// Вважайте, що скрипт підключено в кінці body, тести не генерують подію `DOMContentLoaded`.

const lists = document.querySelectorAll("ul#list");
lists.forEach((list) => {
  if (list) {
    const items = Array.from(list.children).filter((el) => el.tagName === "LI");

    if (items.length > 0) {
      console.log(items[0].textContent);

      if (items.length > 1) {
        console.log(items[items.length - 1].textContent);
      }
      for (let i = 1; i < items.length - 1; i++) {
        console.log(items[i].textContent);
      }

      if (items.length === 2) {
        console.log(items[1].textContent);
      }
    }
  }
});

//npx jest task1.test.js

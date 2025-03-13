// Простилізуйте елементи, як показано на зображенні task2.png.
// - Фон заголовка має бути "lightgreen", шрифт — жирний (font-weight: 700).
// - Колір другого параграфа — "red".
// - Третій параграф має бути підкреслений (underline).
// - Четвертий параграф має бути курсивним (italic).
// - Список має бути без маркерів і відображатися в одну лінію за допомогою flex.
// - На сторінці є елемент <span>, який потрібно приховати, встановивши властивість display: none.

const h1 = document.getElementById("title");
if (h1) {
    h1.style.background = "lightgreen";
}

const paragraphs = document.getElementById("myDiv");
if (paragraphs) {
    const pItems = Array.from(paragraphs.children).filter(el => el.tagName === "P");
    pItems[0].style.fontWeight = "700";
    pItems[1].style.color = "red";
    pItems[2].style.textDecoration = "underline";
    pItems[3].style.fontStyle = "italic";

}

const myList = document.getElementById("myList")
if (myList) {
    myList.style.listStyle = "none";
    myList.style.display = "flex";
}

const span = document.querySelector("span");
if (span) {
    span.style.display = "none";
}

//npx jest task2.test.js
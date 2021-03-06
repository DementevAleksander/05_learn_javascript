/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// Моя версия.
// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
// const advertising = document.querySelector('.promo__adv');
// advertising.remove();
const advertising = document.querySelector('.promo__adv'),
      img = advertising.getElementsByTagName('img');
      img[0].remove();
      img[1].remove();

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
const promoGenre = document.querySelector('.promo__genre');
      promoGenre.remove();
const promoBg = document.querySelector('.promo__bg');     
      promoBg.insertAdjacentHTML("afterbegin", '<div class="promo__genre">КОМЕДИЯ</div>');

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS
promoBg.style.cssText = 'background: url(img/bg.jpg) center center/cover no-repeat;';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 
// const products = movieDB.movies.split(", "); //указывается разделитель через который указывается перечисление
// products.sort(compareName); //сортировка в алфавитном порядке
// function compareName(a, b) { //callback-функция для корректной сортировки числел
//     return a - b;
// }
// console.log(movieDB.movies);

// 5) Добавить нумерацию выведенных фильмов

//--------------------------------------------Как задумывал тьютер------------------------------------------------//
// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
// const adv = document.querySelectorAll('.promo__adv img');
// adv.forEach(item => {
//     item.remove();
// });

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
// const poster = document.querySelector('.promo__bg'),
//       genre = poster.querySelector('.promo__genre');
// genre.textContent = 'драма';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// const poster = document.querySelector('.promo__bg');
// poster.style.backgroundImage = 'url("img/bg.jpg")';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 
// и
// 5) Добавить нумерацию выведенных фильмов

const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += // берём предыдущее значение (пустота) и добавляе запись в кавычках.
    `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});


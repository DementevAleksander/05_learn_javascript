"use strict";

// ----------------------- Типы данных и переменные ------------------------------------------------ //

// let number = 5;  //number
// console.log(number);

// let text = 'Увау!';  //string
// console.log(text);

// let boolean = true;  //Boolean
// console.log(true);

// console.log(null777); //null, script.js:12 Uncaught ReferenceError: null777 is not defined

// let und; //undefined
// console.log(und);

// let obj = { //Object
//     name: 'apple',
//     weight: 200
// };
// console.log(obj.name);
// console.log(obj['name']);

// let arr = ['plump.png', 'orange.jpg', 7777, 'apple.bmp', {}, []]; //Массивы[]
// console.log(arr[1]);

// alert ('Здравствуйте!');

// const result = confirm('Прочитаете до конца?');
// console.log(result);

// const answer = +prompt("Сколько вам лет?", "");
// console.log(answer + 5);

// const answer = [];
// answer[0] = prompt("Вопрос 1?", "");
// answer[1] = prompt("Вопрос 2?", "");
// answer[2] = prompt("Вопрос 3?", "");
// console.log(answer);

// const user = prompt("Как вас зовут?", "");
// alert(`Привет, ${user}. Очень рады вас видеть на нашем сайте`);



// ----------------------- Операторы в JS ------------------------------------------------ //

/*
let incr = 10,
    decr = 10;
incr++; //++ - оператор инкримента, то есть увеличение на единицу
decr--; //-- - оператор декримента, то есть уменьшение на единицу
console.log(incr);
console.log(decr);

console.log(5%2);

console.log(2+5 == 7); // true
console.log(2+5 == '7'); // true
console.log(2+5 === 7); // true
console.log(2+5 === '7'); // false

// let isChecked = false,
//        isClosed = false;
// console.log (isChecked || isClosed);

let isChecked = false,
    isClosed = true;
console.log (isChecked || !isClosed);

console.log(2+5*3 != 7); // true
*/

// ----------------------- Условия ------------------------------------------------ //
/*
if (4 == 9) {
    console.log('OK!');
} else {
    console.log('Error!');
}

const num = '50';

if (num < 30) {
    console.log('Меньше 30.');
} else if (num > 60) {
    console.log('Больше 60.');
} else {
    console.log('Где-то между 30и и 60и!');
}

//(num === 50) ? console.log('Верное условие, это 50.') : console.log('Не верное условие, это не 50.');

switch (num) {
    case '49':
        console.log('Не верно. 49 это не 50.');
        break; //ставится всегда для корректно работы.
    case '100':
        console.log('Не верно. 100 это не 50.');
        break;
    case '50':
        console.log('Верно. 50 это 50.');
        break;
    default: //если ни одно значение не подошло
        console.log('Ни одно из значений не подошло.');    
        break;
}
*/

// ----------------------- Циклы ------------------------------------------------ //

// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

/*
let num = 50;
for (let i = 1; i < 5; i++) {
     console.log(num);
     num++;
} 

//let num = 50;
for (let i = 1; i < 100; i++) {
    if (i === 10) {
        break; // остановка цикла, когда i = 10. То есть 10 уже не выведется, так как console.log(i); идёт после.
        // continue; // исключает значение указанное в if.
    }
     console.log(i);
} 
*/


// ----------------------- Функции ------------------------------------------------ //
/*
// function declaration.
//function имя (аргумент) {}. 
let num = 10;
function showFirstMessage(text) {
    console.log(text);
    num = 20;
    console.log(num);
}
//вызов фукнции
showFirstMessage('Привет, Александр Андреевич! Мы вам очень рады!');
console.log(num);

function calc(a, b) {
    return (a + b);
}
console.log(calc(10, 1));
console.log(calc(100, 1));
console.log(calc(1000, 1));

function ret() {
    let num = 50;
    // какая-то логика программы
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

//function expressio.
const logger = function () {
    console.log("ПриветИК!");
};
logger();

// Стрелочные функции
const calculate = (a, b) => {
    return a + b;
};
*/

// ----------------------- Методы и свойства строк и чисел ------------------------------------------------ //
//Строки
const str = "коЛЛичество СИМВолов";
//const arr = [1, 2, 7];
//console.log(str.length); //подсчёт количества символов
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const food = "Вкусный бутербродище!";
console.log(food.indexOf("терб"));

const logg = "Привет, дружище!";
console.log(logg.slice(8, 17));
console.log(logg.substring(8, 17));
console.log(logg.substr(8, 8));

//Числа
const numb = 15.499999999999999999999999999999999999999999999999999999999999999;
console.log(Math.round(numb));

const weight = "145.3523523px";
console.log(parseInt(weight));
console.log(parseFloat(weight));


// ----------------------- Callback-Функция ------------------------------------------------ //
/*
function first() {
    //выполнение действий
    setTimeout(function() {
        console.log(1);
    }, 1000);
}
function second() {
        console.log(2);
}

first();
second();

//Callback-Функция
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
function done() {
    console.log('Я прошёл этот урок.');
}
learnJS('JavaScript', done);
*/

// ----------------------- Объекты, деструктуризация объектов ------------------------------------- //

const options = {
    name: 'text',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    // создание метода
    makeTest: function () {
        console.log("Test");
    }
};
options.makeTest(); //запускаем метод
const {border, bg} = options.colors; //диструктуризация
console.log(border);

console.log(Object.keys(options).length);
// console.log(options.name);
// delete options.name;
// console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);




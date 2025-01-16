"use strict";

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
  const myNum= 10;
  console.log(myNum);

// ім'я змінної: myStr, значення: 'some string'
  const myStr = 'some string';
  console.log(myStr);
// ім'я змінної: myBool, значення: true
  const isMyBool = true;
  console.log(isMyBool);

// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
  const myArr =  [1, 2, 3, 4, 5];
  console.log(myArr);
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'
  let myObj= {
      first: 'First Name',
      last: 'Last Name',
  }
  console.log(myObj);

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

  const decimal2 = myNum.toFixed(2);
  console.log(decimal2);

// decimal2

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

  let myTest = 20;
  console.log(myTest);

  myTest += 5;
  console.log("myTest += 5:", myTest);

  myTest -= 3;
  console.log("myTest -= 3:", myTest);

  myTest *= 2;
  console.log("myTest *= 2:", myTest);

  myTest /= 4;
  console.log("myTest  /= 4:", myTest);

  myTest %= 6;
 console.log("myTest  %= 6:", myTest);

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
  const myPi = Math.PI;
  console.log(myPi);
// округлене значення числа 89.279 → myRound
 let myRound = 89.279;
 console.log(myRound);
// випадкове число між 0..10 → myRandom
  console.log('random', Math.floor(Math.random()*11));
// 3 у 5 степені → myPow
  let powerNumber = Math.pow(3, 5);
  console.log(powerNumber);

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
// strObj


  let strObj = {
      str: "Мама мыла раму,  рама мыла маму",
      length: "Мама мыла раму, рама мыла маму". length
  };
   console.log(strObj);

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos
// isRama


  let isRamaPos = strObj.str.includes('рама');
  console.log(isRamaPos);
  let ramaPos = strObj.str.indexOf('рама');
  console.log(ramaPos);



/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace



let strReplace = strObj.str.replace("мыла", "моет").replace("рама", "Рама").replace("мыла", "держит");
console.log(strReplace);

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
// var upperStr
// var lowerStr


  const someStr = 'some STRING';


  const upperStr = someStr.toUpperCase();


  const lowerStr = someStr.toLowerCase();

  console.log("Upper case:", upperStr);
  console.log("Lower case:", lowerStr);
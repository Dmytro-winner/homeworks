

/*
 * #1 Розробити функцію createDomElement, яка приймає назву тега, текстовий вміст та контейнер, до якого потрібно
 *  додати новий елемент. Функція створює новий елемент з вказаним тегом та текстовим вмістом
 *  і додає цей елемент до заданого контейнера.
 *
 * Вимоги:
 * 1. Функція має приймати три параметри:
 *    - tagName - рядок, що вказує на назву тега нового елемента.
 *    - textContent - рядок, що вказує на текстовий вміст нового елемента.
 *    - container - DOM-елемент, до якого буде додано новий створений елемент.
 * 2. Функція має створити новий DOM-елемент з вказаним тегом і текстовим вмістом.
 * 3. Створений елемент має бути доданий до вказаного контейнера.
 * 4. Функція повертає посилання на створений елемент, що дозволяє подальшу взаємодію з ним.
 * 5. Функція має бути експортована для використання в інших модулях та тестування.
 */


// Демонстрація використання функції
// const container = document.body; // В якості прикладу використовуємо body як контейнер
// const createdElement = createDomElement('p', 'This paragraph has been added to the specified container.', container);
// console.log(createdElement);
// console.log(createDomElement('span', 'This span has been added to the paragraph.', createdElement))
// Задаємо контейнер (наприклад, з ID 'content')

function createDomElement(tagName, textContent, container) {

    const element = document.createElement(tagName);

    element.textContent = textContent;

    container.appendChild(element);

    return element;
}


const container = document.body;
const createdElement = createDomElement('p', 'This paragraph has been added to the specified container.', container);
console.log(createdElement);

console.log(createDomElement('span', 'This span has been added to the paragraph.', createdElement));
/*

/*
 * #2 Розробити функцію setLocalStorageInfo, яка встановлює LocalStorage змінну з корисною інформацією
 * і можливим таймаутом в секундах
 * Перший параметр - імʼя змінної
 * Другий параметр - значення змінної
 * Третій параметр (опціональний)
 *
 * Вимоги:
 *
 * 1. Функція приймає два обовʼязкові аргументи: key (назва інформаційного параметра) та value (значення параметра).
 * 2. Функція приймає третій опціональний параметр - таймаут в секундах. Якщо він переданий, видаляє змінну через цей час
 * 3. При встановленні змінної, функція виводить інформаційне повідомлення у консоль про успішне зберігання даних.
 * 4. Функція може обробляти масиви та обʼєкти в якості value
 */

//function setLocalStorageInfo(key, value, timeout) {
    // code here
//}

//const userNames = ['Oleksii', 'Oleksandr', 'Anna', 'Dmytro'];

//const person = {
    //name: 'John Wick',
    //email: 'john@example.com',
    //password: 'password@example.com',
//}

// Демонстрація використання функції
// setLocalStorageInfo('language', 'en');
// setLocalStorageInfo('userNames', userNames, 30);
// setLocalStorageInfo('user', person);



function setLocalStorageInfo(key, value, timeout) {

  if (Array.isArray(value) || typeof value === 'object') {
    value = JSON.stringify(value);
  }


  localStorage.setItem(key, value);


  console.log(`Змінну ${key} успішно збережено у LocalStorage.`);


  if (timeout) {
    setTimeout(() => {
      localStorage.removeItem(key);
      console.log(`Змінну ${key} видалено з LocalStorage після ${timeout} секунд.`);
    }, timeout * 1000); // перетворюємо таймаут у мілісекунди
  }
}


setLocalStorageInfo('language', 'en');
setLocalStorageInfo('userNames', ['Oleksii', 'Oleksandr', 'Anna', 'Dmytro'], 30);
setLocalStorageInfo('user', {
  name: 'John Wick',
  email: 'john@example.com',
  password: 'password@example.com',
});


/*
* #3
*
* Задача: Зчитування змінної з LocalStorage та виведення її в консоль
* Мета: Розробити функцію getLocalStorageInfo, яка повертає значення змінної, яка була встановлена setLocalStorageInfo
* Параметр - імʼя змінної
*
* Вимоги:
*
* 1. Функція приймає аргумент: key (назва інформаційного параметра)
* 2. Функція повертає значення, якщо воно є, та undefined, якщо немає такої інформації в LocalStorage
*/

//function getLocalStorageInfo(key) {
    // code here
//}

// console.log(getLocalStorageInfo('language')); // en
// console.log(getLocalStorageInfo('userNames')); // ['Oleksii', 'Oleksandr', 'Anna', 'Dmytro']
// console.log(getLocalStorageInfo('user')); // обʼєкт персони John Wick поданий вище по коду
// console.log(getLocalStorageInfo('nonExistentVariable')); // undefined
//

//export { createDomElement, setLocalStorageInfo, getLocalStorageInfo }

function getLocalStorageInfo(key) {

    const value = localStorage.getItem(key);


    if (value !== null) {
        try {

            return JSON.parse(value);
        } catch (e) {

            return value;
        }
    }

    return undefined;
}


console.log(getLocalStorageInfo('language'));
console.log(getLocalStorageInfo('userNames'));
console.log(getLocalStorageInfo('user'));
console.log(getLocalStorageInfo('nonExistentVariable'));

export { getLocalStorageInfo };
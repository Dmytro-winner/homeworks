console.log('#9. JavaScript homework example file')

/*
 * #1
 *
 * Задача: Відстежування кліку на кнопку та виведення повідомлення
 * Мета: Розробити функцію, яка призначає обробник події кліку на кнопку з певним ID і виводить у консоль заздалегідь визначене повідомлення при кожному кліку на кнопку.
 *
 * Вимоги:
 * 1. Функція має приймати два параметри:
 *    - buttonId (рядок) - ID кнопки, на яку потрібно встановити обробник події.
 *    - message (рядок) - повідомлення, яке буде виводитись у консоль при кліку на кнопку.
 * 2. Функція має знайти кнопку за допомогою buttonId і призначити їй обробник події кліку.
 * 3. При кліку на кнопку у консоль має виводитись задане message.
 * 4. Функція має бути експортована для подальшого використання і тестування.
 *
 */

//function handleButtonClick(buttonId, message) {
    // code here
//}

// Демонстрація використання функції (припустимо, що HTML містить кнопку з ID 'myButton')
// handleButtonClick('myButton', 'Button clicked!');


function handleButtonClick(buttonId, message) {

    const button = document.getElementById(buttonId);


    if (button) {

        button.addEventListener('click', function() {

            console.log(message);
        });
    } else {
        console.log(`Кнопка з ID "${buttonId}" не знайдена.`);
    }
}


handleButtonClick('myButton', 'Button clicked!');


/*
 * #2
 *
 * Задача: Розробка функції відстеження позиції курсору миші
 * Мета: Створити функцію trackMousePosition, яка встановлює обробник події для відстеження руху миші по документу та виводить в консоль координати курсору миші (X та Y).
 *
 * Вимоги до реалізації:
 * 1. Функціональність: Функція має відслідковувати рух миші по документу. При кожному русі миші функція має виводити в консоль координати clientX та clientY, які представляють позицію курсору відносно вікна переглядача.
 * 2. Реєстрація обробника події: Функція має використовувати document.addEventListener для реєстрації обробника події mousemove.
 * 3. Вивід даних: При спрацьовуванні події mousemove, функція має виводити рядок у форматі `"Mouse X: [X], Mouse Y: [Y]"`, де `[X]` та `[Y]` - це відповідні координати курсору миші.
 *
 */

//function trackMousePosition() {
    // code here
//}

// console.log(trackMousePosition())

function trackMousePosition() {
    document.addEventListener('mousemove', function(event) {
        console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
    });
}

trackMousePosition();


/*
 * #3
 *
 * Задача: Реалізація делегування подій для відстеження кліків на елементах списку
 * Мета: Створити функцію setupEventDelegation, яка дозволить встановити обробник подій на весь список, замість окремих елементів `<li>`. Функція повинна відстежувати кліки на елементах <li> у межах заданого списку і логувати текст "Item clicked: [Текст Елемента]", де "[Текст Елемента]" - це текст клікнутого елемента `<li>`, в консоль.
 *
 * Вимоги до реалізації:
 * 1. Вибір елемента списку: Функція повинна приймати селектор CSS як аргумент, що вказує на елемент списку `<ul>` або `<ol>`, до якого буде застосовано делегування подій.
 * 2. Встановлення обробника подій: Використовуючи метод addEventListener, функція має додати обробник для події `click` на весь список. Обробник повинен спрацьовувати при кліку на будь-який з елементів `<li>` у цьому списку.
 * 3. Логування кліків: Коли елемент <li> клікнуто, функція має вивести у консоль повідомлення у форматі "Item clicked: [Текст Елемента]", де "[Текст Елемента]" має бути текстом клікнутого елемента <li>. Текст елемента має бути обрізаним trim(), щоб видалити зайві пробіли на початку та в кінці.
 *
 */

// function createTestList() {
//   document.body.innerHTML = `
//     <ul id="testList">
//       <li>Item 1</li>
//       <li>Item 2</li>
//       <li>Item 3</li>
//     </ul>
//     `
// }
// createTestList()

//function setupEventDelegation(selector) {
    // code here
//}

// setupEventDelegation('#testList')

// Експорт функції для використання та тестування
//export { handleButtonClick, trackMousePosition, setupEventDelegation }

function setupEventDelegation(selector) {

    const list = document.querySelector(selector);

    if (!list) {
        console.error("Список не знайдений за вказаним селектором");
        return;
    }


    list.addEventListener('click', function(event) {

        if (event.target && event.target.tagName === 'LI') {

            console.log(`Item clicked: ${event.target.textContent.trim()}`);
        }
    });
}

setupEventDelegation('#testList');